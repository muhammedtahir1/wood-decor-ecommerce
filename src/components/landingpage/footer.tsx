import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Phone } from "lucide-react";
import Logo from "./logo";

const Footer = () => {
  return (
    <footer
      className="px-10 mt-20 bg-black text-white"
    >
      <section className="flex flex-wrap items-center justify-between py-10 md:py-16 w-full md:px-20 footer gap-7 grow ">
        <div className="flex flex-col gap-4 footer-section1">
          <h1 className="text-4xl font-medium capitalize font-gt">
            Get 15% discount for all Product
          </h1>
          <p className="text-sm opacity-65">
            By claiming, you get a discount for one product from all available
            products.
          </p>

          <div className="flex gap-2">
            <Link
              href="https://maps.app.goo.gl/keBZbAcunBgA97wu9"
              target="_blank"
              className="flex items-center gap-1"
            >
              <p className="max-w-72 text-[15px] leading-snug md:text-base">
                No. 10/7, Begur Hulimavu Rd, Raghavendra Layout, Akshaya Gardens,
                Hulimavu, Bengaluru, Karnataka 560068
              </p>

              <Image
                src={"/map-with-destination.png"}
                width={200}
                className="size-28 rounded-full overflow-hidden object-cover object-right"
                style={{
                  maxWidth: "150px",
                  minHeight: "120px",
                  minWidth: "120px",
                  objectFit: "cover",
                }}
                height={200}
                alt="location"
              />
            </Link>
          </div>
          {/* <p className="text-xs opacity-75">
        © 2024 THE WOOD DECOR. All Rights Reserved by The Wood Decor India Unit of THE Wood Squares.
        </p> */}
        </div>
        <div className="flex gap-6">
          <div className="footer-section2">
            <ul className="flex flex-col gap-2 text-sm list-none">
              <p className="text-base md:text-lg font-semibold">About Us</p>
              <li>
                <Link href={"tel:+%20919341817975"} className="opacity-75 hover:opacity-100">
                  <span className="font-semibold">Phone: </span>
                   +91 9341817975
                </Link>
              </li>
              <li>
                <Link href="mailto:md.azmath84@gmail.com" className="opacity-75 hover:opacity-100">
                  <span className="font-semibold">Email: </span> 
                  md.azmath84@gmail.com
                </Link>
              </li>

              {/* <li>
                <Link href="" className="opacity-75 hover:opacity-100">
                  Stories
                </Link>
              </li> */}
            </ul>
          </div>
          <div className="footer-section3">
            <ul className="flex flex-col gap-2 text-sm list-none">
              <p className="text-base md:text-lg  font-semibold">Section</p>
              <li>
                <Link href="/work" className="opacity-75 hover:opacity-100">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="" className="opacity-75 hover:opacity-100">
                  Terms of use
                </Link>
              </li>
              <li>
                <Link href="#faq" className="opacity-75 hover:opacity-100">
                  QNA
                </Link>
              </li>
              <li>
                <Link
                  href={"tel:+%20919341817975"}
                  className="opacity-75 hover:opacity-100"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-section3">
            {/* <ul className="flex flex-col gap-2 text-sm list-none">
              <p className="text-base  md:text-lg font-semibold">
                Customer Service
              </p>
              <li>
                <Link href="/work" className="opacity-75 hover:opacity-100">
                  Troubleshooting
                </Link>
              </li>
              <li>
                <Link href="" className="opacity-75 hover:opacity-100">
                  Repair & replacement
                </Link>
              </li>
              <li>
                <Link href="" className="opacity-75 hover:opacity-100">
                  Order Tracking
                </Link>
              </li>
              <li>
                <Link
                  href={"tel:+%20919341817975"}
                  className="text-xs flex items-center gap-1"
                >
                  <Phone size={12} />
                  9341817975
                </Link>
              </li>
            </ul> */}
          </div>
        </div>
      </section>

      <section className="py-4 border-t-2 flex items-center justify-between md:px-20">
        <Logo type="full" />
        <Link target="_blank" href={"https://www.unicornspace.tech/"} className=" text-xs flex items-center">Made by
          <Image
            width={20}
            height={20}
            quality={100}
            src="/unicorn-space-logo-white-256x256.webp"
            className="inline-block ml-1"
            alt=""
          /> <span className="text-brand-bg-DEFALUT font-semibold text-sm">UnicornSpace</span>
        </Link>
        {/* <nav className="flex gap-2 md:gap-4 items-center">
          <p className=" text-xs">Privacy Policy</p>
          <p className=" text-xs">Terms of Use</p>


        </nav> */}
      </section>
    </footer>
  );
};

export default Footer;
