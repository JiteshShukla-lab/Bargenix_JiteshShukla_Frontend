import chatbot from "../images/chatbot.svg";
import bgchatbot from '../images/bgchatbot.svg'
const Home = () => {
  return (
    <>
      <div className="relative top-32  ">
        {/* <img className='w-[575px] relative top-14 left-7 ' src={chatbot} alt="chatbot" /> */}

        <h1 className=" text-5xl sm:text-7xl text-gray-900 font-bold max-w-[1000px] m-auto text-center ">
          Engage smarter, faster, <br /> and better with AI Chatbot
        </h1>
        <br />
        <h2 className="text-xl sm:text-2xl max-w-[750px] m-auto text-center">
          The ultimate chatbot platform designed to transform customer
          interactions into effortless experiences. Get <b>24/7 support</b> and{" "}
          <b> ultra-high</b> satisfaction rates.
        </h2>

        <div className=" relative top-10 flex justify-center items-center gap-7 flex-wrap">
          <input
            type="text"
            placeholder="Enter Your Business email"
            className="h-16 w-[300px] sm:w-[500px] rounded-2xl text-2xl p-2 border-2 border-black outline-[20px] focus:outline-sky-500 "
          />
          <button className="p-2  h-16 w-40 rounded-2xl bg-indigo-600 hover:bg-black text-white text-xl font-bold">
            Sign up free
          </button>
          <br />

          <div className="flex justify-center max-sm:flex-wrap items-center gap-10 w-full">
            <span> <b className='text-green-500'>&#10003;</b> Free 14-day trial</span>
            <span> <b className='text-green-500'>&#10003;</b> No credit card required</span>
          </div>
        </div>

        <img src={bgchatbot} alt="chatbot" className='w-[90% ] sm:w-[70%] m-auto relative top-20' />
        <div className="w-full md:h-20 bg-gray-700 text-white relative top-28 md:top-10 flex justify-center max-md:flex-wrap items-center gap-10 mb-36 p-2">
           
           <span className="text-xl"><b className='text-green-500'>&#10003;</b> 24/7 Availability</span>
           <span className="text-xl">&#129504; Conversational Brilliance</span>
           <span className="text-xl">&#128488; Efficiency Redefined</span>
           <span className="text-xl">&#x1F512;Secure and Private</span>
          
        </div>
      </div>
    </>
  );
};

export default Home;
