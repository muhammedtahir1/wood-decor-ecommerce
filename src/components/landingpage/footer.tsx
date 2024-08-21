import Link from "next/link";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer
      className="px-10 mt-20 bg-black text-white"
      // style={{ borderTop: "1px solid #ffffff20" }}
    >
      <section className="flex flex-wrap items-center justify-between py-10 md:py-16 w-full md:px-20 footer gap-7 grow ">
        <div className="flex flex-col gap-4 footer-section1">
          <h1 className="text-4xl font-medium capitalize">
            Lets get 50% discount for <br /> all Product
          </h1>
          <p className="text-sm opacity-65">
            By claiming, you get a discount for one product from all available
            products.
          </p>

          <div className="flex gap-2">
            <Input type="email" placeholder="Email" />
            <Link href="">
              <Button variant={"secondary"}>Buy now</Button>
            </Link>
          </div>
          {/* <p className="text-xs opacity-75">
        © 2024 THE WOOD DECOR. All Rights Reserved by The Wood Decor India Unit of THE Wood Squares.
        </p> */}
        </div>
        <div className="flex gap-6">
          <div className="footer-section2">
            <ul className="flex flex-col gap-2 text-sm list-none">
              <p className="text-base md:text-lg font-semibold">Our Company</p>
              <li>
                <Link href="" className="opacity-75 hover:opacity-100">
                  About us
                </Link>
              </li>
              <li>
                <Link href="" className="opacity-75 hover:opacity-100">
                  Careers
                </Link>
              </li>
              {/* <li>
              <Link
                href=""
                className="opacity-75 hover:opacity-100"
              >
                Meet Team
              </Link>
            </li> */}
              <li>
                <Link href="" className="opacity-75 hover:opacity-100">
                  Stories
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-section3">
            <ul className="flex flex-col gap-2 text-sm list-none">
              <p className="text-base md:text-lg  font-semibold">Section</p>
              <li>
                <Link href="/work" className="opacity-75 hover:opacity-100">
                  Product
                </Link>
              </li>
              <li>
                <Link href="" className="opacity-75 hover:opacity-100">
                  Display
                </Link>
              </li>
              <li>
                <Link href="" className="opacity-75 hover:opacity-100">
                  QNA
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:media.unicornspace@gmail.com"
                  className="opacity-75 hover:opacity-100"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-section3">
            <ul className="flex flex-col gap-2 text-sm list-none">
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
                  href="mailto:media.unicornspace@gmail.com"
                  className="opacity-75 hover:opacity-100"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-4 border-t-2 flex items-center justify-between md:px-20">
        <p className="font-semibold tracking-tighter">Wood Decor</p>
        <nav className="flex  gap-4">
          <p className=" text-xs">Your privacy choices</p>
          <p className=" text-xs">Privacy Policy</p>
          <p className=" text-xs">Terms of Use</p>
        </nav>
      </section>
    </footer>
  );
};

export default Footer;
