import { NextResponse } from "next/server";

export async function GET() {
  // checking valid user
  // find all users for sending from db
  // all db operation

  return NextResponse.json({
    users: [
      {
        name: "xyz",
        age: 10,
      },
      {
        name: "xyz",
        age: 10,
      },
      {
        name: "xyz",
        age: 10,
      },
      {
        name: "xyz",
        age: 10,
      },
      {
        name: "xyz",
        age: 10,
      },
      {
        name: "xyz",
        age: 10,
      },
    ],
  });
}
