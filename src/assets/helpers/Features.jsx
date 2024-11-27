import features from "../images/features.svg";
import chatbot from "../images/chatbot.svg";

const Features = () => {
  return (
    <>
      <div className="relative top-40  mb-52 p-2 ">
        <div className="flex justify-center items-center text-black w-56 m-auto p-2 rounded-lg shadow-lg ">
          <span className="text-center bg-slate-400 text-black p-1 rounded w-9 h-9 text-xl font-medium ">
            AI
          </span>
          <span className="text-center  p-1 text-xl font-medium ">
            ChatBot Features
          </span>
        </div>
        <br />
        {/* <img className='w-[575px] relative top-14 left-7 ' src={chatbot} alt="chatbot" /> */}

        <h1 className="md:text-7xl text-5xl text-gray-900 font-bold max-w-[1000px] m-auto text-center ">
          Deliver instant responses to customer inquiries 24/7
        </h1>
        <br />

        <div className=" relative top-10 flex justify-center items-center gap-7 flex-wrap">
          <input
            type="text"
            placeholder="Enter Your Business email"
            className="h-16 w-[500px] rounded-2xl text-2xl p-2 border-2 border-black outline-[20px] focus:outline-sky-500 "
          />
          <button className="p-2  h-16 w-40 rounded-2xl bg-indigo-600 hover:bg-black  text-white text-xl font-bold">
            Sign up free
          </button>
          <br />

          <div className="flex justify-center items-center gap-10 w-full">
            <span>
              {" "}
              <b className="text-green-500">&#10003;</b> Free 14-day trial
            </span>
            <span>
              {" "}
              <b className="text-green-500">&#10003;</b> No credit card required
            </span>
          </div>
        </div>

        {/* f1 */}

        <div className="rounded-3xl max-w-[1400px] border border-indigo-600 shadow-lg hover:shadow-indigo-400 p-6   m-auto relative top-28">
          <div className="flex justify-around gap-4 max-md:flex-wrap flex-row items-center">
            <img src={features} alt="features" className="w-[35%]" />

            <div className="flex justify-center flex-col items-center gap-10 w-full">
              <h2 className="text-4xl sm:text-6xl">Omni-Channel Integration</h2>
              <p>
                Reach your audience wherever they are—website, social media, or
                messaging apps.
              </p>
            </div>
          </div>
        </div>
        <br />

        {/* f2 */}

        <div className="rounded-3xl max-w-[1400px] border border-indigo-600 shadow-lg hover:shadow-indigo-400 p-6 m-auto relative top-28">
          <div className="flex justify-around gap-4  max-md:flex-wrap flex-row items-center">
            <div className="flex justify-center flex-col items-center gap-10 w-full">
              <h2 className="text-4xl sm:text-6xl">Smart Conversation Flows</h2>
              <p>
                Build dynamic chat paths that adjust based on user input,
                guiding them toward the answers they need.
              </p>
            </div>

            <img src={features} alt="features" className="w-[35%]" />
          </div>
        </div>
        <br />

        {/* f3 */}

        <div className="rounded-3xl max-w-[1400px] border  border-indigo-600 shadow-lg hover:shadow-indigo-400 p-6  m-auto relative top-28">
          <div className="flex justify-around gap-4  max-md:flex-wrap flex-row items-center">
            <img src={features} alt="features" className="w-[35%]" />
            <div className="flex justify-center flex-col items-center gap-10 w-full">
              <h2 className="text-4xl sm:text-6xl">AI-Driven Personalization</h2>
              <p>
                Offer personalized responses that adapt to individual customer
                preferences and behaviors.
              </p>
            </div>
          </div>
        </div>

        <br />

        {/* f4 */}

        <div className="rounded-3xl max-w-[1400px]  p-6  border-indigo-600 shadow-lg hover:shadow-indigo-400 border m-auto relative top-28">
          <div className="flex justify-around gap-4  max-md:flex-wrap flex-row items-center">
            <div className="flex justify-center flex-col items-center gap-10 w-full">
              <h2 className="text-4xl sm:text-6xl">Language Flexibility</h2>
              <p>
                Speak your customers’ language with support for multiple
                languages, breaking down barriers.
              </p>
            </div>

            <img src={features} alt="features" className="w-[35%]" />
          </div>
        </div>
        <br />
      </div>
    </>
  );
};

export default Features;
