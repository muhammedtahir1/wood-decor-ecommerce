import React from 'react';
import { FaTruck, FaTshirt, FaHeadset } from 'react-icons/fa';

export default function OfferSection() {
  return (
    <div className="bg-black text-white py-10 px-6 md:px-24 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      <div className="flex items-center space-x-4 w-full md:w-1/3">
        <FaTruck className="text-3xl flex-shrink-0" />
        <div>
          <h3 className="font-bold text-sm md:text-base">FREE SHIPPING & Delivery</h3>
          <p className="text-xs md:text-sm md:w-[80%]">
            We provide free delivery across India. Please connect to Customer Support
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-4 w-full md:w-1/3">
        <FaTshirt className="text-3xl flex-shrink-0" />
        <div>
          <h3 className="font-bold text-sm md:text-base">Customization Available</h3>
          <p className="text-xs md:text-sm md:w-[80%]">
            We provide customisation on, dimension, fabric and colour on your product orders. Please connect to Customer Support
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-4 w-full md:w-1/3">
        <FaHeadset className="text-3xl flex-shrink-0" />
        <div>
          <h3 className="font-bold text-sm md:text-base">ONLINE SUPPORT</h3>
          <p className="text-xs md:text-sm md:w-[80%]">
            We are available every day during business hours from 10am-8pm on WhatsApp and over phone and 24 hrs. on email support.
          </p>
        </div>
      </div>
    </div>
  );
}