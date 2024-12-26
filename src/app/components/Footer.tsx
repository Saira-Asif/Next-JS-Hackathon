import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full bg-white">
      <div className="flex flex-wrap lg:flex-nowrap w-full  mx-auto pt-10 pb-6 px-4 ">
        <p className="w-full text-sm lg:text-base font-normal text-[#9F9F9F] mb-6 lg:mb-0 leading-6 md:flex md:items-center mr-[8.5rem] lg:ml-[6.376rem]">
          400 University Drive Suite 200 Coral
          <br />
          Gables,
          <br />
          FL 33134 USA
        </p>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[144px]  w-full md:max-w-7xl md:mx-auto lg:flex-grow ">
          <div className="w-full lg:w-auto">
            <p className="text-sm lg:text-[16px] font-medium text-[#9F9F9F] mb-6">
              Link
            </p>
            <ul className="space-y-4 lg:space-y-[46px]">
              <li className="text-black text-sm lg:text-[16px] font-medium hover:text-[#800000]">
                <Link href="/">Home</Link>
              </li>
              <li className="text-black text-sm lg:text-[16px] font-medium hover:text-[#800000]">
                <Link href="/shop">Shop</Link>
              </li>
              <li className="text-black text-sm lg:text-[16px] font-medium hover:text-[#800000]">
                <Link href="/about">About</Link>
              </li>
              <li className="text-black text-sm lg:text-[16px] font-medium hover:text-[#800000]">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="w-full">
            <p className="text-sm lg:text-[16px] font-medium text-[#9F9F9F] mb-6 ">
              Help
            </p>
            <ul className="space-y-4 lg:space-y-[46px]">
              <li className="text-black text-sm lg:text-[16px] font-medium hover:text-[#800000] leading-[24px] cursor-pointer">
                Payment Options
              </li>
              <li className="text-black text-sm lg:text-[16px] font-medium hover:text-[#800000] leading-[24px] cursor-pointer">
                Returns
              </li>
              <li className="text-black text-sm lg:text-[16px] font-medium hover:text-[#800000] leading-[24px] cursor-pointer">
                Privacy Policies
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="w-full lg:w-auto mt-6 lg:mt-0 lg:ml-[4.5rem] lg:mr-[12.875rem]">
          <p className="text-sm lg:text-[16px] font-medium text-[#9F9F9F] mb-4 lg:mb-6">
            Newsletter
          </p>
          <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="border-b border-black outline-none text-sm lg:text-[14px] text-[#9F9F9F] w-full lg:w-auto"
            />
            <button className="text-black text-sm lg:text-[14px] font-medium underline hover:text-[#800000]">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 lg:mt-[180px] px-4 lg:px-[100px] pb-6 lg:pb-[2.375rem]">
        <Image src="/Line.png" alt="Line" width={1240} height={1} className="w-full" />
        <p className="pt-4 lg:pt-[2.18rem] text-center lg:text-left text-sm lg:text-[16px] text-black">
          2022 Meubel House. All rights reserved
        </p>
      </div>
    </div>
  );
}
