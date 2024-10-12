export default function Login() {
    return (
        <div className="flex justify-center items-center border border-black md:mt-32 ">
            <div className="flex flex-col w-1/2 px-4 py-4 space-y-8 items-center">
                <h1 className="text-5xl text-green-400" style={{ fontFamily: 'Bagel Fat One, sans-serif' }}>Login Here</h1>
                <div className="w-1/2 flex relative">
                    <input type="email" placeholder="bharamaramba@gmail.com" className="border border-black px-4 py-2 w-full rounded-md" />
                    <i className='bx bx-user absolute top-2 right-1 text-2xl font-bold text-green-400'></i></div>
                <input type="password" placeholder="Bhrama@0" className="border border-black px-4 py-2 w-1/2 rounded-md" />
                <button className="text-xl bg-green-400 w-1/6 rounded-md p-1 font-bold">Log In</button>
                <div className="flex justify-between w-1/2">
                    <a className="" href="#">Forgot Password</a>
                    <a className="" href="#">New User?</a>
                </div>
                <div className="w-1/2 flex items-center">
                    <hr className="border border-black flex-grow"></hr>
                    <h2 className="text-md px-2">Or</h2>
                    <hr className="border border-black flex-grow"></hr>
                </div>
                <div className="flex space-x-4 justify-center w-1/2">
                    <button className="text-center px-4 py-2 rounded-full text-3xl">
                        <i
                            className="bx bxl-google"
                            style={{
                                background: 'linear-gradient(-220deg, #EA4335 30%, #FBBC05 50%, #4285F4 66%, #34A853 55%)',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                            }}
                        ></i>
                    </button>
                    <button className="text-center px-4 py-2 rounded-full text-3xl">
                        <i className='bx bxl-facebook text-blue-800'></i>
                    </button>
                    <button className="text-center px-4 py-2 rounded-full text-3xl">
                        <i className='bx bxl-twitter text-blue-400'></i>
                    </button>
                </div>
            </div>
        </div>
    );
}
