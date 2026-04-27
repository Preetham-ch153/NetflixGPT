
const VideoTitle = ({title , overview }) => {
    return (
        <div className="absolute pt-45 w-screen aspect-video asp text-white bg-linear-to-r from-black">
            <div className="px-12">
                <h1 className="text-6xl w-4/12 font-bold my-4">{title}</h1>
                <p className="w-3/12 px-2 text-lg">{overview}</p>
            </div>
            <div className="m-2 my-4 px-12">
                <button className="mx-1 bg-white px-11 py-4 text-black rounded-lg cursor-pointer text-lg hover:opacity-80">▶ Play</button>
                <button className="mx-2 bg-gray-500 px-11 py-4 text-white rounded-lg cursor-pointer hover:opacity-80">🛈︎ More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;