import {
  Button,
  Column,
  Container,
  Heading,
  Html,
  Img,
  Link,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

type Order = {
  title: string;
  price: number;
  image: string;
};

export default function OrderConfirmedEmail({
  orders,
  finalPrice,
  name,
}: {
  orders: Order[];
  finalPrice: number;
  name: string;
}) {
  // { order, finalPrice }: { order: Order[], finalPrice: number }
  // const finalPrice = 210
  // const orders = [
  //   {
  //     title: "Classic Watch",
  //     price: 510,
  //     image: "https://react.email/static/braun-classic-watch.jpg"
  //   },
  //   {
  //     title: "Classic Watch",
  //     price: 210,
  //     image: "https://react.email/static/braun-classic-watch.jpg"
  //   }
  // ]

  return (
    <Tailwind
      config={{
        theme: {
          fontSize: {
            xs: ["12px", { lineHeight: "16px" }],
            sm: ["14px", { lineHeight: "20px" }],
            base: ["16px", { lineHeight: "24px" }],
            lg: ["18px", { lineHeight: "28px" }],
            xl: ["20px", { lineHeight: "28px" }],
            "2xl": ["24px", { lineHeight: "32px" }],
            "3xl": ["30px", { lineHeight: "36px" }],
            "4xl": ["36px", { lineHeight: "36px" }],
            "5xl": ["48px", { lineHeight: "1" }],
            "6xl": ["60px", { lineHeight: "1" }],
            "7xl": ["72px", { lineHeight: "1" }],
            "8xl": ["96px", { lineHeight: "1" }],
            "9xl": ["144px", { lineHeight: "1" }],
          },
          spacing: {
            px: "1px",
            0: "0",
            0.5: "2px",
            1: "4px",
            1.5: "6px",
            2: "8px",
            2.5: "10px",
            3: "12px",
            3.5: "14px",
            4: "16px",
            5: "20px",
            6: "24px",
            7: "28px",
            8: "32px",
            9: "36px",
            10: "40px",
            11: "44px",
            12: "48px",
            14: "56px",
            16: "64px",
            20: "80px",
            24: "96px",
            28: "112px",
            32: "128px",
            36: "144px",
            40: "160px",
            44: "176px",
            48: "192px",
            52: "208px",
            56: "224px",
            60: "240px",
            64: "256px",
            72: "288px",
            80: "320px",
            96: "384px",
          },
        },
      }}
    >
      <Html
        className="max-w-5xl px-3"
        style={{
          marginLeft: "auto",
          fontFamily: "sans-serif",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Heading as="h1" className="mx-auto">
          WoodDecor
        </Heading>
        <Heading as="h2">Order confirmed</Heading>
        <Text>
          Hi {name} This is a quick note to let you know that your order has
          been confirmed.
        </Text>
        <Text>You have successfully placed an order.</Text>
        <FinalProducts orders={orders} finalPrice={finalPrice} />
        <Container
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "40px 24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Container
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Container
              style={{ display: "flex", alignItems: "center", flex: "1" }}
            >
              {/* <Image
                src="path/to/truck-icon.png" // Replace with the actual path to your icon image
                alt="Free Shipping Icon"
                style={{ width: '36px', height: '36px', marginRight: '16px' }}
              /> */}
              <Container>
                <Text style={{ fontWeight: "bold", fontSize: "16px" }}>
                  FREE SHIPPING & Delivery
                </Text>
                <Text style={{ fontSize: "12px", marginTop: "4px" }}>
                  We provide free delivery across India. Please connect to
                  Customer Support.
                </Text>
              </Container>
            </Container>

            <Container
              style={{ display: "flex", alignItems: "center", flex: "1" }}
            >
              {/* <Image
                src="path/to/tshirt-icon.png" // Replace with the actual path to your icon image
                alt="Customization Icon"
                style={{ width: '36px', height: '36px', marginRight: '16px' }}
              /> */}
              <Container>
                <Text style={{ fontWeight: "bold", fontSize: "16px" }}>
                  Customization Available
                </Text>
                <Text style={{ fontSize: "12px", marginTop: "4px" }}>
                  We provide customisation on dimension, fabric, and colour on
                  your product orders. Please connect to Customer Support.
                </Text>
              </Container>
            </Container>

            <Container
              style={{ display: "flex", alignItems: "center", flex: "1" }}
            >
              {/* <Image
                src="path/to/headset-icon.png" // Replace with the actual path to your icon image
                alt="Online Support Icon"
                style={{ width: '36px', height: '36px', marginRight: '16px' }}
              /> */}

              <Container>
                <Text style={{ fontWeight: "bold", fontSize: "16px" }}>
                  ONLINE SUPPORT
                </Text>
                <Text style={{ fontSize: "12px", marginTop: "4px" }}>
                  We are available every day during business hours from 10am-8pm
                  on WhatsApp and over phone, and 24 hrs. on email support.
                </Text>
              </Container>
            </Container>
          </Container>
        </Container>
        In the meantime, if you have any questions, feel free to contact us at{" "}
        <Button className="underline bold" href={"tel:+%20919341817975"}>
          +91 93418 17975
        </Button>
        <Section className="mt-10">
          <Row>
            <Column colSpan={4}>
              <Img
                alt="React Email logo"
                height="42"
                src="https://www.wooddecor.in/_next/image?url=%2Fwood-decor-logo-full.png&w=128&q=100"
              />
              <Text className="my-[8px] text-[16px] font-semibold leading-[24px] text-gray-900"></Text>
              <Text className="mb-[0px] mt-[4px] text-[16px] leading-[24px] text-gray-500">
                All your wood needs in one place
              </Text>
            </Column>
            <Column align="left" className="table-cell align-bottom">
              <Row>
                <Link href="https://maps.app.goo.gl/keBZbAcunBgA97wu9">
                  <Text className="my-[8px] text-[16px]  leading-[24px] text-blue-500">
                    No. 10/7, Begur Hulimavu Rd, Raghavendra Layout, Akshaya
                    Gardens, Hulimavu, Bengaluru, Karnataka 560068
                  </Text>
                </Link>
                <Text className="mb-[0px] mt-[4px] text-[16px] font-semibold leading-[24px] text-gray-500">
                  mail@example.com +123456789
                </Text>
              </Row>
            </Column>
          </Row>
        </Section>
      </Html>
    </Tailwind>
  );
}

const FinalProducts = ({
  orders,
  finalPrice,
}: {
  orders: Order[];
  finalPrice: number;
}) => {
  return (
    <Section className="py-[16px] text-center">
      <Heading as="h2">Order summary</Heading>

      <Section className="my-[16px] rounded-[8px] border border-solid border-gray-200 p-[16px] pt-0">
        <table className="mb-[16px]" width="100%">
          <tr>
            <th className="border-0 border-b border-solid border-gray-200 py-[8px]">
              &nbsp;
            </th>
            <th
              align="left"
              className="border-0 border-b border-solid border-gray-200 py-[8px] text-gray-500"
              colSpan={6}
            >
              <Text className="font-semibold">Product</Text>
            </th>

            <th
              align="center"
              className="border-0 border-b border-solid border-gray-200 py-[8px] text-gray-500"
            >
              <Text className="font-semibold">Price</Text>
            </th>
          </tr>
          {orders.map((order) => (
            <tr key={order.image}>
              <td className="border-0 border-b border-solid border-gray-200 py-[8px]">
                <Img
                  alt="Braun Classic Watch"
                  className="rounded-[8px] object-cover"
                  height={110}
                  src={order.image}
                />
              </td>
              <td
                align="left"
                className="border-0 border-b border-solid border-gray-200 py-[8px]"
                colSpan={6}
              >
                <Text>{order.title}</Text>
              </td>

              <td
                align="center"
                className="border-0 border-b border-solid border-gray-200 py-[8px]"
              >
                <Text>₹{order.price}</Text>
              </td>
            </tr>
          ))}
        </table>
        <Row>
          <Column align="right">
            <Heading as="h4">Total</Heading>
            <Text className="text-xl -mt-2">₹{finalPrice}</Text>
            {/* <Button
            className="Container-border w-full rounded-[8px] bg-indigo-600 px-[12px] py-[12px] text-center font-semibold text-white"
            href="https://react.email"
          >
            Checkout
          </Button> */}
          </Column>
        </Row>
      </Section>
    </Section>
  );
};
