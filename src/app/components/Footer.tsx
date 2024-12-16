import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <div className="w-[90rem] h-[34.69rem]">
      <div className="flex w-[78rem] h-[26rem] pt-[6.1rem] pb-[2.3rem] px-[6.25rem]">
        <p className="pt-[12.8rem] pb-[8.3rem] pr-[8.5rem]  h-[4.5rem] font-poppins text-base font-normal leading-6 text-left text-[#9F9F9F]">
          400 University Drive Suite 200 Coral
          <br />
          Gables,
          <br />
          FL 33134 USA
        </p>

        <div className="flex flex-col lg:flex-row gap-[144px] max-w-7xl mx-auto pt-[6.1rem]">
          <div>
            <p className="font-poppins text-[#9F9F9F] text-[16px] font-medium leading-[24px] mb-[53px]">
              Link
            </p>

            <ul className="space-y-[46px]">
              <li className="font-poppins text-black text-[16px] font-medium leading-[24px] hover:text-cyan-600 ">
                <Link href="/">Home</Link>
              </li>
              <li className="font-poppins text-black text-[16px] font-medium leading-[24px] hover:text-cyan-600 ">
                <Link href="/shop">Shop</Link>
              </li>
              <li className="font-poppins text-black text-[16px] font-medium leading-[24px] hover:text-cyan-600 ">
                <Link href="/about">About</Link>
              </li>
              <li className="font-poppins text-black text-[16px] font-medium leading-[24px] hover:text-cyan-600 ">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-poppins text-[#9F9F9F] text-[16px] font-medium leading-[24px] mb-[53px]">
              Help
            </p>
            <ul className="space-y-[46px]">
              <li className="font-poppins text-black text-[16px] font-medium leading-[24px] hover:text-cyan-600 ">
                Payment Options
              </li>
              <li className="font-poppins text-black text-[16px] font-medium leading-[24px] hover:text-cyan-600 ">
                Returns
              </li>
              <li className="font-poppins text-black text-[16px] font-medium leading-[24px] hover:text-cyan-600 ">
                Privacy Policies
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="pl-[4.5rem] pt-[6.25rem] pr-[6.7rem] pb-[60rem] w-[18rem]">
          <p className="font-poppins text-[#9F9F9F] text-[16px] font-medium leading-[24px] mb-[53px]">
            Newsletter
          </p>
          <div className="relative w-[18rem] h-[1.5rem] flex flex-row">
            {/* Email Section */}
            <p className="font-poppins text-[#9F9F9F] text-[14px] font-normal leading-[21px] underline decoration-black underline-offset-4 pr-[2.37rem]">
              Enter Your Email Address
            </p>

            {/* Subscribe Section */}
            <p className="font-poppins text-black text-[14px] font-medium leading-[21px] underline decoration-black underline-offset-4">
              SUBSCRIBE
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[180px] px-[100px] ">
        <Image src="/Line.png" alt="Line" width={1240} height={1} />
        <p className="pt-[2.18rem] pr-[58rem] font-poppins text-black text-[16px] font-normal leading-[24px]">
          2022 Meubel House. All rights reverved
        </p>
      </div>
    </div>
  );
}
