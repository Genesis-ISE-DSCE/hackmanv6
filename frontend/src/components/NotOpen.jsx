import '../index.css'

function NotOpen() {
    return (
        <div className="notopen h-screen w-screen">

            {/* background image */}
            <a href="/"><img src={require('../assets/images/hackman_logo.png')} alt="Logo" className="fixed top-3 px-5 py-1 h-6 lg:top-2.5 lg:h-9 lg:py-1 md:h-9 md:py-1 ml-1" /></a>

            <div className="bg-black bg-opacity-50  flex items-center justify-center h-screen w-screen pt-20 pb-20">
        <h1 className="lg:text-7xl md:text-6xl text-white text-center font-poppins font-bold text-4xl">THIS PAGE IS NOT AVAILABLE</h1>
      </div>

        </div>
            );
}

export default NotOpen;