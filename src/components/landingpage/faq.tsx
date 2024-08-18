"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";
import Link from "next/link";
// import { paymentLink } from "@/lib/data";
// import Timer from "./timer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "../ui/badge";
const faqs = [
  {
    qusetion: "Who are we?",
    answer:
      "We are a Startup in Bengaluru dealing in furniture for more than 6 decades. We have our Warehouses in Delhi, Mumbai, Chennai and Bengaluru.",
  },
  
  {
    qusetion: "How to customize my requirement?",
    answer:
      "Our Manufacturing Department will be in direct contact with you during the manufacturing, you can ask for your preferable customization and they'll guide you accordingly. Customization is available on colour, fabric and dimension as well Prices may vary for customization of your order",
  },
  {
    qusetion: "What about the delivery?",
    answer: "We provide free delivery around 100 -200 km of Delhi, Mumbai, Chennai and Bengaluru cities. Please share your pin code and support team can assist you if we are operational in your city and state as we are expanding in other cities as well. Usual TAT for delivery is 10-15 days",
  },
  {
    qusetion: "How can we guarantee?",
    answer: "We use premium raw material in all our products. All the orders go through a rigid 3 level quality check at build, fabrication and delivery process. Your order is shipped after we receive a Yes on your prepared order pics and videos shared.",
  },
  
  
];

const Faq = () => {
  return (
    <div
      id="faq"
      className="py-14 md:py-20 px-6 flex flex-col justify-center items-center gap-3 border-b-2"
    >
      <h2>FAQ&apos;s</h2>
      <Accordion type="single" className="md:w-[600px] mx-auto" collapsible>
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger className="text-base md:text-lg">{faq.qusetion}</AccordionTrigger>
            <AccordionContent>{faq.answer} </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      
    </div>
  );
};

export default Faq;