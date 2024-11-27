const About=()=>{
    return(
        <>
             <h1 className="text-5xl sm:text-7xl text-gray-900 font-bold max-w-[1000px] m-auto text-center relative top-32  ">Welcome to AI ChatBot</h1>
             <h2 className=" text-xl sm:text-2xl max-w-[750px] m-auto text-center relative top-40 ">
             At AI ChatBot, we believe communication is the foundation of every great business. Founded in 2024, our mission is to simplify and enhance interactions between businesses and their customers. With AI ChatBot AI and a user-friendly interface, ChatEase empowers businesses of all sizes to thrive in the digital age.
        </h2>
        <br />
        <br />

       

       <div className=" bg-purple-50 p-7 rounded-xl relative top-40 gap-10 mb-20 max-w-[1400px] m-auto">

        <h1 className="text-2xl sm:text-3xl text-gray-900 font-bold  m-auto text-left relative   "> ✨ What Makes Us Unique?</h1><br />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-7 rounded-xl relative  gap-10  max-w-[1400px] m-auto">
        {/* 1 */}
        <div className="border bg-white rounded-xl flex gap-4 justify-center group items-center flex-col p-6">
        <h1 className='text-3xl text-center font-bold'>
        Language Flexibility
        </h1>

        <p className='text-base text-center w-[70%] '>Our chatbot isn’t just about answers—it’s about meaningful interactions. Experience conversations that feel natural, engaging, and human-like.</p>

       

      

        <button className="p-1  h-14 w-52 rounded-xl group-hover:bg-black  group-hover:text-white  bg-white border-2 border-black hover:text-white hover:bg-black text-black text-xl font-bold">
       Read more
          </button>

        </div>

        {/* 2 */}

        <div className="border bg-white rounded-xl flex gap-4 justify-center group items-center flex-col p-6">
        <h1 className='text-3xl text-center font-bold'>
        Customized to You
        </h1>

        <p className='text-base text-center w-[70%] '>Whether it’s business support, education, or personal assistance, our chatbot adapts to your needs, delivering solutions tailored just for you.</p>

       

      

        <button className="p-1  h-14 w-52 rounded-xl group-hover:bg-black  group-hover:text-white  bg-white border-2 border-black hover:text-white hover:bg-black text-black text-xl font-bold">
       Read more
          </button>

        </div>

        {/* 3 */}

        <div className="border bg-white rounded-xl flex gap-4 justify-center group items-center flex-col p-6">
        <h1 className='text-3xl text-center font-bold'>
        Always Learning
        </h1>

        <p className='text-base text-center w-[70%] '>Powered by cutting-edge AI, our chatbot evolves with every interaction, ensuring that it becomes smarter, faster, and better over time.</p>

       

      

        <button className="p-1  h-14 w-52 rounded-xl group-hover:bg-black  group-hover:text-white  bg-white border-2 border-black hover:text-white hover:bg-black text-black text-xl font-bold">
       Read more
          </button>

        </div>
        </div>
        </div>


        {/* skhs */}

        <div className=" bg-purple-50 p-7 rounded-xl relative top-40 gap-10 mb-20 max-w-[1400px] m-auto">

        <h1 className=" text-2xl sm:text-3xl text-gray-900 font-bold  m-auto text-left relative   "> ✨ Who We Serve</h1><br />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  p-7 rounded-xl relative  gap-10  max-w-[1400px] m-auto">
        {/* 1 */}
        <div className="border bg-white rounded-xl flex gap-4 justify-center group items-center flex-col p-6">
        <h1 className='text-3xl text-center font-bold'>
        Businesses
        </h1>

        <p className='text-base text-center w-[70%] '>Streamline customer support and boost satisfaction.</p>

       

      

        <button className="p-1  h-14 w-52 rounded-xl group-hover:bg-black  group-hover:text-white  bg-white border-2 border-black hover:text-white hover:bg-black text-black text-xl font-bold">
       Read more
          </button>

        </div>

        {/* 2 */}

        <div className="border bg-white rounded-xl flex gap-4 justify-center group items-center flex-col p-6">
        <h1 className='text-3xl text-center font-bold'>
        Educators
        </h1>

        <p className='text-base text-center w-[70%] '> Engage learners with interactive teaching.</p>

       

      

        <button className="p-1  h-14 w-52 rounded-xl group-hover:bg-black  group-hover:text-white  bg-white border-2 border-black hover:text-white hover:bg-black text-black text-xl font-bold">
       Read more
          </button>

        </div>

        {/* 3 */}

        <div className="border bg-white rounded-xl flex gap-4 justify-center group items-center flex-col p-6">
        <h1 className='text-3xl text-center font-bold'>
        Individuals
        </h1>

        <p className='text-base text-center w-[70%] '>Simplify your daily life with an intelligent virtual assistant.</p>

       

      

        <button className="p-1  h-14 w-52 rounded-xl group-hover:bg-black  group-hover:text-white  bg-white border-2 border-black hover:text-white hover:bg-black text-black text-xl font-bold">
       Read more
          </button>

        </div>
        </div>
        </div>
        </>
    )
}

export default About;