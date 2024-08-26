import { db } from "@/lib/db";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password, userName } = await req.json();

    if (!email || !password || !userName) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    const hashedPassword = await hash(password, 10);

    const user = await db.user.create({
      data: {
        email,
        hashedPassword,
        userName
      }
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error('Error during user registration:', error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
