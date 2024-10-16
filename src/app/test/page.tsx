import { sendConfirmationEmail } from "@/actions/email.action";
import React from "react";

const page = async () => {
  // const products = [
  //   {
  //     title: "Chair set Luxury",
  //     price: {
  //       discountedPrice: 1000,
  //       price: 3000,
  //     },
  //     image:
  //       "https://utfs.io/f/2e1b285a-804f-443b-b1b9-bbea6deda5c5-r016zg.jpg",
  //   },
  //   {
  //     title: "Chair yellow bed",
  //     price: {
  //       discountedPrice: 2440,
  //       price: 3000,
  //     },
  //     image:
  //       "https://i.pinimg.com/564x/b6/ae/2d/b6ae2d30687b590536c94e29be9cb8bc.jpg",
  //   },
  // ];

  // await sendConfirmationEmail({
  //   finalPrice: 5000,
  //   name: "Faizan",
  //   email: "warandrule@gmail.com",
  //   orders: products.map((item) => ({
  //     title: item.title,
  //     price: item.price.discountedPrice || item.price.price,
  //     image: item.image,
  //   })),
  // });

  // console.log(process.env.ADMIN_EMAIL);
  return <div>page</div>;
};



export default page;
