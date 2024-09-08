import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonialsData = [
  {
    description:
      "Really like the quality of the product. Ordered directly from wood decor and got some extra discount. Delivery was quick and really helpful staff.",
    name: "	Himani Godara",
    subTitle: "3 days ago",
    stars: 5,
    image:
      "https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/b4da3e31-4b07-4f7d-8535-e7324cee1f3e._CR0,0,424,424_SX48_.jpg",
  },
  {
    description:
      "Options for Bangalore are really great, I had always heard of custom sofas, i got my custom design Dining table and chairs designed along with marble top. it was great experience working with these wonderful people. thanks The wood decor ",
    name: "Fatima Banu",
    stars: 5,
    subTitle: "1 day ago",
    image:
      "https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/f9f1e5c2-d849-410d-9b6e-459e8e264ccf._CR0,0,500,500_SX48_.jpg",
  },
  {
    description:
      "Bought a sofa from The Wood decor. Loved the product and completely satisfied!! Worth the money and will definitely recommend this. Service was great too!! The best part is we get an option to select the material, colour and design. Completely customised.",
    name: "AjishPG",
    stars: 5,
    subTitle: "9 days ago",
    image:
      "https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/2208f3a2-eb43-4625-b28b-94d917a2fadc._CR0,0,375,375_UX460_.jpg",
  },
  {
    description:
      "We ordered the custom-made sofa for our living room. The staff was very cooperative and well-knowledgeable to understand our every requirement. The service has been great and got the same sofa and prices as we always dreamt of. Thanks a lot!",
    name: "Abdul majeed",
    stars: 5,
    subTitle: "13 days ago",
    image:
      "https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png",
  },
];

const Testimonials = () => {
  return (
    <section className="py-10 md:py-20 px-8 md:px-16 my-10 md:my-20 border-t-2" id="testimonils">
      <h3 className="text-brand-text2 font-semibold text-3xl text-center mb-8 md:mb-12">
        Testimonials
      </h3>
      <div className=" flex flex-col md:flex-row gap-2">
        {testimonialsData.map((testimonial, index) => (
          <Testimonial key={index} data={testimonial} />
        ))}
      </div>
    </section>
  );
};

const Testimonial = ({ data }: any) => {
  const { description, image, name, subTitle, stars } = data;
  return (
    <Card className="bg-brand-bg-DEFALUT/70 p-6 rounded-xl">
      <div className="flex items-center pb-2 gap-2">
        <Avatar>
          <AvatarImage src={image} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h5 className=" font-semibold">{name}</h5>
          {/* <p className="text-xs opacity-75">{subTitle}</p> */}
          <div className="flex">{Array.from({ length: stars }, (_, i) => i + 1).map((each, index) => <Star key={index} size={12} className="text-amber-400 fill-amber-300"/>)}</div>
        </div>
      </div>
      <CardContent className="p-0 mt-4">
        <p className="text-sm">&ldquo;{description}&ldquo;</p>
      </CardContent>
    </Card>
  );
};

export default Testimonials;
