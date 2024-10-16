import { sendConfirmationEmail } from "@/actions/email.action";
import React from "react";

const page = async () => {
  const products = [
    {
      title: "product1",
      price: {
        discountedPrice: 1000,
        price: 3000,
      },
      image:
        "http://localhost:3000/_next/image?url=https%3A%2F%2Fi.pinimg.com%2F564x%2F63%2Fd0%2Fd9%2F63d0d99654d048bf3c5c68ea8015694a.jpg&w=384&q=75",
    },
    {
      title: "product2",
      price: {
        discountedPrice: 2000,
        price: 3000,
      },
      image:
        "http://localhost:3000/_next/image?url=https%3A%2F%2Fi.pinimg.com%2F564x%2F63%2Fd0%2Fd9%2F63d0d99654d048bf3c5c68ea8015694a.jpg&w=384&q=75",
    },
  ];

  await sendConfirmationEmail({
    finalPrice: 5000,
    name: "Tahir",
    email: "maverick65080@gmail.com",
    orders: products.map((item) => ({
      title: item.title,
      price: item.price.discountedPrice || item.price.price,
      image: item.image,
    })),
  });
  return <div>page</div>;
};

export default page;
