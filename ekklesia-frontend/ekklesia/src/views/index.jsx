
import Hero from '../assets/cover.jpg';
    function index(){
        return (
            <div>
            <div className="relative w-full h-screen    ">
            <img src={Hero}alt="Hero" className="absolute inset-0 object-cover w-full h-full" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0  mt-52  text-center text-white">
                <h1 className="text-5xl font-bold ">
                    Creating A Culture,
                </h1>
                <p className='text-5xl font-bold mt-1 font-serif'>Of Worship</p>
                <button className='mt-6 px-6 py-2 border font-semibold border-white text-white rounded hover:bg-white hover:text-black transition duration-300'>
                    Connect to cellgroup
                </button>
            </div>
            </div>
                <section>
                    <div>
                        <h1>Other Text</h1>
                    </div>
                </section>
            </div>


        );
    }

    export default index;