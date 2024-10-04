import { NextRequest, NextResponse } from "next/server";

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const GET = async (req: NextRequest) => {
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content:
          "You will be provided with statements, and your task is to convert them to standard English.",
      },
      {
        role: "user",
        content: "She no went to the market.",
      },
    ],
    temperature: 0.7,
    max_tokens: 64,
    top_p: 1,
  });

  console.log(response);

  return NextResponse.json({ message: "Hello World" });
};
