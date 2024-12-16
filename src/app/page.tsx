import Image from "next/image";
import "./globals.css";


export default function Home() {
  return (
 <>
  {/* Hero Section */}
  <div className="bg-[#FBEBB5]  h-[56.25rem] flex">
    <div className="flex flex-col justify-center pl-[13rem] ">
      <h2 className="text-black font-medium text-[64px]">Rocket single seater</h2>
      <div className="pt-[2.18rem] pr-[19.6rem]">
        <button className="text-black font-medium text-2xl pb-[0.8rem] hover:text-cyan-600">Shop Now</button>
        <Image 
        src="/Line2.png"
        alt="Underline below shop now"
        width={121}
        height={1}/>
      </div>
    </div>
   <div> 
    <Image 
    src="/sofa.png"
    alt="sofa"
    width={1000}
    height={1000}
    />  
    </div>
  </div>
  {/* Product Section */}
  <div className="w-[90rem] h-[42rem] bg-[#FAF4F4] flex flex-row justify-between">
    <div className="w-[37.8rem] h-[35.12rem] pt-[3.1rem] pl-[6.25rem] pr-[1.8rem] pb-[3.6rem]">
      <Image
      src="/table1.png"
      alt="table"
      width={605}
      height={562} />
      <p className="text-black font-medium text-4xl leading-[54px] ">
      Side table
      </p>
      <button className="pt-[1.4rem] text-black font-medium text-2xl leading-9 pb-[1.18rem] hover:text-cyan-600">
      View More
      </button>
      <Image
      src="/Line2.png"
      alt="Line"
      width={121}
      height={1} />
    </div>
    <div className="w-[37.8rem] h-[35.12rem] pt-[3.1rem] pl-[1.8rem] pr-[6.25rem] pb-[3.6rem]">
      <Image
      src="/mask.png"
      alt="table"
      width={605}
      height={562} />
      <p className="text-black font-medium text-4xl leading-[54px] mt-[100px]">
      Side table
      </p>
      <button className="pt-[1.4rem] text-black font-medium text-2xl leading-9 pb-[1.188rem] hover:text-cyan-600">
      View More
      </button>
      <Image
      src="/Line2.png"
      alt="Line"
      width={121}
      height={1} />
    </div>
    
  </div>

    {/* Top Pick Section */}
<div className="w-[90rem] h-[50.375rem] ">
  <div className="flex flex-col justify-center items-center" >
  <p className="text-black text-4xl font-medium leading-[54px] pt-[3.4rem]">
    Top Picks For You
  </p>
  <p className="text-[#9F9F9F] text-base font-medium leading-6 pt-[0.8rem]">
  Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
  </p>
  </div>
        {/* Products */}/
  <div className="flex flex-row">
      {/* Prod 1 */}
  <div className="w-[17.938rem] h-[23.25rem] mt-[4.063rem] ml-[6.25rem] mb-[4.313rem]">
    <Image
    src="/TP1.png"
    alt="Top Pick product 1"
    width={287}
    height={287} />
    <div className="w-[12.125rem] h-[4.438rem] mt-[0.875rem] mr-[5.813rem]">
      <p className="text-black font-normal text-base leading-6">
      Trenton modular sofa_3
      </p>
      <p className="text-black font-medium text-2xl leading-9 mt-[0.688rem]">
      Rs. 25,000.00
      </p>
    </div>
  </div>
      {/* Prod 2 */}
      <div className="w-[17.938rem] h-[24.813rem] mt-[4.063rem] ml-[1.875rem] mr-[1.938rem] mb-[4.313rem]">
      <Image
    src="/TP2.png"
    alt="Top Pick product 2"
    width={287}
    height={287} />
    <div className="w-[13.25rem] h-[6rem] mt-[0.875rem] mr-[4.688rem]">
      <p className="text-black font-normal text-base leading-6 ">
      Granite dining table with dining chair
      </p>
      <p className="text-black font-medium text-2xl leading-9 mt-[0.75rem]">
      Rs. 25,000.00
      </p>
    </div>
      </div>
        {/* Prod 3 */}
        <div className="w-[17.938rem] h-[24.813rem] mt-[4.063rem] ml-[1.938rem] mr-[1.938rem] mb-[4.313rem]">
      <Image
    src="/TP3.png"
    alt="Top Pick product 3"
    width={287}
    height={287} />
    <div className="w-[13.25rem] h-[6rem] mt-[0.875rem] mr-[4.688rem]">
      <p className="text-black font-normal text-base leading-6 ">
      Outdoor bar table and stool      
      </p>
      <p className="text-black font-medium text-2xl leading-9 mt-[0.75rem]">
      Rs. 25,000.00      
      </p>
    </div>
      </div>
      {/* Prod 4 */}
      <div className="w-[17.938rem] h-[24.813rem] mt-[4.063rem] ml-[1.938rem] mr-[6.25rem] mb-[4.313rem]">
      <Image
    src="/Tp4.png"
    alt="Top Pick product 4"
    width={287}
    height={287} />
    <div className="w-[12.438rem] h-[6rem] mt-[0.875rem] mr-[5.5rem]">
      <p className="text-black font-normal text-base leading-6 ">
      Plain console with teak mirror      
      </p>
      <p className="text-black font-medium text-2xl leading-9 mt-[0.75rem]">
      Rs. 25,000.00      
      </p>
    </div>
      </div>
      </div>


      {/* View More */}
      <div className="w-[7.188rem] h-[3.063rem] mb-[3.188rem] ml-[41.375rem] mr-[41.438rem]">
        <button className="hover:text-cyan-600 text-black font-medium text-xl leading-[30px] pb-[1.188rem]">
          View More
        </button>
        <Image
      src="/Line2.png"
      alt="Line"
      width={115}
      height={1} />
    </div>
</div>

    {/* New Arrival Section */}
<div className="w-[90rem] h-[49.938rem] bg-[#FFF9E5] flex flex-row ">
  <Image 
  src="/Asgaardsofa.png"
  alt="Sofa"
  width={983}
  height={799}/>
  <div className="w-[20.688rem] h-[12.813rem] mt-[15.375rem] mr-[6.063rem] ml-[4.063rem] mb-[13.563rem]">
    <div className="w-[20.688rem] h-[6.75rem] flex flex-col justify-center items-center mb-[2.063rem]">
      <p className="text-black text-2xl font-medium leading-9">
      New Arrivals
      </p>
      <p className="text-black font-bold text-5xl leading-[72px]">
      Asgaard sofa
      </p>
    </div>
    <div className="w-[15.938rem] h-[4rem] mt-[2.063rem] mx-[2.375rem] ">
      <button className="border border-black text-center py-2 px-16 inline-block text-xl font-normal text-black leading-[30px] hover:text-cyan-600">
      Order Now
      </button>
    </div>

  </div>
</div>


    {/*Our Blogs Section */}
<div className="w-[90rem] h-[59rem]">
      {/*Our Blog Heading */}
  <div className="w-[29.938rem] h-[5.688rem] mt-[3.438rem] mr-[30.063rem] ml-[30rem] mb-[4.063rem] flex flex-col justify-center items-center">
<p className="text-black font-medium text-4xl leading-[54px] mb-[0.813rem]">
Our Blogs
</p>
<p className="text-[#9F9F9F] font-medium text-base leading-6 mt-[0.813rem]">
Find a bright ideal to suit your taste with our great selection
</p>
  </div>
    {/*Blogs and View All Post Btn*/}
    <div className="w-[77.5rem] h-[42.438rem] mt-[4.063rem] mx-[6.25rem] mb-[3.375rem]">
    {/*Blogs */}
<div className="w-[77.5rem] h-[34.688rem] mb-[4.688rem] flex flex-row">
      {/*Blog 1 */}
      <div className="w-[24.563rem] h-[34.688rem] mr-[1.938rem]">
        <Image
        src="/blog1.png"
        alt="Picture of Keyboard, headphones and coffee"
        width={393}
        height={393}/>
        <div className="mt-[2.063rem] w-[24.563rem] h-[8.063rem] mx-[1.688rem] flex flex-col items-center ">
          <p className="text-black font-normal text-xl leading-[30px] mb-[0.625rem]">
          Going all-in with millennial design
          </p>
          <div className="w-[8.125rem] h-[2.875rem] mb-[1.188rem]">
            <button className="text-black text-2xl font-medium leading-9 mb-[0.625rem] hover:text-cyan-600">
            Read More
            </button>
            <div className="mb-[1.188rem]">
            <Image
      src="/Line3.png"
      alt="Line"
      width={115}
      height={1} />
      </div>
          </div>
          <div className=" flex flex-row mx-[3.625rem]">
            <div className="w-[4.563rem] h-[1.5rem] mr-[1.188rem] flex flex-row">
              <div className="mr-[0.625rem]">
                <Image 
              src="/time.png"
              alt="time"
              width={18}
              height={17.83}
              />
              </div>
              <p className="text-black font-light text-base leading-6">
              5 min
              </p>
            </div>
            <div className="ml-[1.188rem]  flex flex-row">
              <div className="mr-[0.625rem]">
                <Image 
                src="/calender.png"
                alt="calender"
                width={22}
                height={22}
                />
              </div>
                <p className="text-black text-base font-light leading-6">
                12th Oct 2022
                </p>
            </div>
          </div>
        </div>
      </div>

{/*Blog 2*/}
<div className="w-[24.563rem] h-[34.688rem] mr-[1.938rem]">
        <Image
        src="/blog2.png"
        alt="Picture of Laptop"
        width={393}
        height={393}/>
        <div className="mt-[2.063rem] w-[24.563rem] h-[8.063rem] mx-[1.688rem] flex flex-col items-center ">
          <p className="text-black font-normal text-xl leading-[30px] mb-[0.625rem]">
          Going all-in with millennial design
          </p>
          <div className="w-[8.125rem] h-[2.875rem] mb-[1.188rem]">
            <button className="text-black text-2xl font-medium leading-9 mb-[0.625rem] hover:text-cyan-600">
            Read More
            </button>
            <div className="mb-[1.188rem]">
            <Image
      src="/Line3.png"
      alt="Line"
      width={115}
      height={1} />
      </div>
          </div>
          <div className=" flex flex-row mx-[3.625rem]">
            <div className="w-[4.563rem] h-[1.5rem] mr-[1.188rem] flex flex-row">
              <div className="mr-[0.625rem]">
                <Image 
              src="/time.png"
              alt="time"
              width={18}
              height={17.83}
              />
              </div>
              <p className="text-black font-light text-base leading-6">
              5 min
              </p>
            </div>
            <div className="ml-[1.188rem]  flex flex-row">
              <div className="mr-[0.625rem]">
                <Image 
                src="/calender.png"
                alt="calender"
                width={22}
                height={22}
                />
              </div>
                <p className="text-black text-base font-light leading-6">
                12th Oct 2022
                </p>
            </div>
          </div>
        </div>
      </div>

      {/*Blog 3*/}
      <div className="w-[24.563rem] h-[34.688rem] mr-[1.938rem]">
        <Image
        src="/blog3.png"
        alt="Picture of Two Laptops"
        width={393}
        height={393}/>
        <div className="mt-[2.063rem] w-[24.563rem] h-[8.063rem] mx-[1.688rem] flex flex-col items-center ">
          <p className="text-black font-normal text-xl leading-[30px] mb-[0.625rem]">
          Going all-in with millennial design
          </p>
          <div className="w-[8.125rem] h-[2.875rem] mb-[1.188rem]">
            <button className="text-black text-2xl font-medium leading-9 mb-[0.625rem] hover:text-cyan-600">
            Read More
            </button>
            <div className="mb-[1.188rem]">
            <Image
      src="/Line3.png"
      alt="Line"
      width={115}
      height={1} />
      </div>
          </div>
          <div className=" flex flex-row mx-[3.625rem]">
            <div className="w-[4.563rem] h-[1.5rem] mr-[1.188rem] flex flex-row">
              <div className="mr-[0.625rem]">
                <Image 
              src="/time.png"
              alt="time"
              width={18}
              height={17.83}
              />
              </div>
              <p className="text-black font-light text-base leading-6">
              5 min
              </p>
            </div>
            <div className="ml-[1.188rem]  flex flex-row">
              <div className="mr-[0.625rem]">
                <Image 
                src="/calender.png"
                alt="calender"
                width={22}
                height={22}
                />
              </div>
                <p className="text-black text-base font-light leading-6">
                12th Oct 2022
                </p>
            </div>
          </div>
        </div>
      </div>

</div>
    {/*View All Posts */}
    <div className=" flex flex-col justify-center items-center">
    <button className="hover:text-cyan-600 text-black font-medium text-xl leading-[30px] pb-[1.188rem]">
          View All Post
        </button>
        <Image
      src="/Line2.png"
      alt="Line"
      width={115}
      height={1} />
    </div>

    </div>
</div>

    {/*Instagram Section */}
<div className="relative  ">
  <Image
  src="/insta.jpg"
  alt="insta"
  width={1440}
  height={450}
  className="opacity-15 object-cover w-full h-auto"/>
  <div className="absolute inset-0 flex flex-col justify-center items-center w-[28.375rem] h-[12.625rem] my-[124px] mx-[493px] ">
    <div className="text-center gap-">
      <h3 className="text-black text-6xl font-bold leading-[90px]">
        Our Instagram
      </h3>
      <p className="text-xl font-normal leading-[30px]">
      Follow our store on Instagram
      </p>
    </div>
    <div className="mt-[1.125rem]">
      <button className="rounded-[50px] bg-[#FAF4F4] shadow-lg py-[17px] px-[81px] ">Follow Us</button>
    </div>
  </div>
</div>
  </>
  );

}