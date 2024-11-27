const Pricing = () => {
  return (
    <>
        <h1 className="md:text-7xl text-5xl text-gray-900 font-bold max-w-[1000px] m-auto text-center relative top-24  ">Goal-oriented pricing that scales with you</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2  relative top-40 gap-10 mb-20 max-w-[1400px] m-auto">


        {/* 1 */}
        <div className="border  rounded-xl flex gap-4 justify-center group items-center flex-col p-6">
        <h1 className='text-3xl font-bold'>
            Starter
        </h1>

        <p className='text-base text-center w-[70%] '>For small businesses and Basic chatbot, up to<br/> <b>1,000 messages/month</b>.</p>

        <div className='text-2xl text-center '>
            <sup >$</sup>
            <b className='text-7xl  '>39</b>/mo
        </div>

        <span className='text-sm font-bold text-center bg-green-100 border-1 border-green-600 text-green-700 p-1 rounded-lg '>Annual discount applied</span>

        <button className="p-1  h-14 w-52 rounded-xl group-hover:bg-black  group-hover:text-white  bg-white border-2 border-black hover:text-white hover:bg-black text-black text-xl font-bold">
            Start Free Trial
          </button>

        </div>

        {/* 2 */}

        <div className="border  rounded-xl flex gap-4 justify-center group items-center flex-col p-6">
        <h1 className='text-3xl font-bold'>
            Team
        </h1>

        <p className='text-base text-center w-[70%] '>For Growing teams Multi-channel, analytics,  <b>10,000 messages/month</b>.</p>

        <div className='text-2xl text-center '>
            <sup >$</sup>
            <b className='text-7xl  '>100</b>/mo
        </div>

        <span className='text-sm font-bold text-center bg-green-100 border-1 border-green-600 text-green-700 p-1 rounded-lg '>Annual discount applied</span>

        <button className="p-1  h-14 w-52 rounded-xl group-hover:bg-black group-hover:text-white  bg-white border-2 border-black hover:text-white hover:bg-black text-black text-xl font-bold">
            Start Free Trial
          </button>

        </div>

        {/* 3 */}

        <div className="border-2 border-blue-600  rounded-xl flex gap-4 justify-center group items-center flex-col p-6">
        <h1 className='text-3xl font-bold'>
        Professional
        </h1>

        <p className='text-base text-center w-[70%] '>For large businesses Advanced AI, support,<b>unlimited messaging</b>.</p>

        <div className='text-2xl text-center '>
            <sup >$</sup>
            <b className='text-7xl  '>140</b>/mo
        </div>

        <span className='text-sm font-bold text-center bg-green-100 border-1 border-green-600 text-green-700 p-1 rounded-lg '>Annual discount applied</span>

        <button className="p-1  h-14 w-52 rounded-xl bg-black  group-hover:bg-black group-hover:scale-105 border-2 border-black  text-white text-xl font-bold">
            Start Free Trial
          </button>

        </div>

            {/* 4 */}

            <div className="border  rounded-xl flex gap-4 justify-center group items-center flex-col p-6">
        <h1 className='text-3xl font-bold'>
        Enterprise
        </h1>

        <p className='text-base text-center w-[70%] '>For Large organizations Tailored features, dedicated account manager,<br/> <b>custom SLA</b>.</p>

        <div className=' text-center '>
           
            <b className='text-7xl  '>🤝</b>
        </div>

       

        <button className="p-1  h-14 w-52 rounded-xl group-hover:bg-black group-hover:text-white  bg-white border-2 border-black hover:text-white hover:bg-black text-black text-xl font-bold">
            Request a call
          </button>

        </div>

       
      </div>
    </>
  );
};

export default Pricing;
