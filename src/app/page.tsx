import Image from "next/image";
import "./globals.css";


export default function Home() {
  return (
 <>
 {/* Hero Section */}
<div className="bg-[#FBEBB5] h-auto md:h-[56.25rem] flex flex-col-reverse md:flex-row items-center">
  {/* Left Content */}
  <div className="flex flex-col justify-center px-6 md:pl-[13rem] text-center md:text-left pb-4">
    <h2 className="text-black font-medium text-[36px] md:text-[64px]">
      Rocket single seater
    </h2>
    <div className="pt-4 md:pt-[2.18rem]">
      <button className="text-black font-medium text-lg md:text-2xl pb-2 hover:text-[#800000]">
        Shop Now
      </button>
      <Image 
        src="/Line2.png"
        alt="Line"
        width={121}
        height={1}
        className="mx-auto md:mx-0"
      />
    </div>
  </div>

  {/* Right Content */}
  <div className="flex justify-center items-center">
    <Image 
      src="/sofa.png"
      alt="sofa"
      className="w-[300px] md:w-[700px] lg:w-[1000px] h-auto"
      width={1000}
      height={1000}
    />  
  </div>
</div>

 {/* Product Section */}
<div className="w-full bg-[#FAF4F4] flex flex-col lg:flex-row px-4 lg:px-0 py-8 lg:py-8 justify-between lg:justify-around">
  {/* Left Product */}
  <div className="flex flex-col items-center lg:items-start w-full lg:w-[37.8rem] px-4 lg:px-16 py-4">
    <Image
      src="/table.png"
      alt="table"
      width={605}
      height={562}
    />
    <p className="text-black font-medium text-2xl lg:text-4xl leading-[36px] lg:leading-[54px]">
      Side table
    </p>
    <div className="mb-[7rem]">
    <button className="mt-4 text-black font-medium text-lg lg:text-2xl hover:text-[#800000]">
      View More
    </button>
    <Image
      src="/Line3.png"
      alt="Line"
      width={100}
      height={1}
      className="mt-2"
    />
    
    
  </div>
  </div>


  {/* Right Product */}
  <div className="flex flex-col items-center lg:items-start w-full lg:w-[37.8rem] px-4 lg:px-16 py-4">
    <Image
      src="/sofa2.png"
      alt="table"
      width={605}
      height={562} 
      className="w-full max-w-[37.8rem] h-auto"
    />
    <p className="text-black font-medium text-2xl lg:text-4xl leading-[36px] lg:leading-[54px] mt-4">
      Side table
    </p>
    <button className="mt-4 text-black font-medium text-lg lg:text-2xl hover:text-[#800000]">
      View More
    </button>
    <Image
      src="/Line3.png"
      alt="Line"
      width={100}
      height={1}
      className="mt-2"
    />
  </div>
</div>

{/* Top Pick Section */}
<div className="max-w-[90rem] mx-auto px-4 lg:px-0 h-auto lg:h-[50.375rem]">
  <div className="flex flex-col justify-center items-center text-center">
    <p className="text-black text-2xl lg:text-4xl font-medium leading-7 lg:leading-[54px] pt-6 lg:pt-[3.4rem]">
      Top Picks For You
    </p>
    <p className="text-[#9F9F9F] text-sm lg:text-base font-medium leading-5 lg:leading-6 pt-2 lg:pt-[0.8rem]">
      Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
    </p>
  </div>

  {/* Products */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-6 lg:mt-[4.063rem]">
    {/* Product Card */}
    {[
      {
        image: "/TP1.png",
        title: "Trenton modular sofa_3",
        price: "Rs. 25,000.00",
      },
      {
        image: "/TP2.png",
        title: "Granite dining table with dining chair",
        price: "Rs. 25,000.00",
      },
      {
        image: "/TP3.png",
        title: "Outdoor bar table and stool",
        price: "Rs. 25,000.00",
      },
      {
        image: "/Tp4.png",
        title: "Plain console with teak mirror",
        price: "Rs. 25,000.00",
      },
    ].map((product, index) => (
     <div
  key={index}
  className="flex flex-col items-center lg:items-start bg-white shadow-lg p-4 rounded-md transform transition-transform duration-300 hover:scale-105 touch:scale-105"
>
  <Image
    src={product.image}
    alt={`Top Pick product ${index + 1}`}
    width={287}
    height={287}
    className="w-full h-auto rounded-lg"
  />
  <div className="mt-4 text-center lg:text-left">
    <p className="text-black font-normal text-sm lg:text-base leading-5 lg:leading-6">
      {product.title}
    </p>
    <p className="text-black font-medium text-lg lg:text-2xl leading-7 lg:leading-9 mt-2">
      {product.price}
    </p>
  </div>
</div>

    ))}
  </div>

  {/* View More */}
  <div className="flex flex-col items-center justify-center mt-8 lg:mt-[3.188rem] mb-2">
    <button className="hover:text-[#800000] text-black font-medium text-sm lg:text-xl leading-6 lg:leading-[30px]">
      View More
    </button>
    <Image
      src="/Line3.png"
      alt="Line"
      width={90}
      height={1}
      className="mt-2"
    />
  </div>
</div>


{/* New Arrival Section */}
<div className="w-full md:w-[100%]  h-auto bg-[#FFF9E5] flex flex-col md:flex-row items-center md:items-start p-4 md:p-0">
  <div className="flex justify-center md:justify-start w-full md:w-[50%] mb-4 md:mb-0">
    <Image 
      src="/Asgaardsofa.png"
      alt="Sofa"
      width={983}
      height={799}
      className="max-w-full h-auto"
    />
  </div>

  <div className="w-full md:w-[20.688rem] h-auto md:h-[12.813rem]  mt-8 md:mt-[15.375rem] md:ml-[4.063rem] md:mr-[6.063rem] md:mb-[13.563rem]">
    <div className="w-full md:w-[20.688rem] h-[6.75rem] flex flex-col justify-center items-center mb-4 md:mb-[2.063rem]">
      <p className="text-black text-xl md:text-2xl font-medium leading-7 md:leading-9 text-center">
        New Arrivals
      </p>
      <p className="text-black font-bold text-3xl md:text-5xl leading-[48px] md:leading-[72px] text-center">
        Asgaard sofa
      </p>
    </div>

    <div className="w-full md:w-[15.938rem] h-[4rem] mt-4 md:mt-[2.063rem] mx-auto md:mx-[2.375rem]">
      <button className="w-full md:w-auto border border-black text-center py-2 px-8 md:px-16 inline-block text-lg md:text-xl font-normal text-black leading-[30px] hover:text-[#800000]">
        Order Now
      </button>
    </div>
  </div>
</div>

{/* Our Blogs Section */}
<div className="w-full bg-white py-8">
  {/* Our Blog Heading */}
  <div className="max-w-screen-lg mx-auto text-center px-4">
    <h2 className="text-black font-medium text-3xl md:text-4xl leading-[54px] mb-4">
      Our Blogs
    </h2>
    <p className="text-[#9F9F9F] font-medium text-sm md:text-base leading-6">
      Find a bright idea to suit your taste with our great selection
    </p>
  </div>

  {/* Blogs and View All Post Button */}
  <div className="max-w-screen-xl mx-auto px-4 mt-8">
    {/* Blogs */}
    <div className="flex flex-wrap justify-center gap-8">
      {/* Blog 1 */}
      <div className="w-full md:w-[24rem] flex flex-col items-center">
        <Image
          src="/blog1.png"
          alt="Picture of Keyboard, headphones, and coffee"
          width={393}
          height={393}
          className="w-full h-auto shadow-lg rounded-md transform transition-transform duration-300 hover:scale-105 touch:scale-105"
        />
        <div className="mt-4 text-center">
          <h3 className="text-black font-normal text-lg md:text-xl leading-[30px] mb-2">
            Going all-in with millennial design
          </h3>
          <button className="text-black text-base md:text-xl font-medium hover:text-[#800000]">
            Read More
          </button>
          <div className="w-20 mx-auto my-2">
            <Image src="/Line3.png" alt="Line" width={80} height={1} />
          </div>
          <div className="flex justify-center space-x-8 text-sm md:text-base text-gray-500">
            <div className="flex items-center">
              <Image src="/time.png" alt="Time" width={18} height={18} />
              <span className="ml-2">5 min</span>
            </div>
            <div className="flex items-center">
              <Image src="/calender.png" alt="Calendar" width={18} height={18} />
              <span className="ml-2">12th Oct 2022</span>
            </div>
          </div>
        </div>
      </div>

      {/* Blog 2 */}
      <div className="w-full md:w-[24rem] flex flex-col items-center">
        <Image
          src="/blog2.png"
          alt="Picture of a minimalist desk setup"
          width={393}
          height={393}
          className="w-full h-auto shadow-lg rounded-md transform transition-transform duration-300 hover:scale-105 touch:scale-105"
        />
        <div className="mt-4 text-center">
          <h3 className="text-black font-normal text-lg md:text-xl leading-[30px] mb-2">
            Exploring minimalist workspace vibes
          </h3>
          <button className="text-black text-base md:text-xl font-medium hover:text-[#800000]">
            Read More
          </button>
          <div className="w-20 mx-auto my-2">
            <Image src="/Line3.png" alt="Line" width={80} height={1} />
          </div>
          <div className="flex justify-center space-x-8 text-sm md:text-base text-gray-500">
            <div className="flex items-center">
              <Image src="/time.png" alt="Time" width={18} height={18} />
              <span className="ml-2">3 min</span>
            </div>
            <div className="flex items-center">
              <Image src="/calender.png" alt="Calendar" width={18} height={18} />
              <span className="ml-2">8th Sep 2022</span>
            </div>
          </div>
        </div>
      </div>

      {/* Blog 3 */}
      <div className="w-full md:w-[24rem] flex flex-col items-center">
        <Image
          src="/blog3.png"
          alt="Picture of a coffee cup with a book"
          width={393}
          height={393}
          className="w-full h-auto shadow-lg rounded-md transform transition-transform duration-300 hover:scale-105 touch:scale-105"
        />
        <div className="mt-4 text-center">
          <h3 className="text-black font-normal text-lg md:text-xl leading-[30px] mb-2">
            The art of mindful coffee breaks
          </h3>
          <button className="text-black text-base md:text-xl font-medium hover:text-[#800000]">
            Read More
          </button>
          <div className="w-20 mx-auto my-2">
            <Image src="/Line3.png" alt="Line" width={80} height={1} />
          </div>
          <div className="flex justify-center space-x-8 text-sm md:text-base text-gray-500">
            <div className="flex items-center">
              <Image src="/time.png" alt="Time" width={18} height={18} />
              <span className="ml-2">7 min</span>
            </div>
            <div className="flex items-center">
              <Image src="/calender.png" alt="Calendar" width={18} height={18} />
              <span className="ml-2">20th Aug 2022</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* View All Posts */}
    <div className="text-center mt-8 flex flex-col justify-center items-center">
      <button className="text-black font-medium text-base md:text-xl hover:text-[#800000] pb-[1.188rem]">
        View All Posts
      </button>
      <Image
      src="/Line2.png"
      alt="Line"
      width={115}
      height={1} />
    </div>
  </div>
</div>

 {/* Instagram Section */}
<div className="relative w-full">
  <Image
    src="/insta.jpg"
    alt="insta"
    width={1440}
    height={450}
    className="opacity-15 object-cover w-full h-[250px] sm:h-[350px] md:h-[450px]"
  />
  <div className="absolute inset-0 flex flex-col justify-center items-center px-4">
    <div className="text-center">
      <h3 className="text-black text-2xl sm:text-4xl md:text-6xl font-bold leading-tight md:leading-[90px]">
        Our Instagram
      </h3>
      <p className="text-sm sm:text-lg md:text-xl font-normal leading-5 md:leading-[30px] mt-2">
        Follow our store on Instagram
      </p>
    </div>
    <div className="mt-4">
      <button className="rounded-[50px] bg-[#FAF4F4] shadow-lg py-2 px-6 sm:py-[17px] sm:px-[81px] text-sm sm:text-base hover:bg-black hover:text-white transition-all duration-300">
        Follow Us
      </button>
    </div>
  </div>
</div>

  </>
  );

}