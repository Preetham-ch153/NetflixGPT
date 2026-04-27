import Header from "./Header";
import { useState, useRef } from "react";
import { Validate } from "./utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";
import { updateProfile, reload } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { APP_BG } from "./utils/constants";

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [isErrorMessage, setIsErrorMessage] = useState(null);
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const email = useRef(null);
  const password = useRef(null);
  const handleValidate = () => {
    const message = Validate(email.current?.value, password.current?.value);
    setIsErrorMessage(message);
    if (message) return;

    if (!isLoginForm) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
           updateProfile(user, {
            displayName: userName,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                }),
              );
              navigate("/browse");
            })
            .catch((error) => {
              setIsErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setIsErrorMessage(errorCode + "-" + errorMessage);
          
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setIsErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const handleToggle = () => {
    setIsLoginForm(!isLoginForm);
  };
  return (
    <div className="">
      <Header />
      <img
        className="absolute"
        src={ APP_BG }
        alt="logo"
      />
      <form
        className="absolute p-4 my-36 mx-auto w-3/12 right-0 left-0 bg-black text-white opacity-80 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-white text-3xl my-4">
          {isLoginForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isLoginForm && (
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)} 
            className="p-4 my-3 w-full border border-black bg-gray-700"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="p-4 my-3 w-full border border-black bg-gray-700"
          type="text"
          placeholder="Email Address"
        />
        <input
          ref={password}
          className="p-4 my-3 w-full border border-black bg-gray-700"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-600 font-bold">{isErrorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full cursor-pointer"
          onClick={handleValidate}
        >
          {isLoginForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-white cursor-pointer" onClick={handleToggle}>
          {isLoginForm ? "New User?Sign Up" : "Already Registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
