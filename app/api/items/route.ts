import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const {
      typeElement,
      isFavorite,
      name,
      directory,
      userName,
      password,
      urlWebsite,
      notes,
      userId
    } = await req.json()

    const element = await db.element.create({
      data: {
        typeElement,
        isFavorite,
        name,
        directory,
        userName,
        password,
        urlWebsite,
        notes,
        userId
      }
    })

    return NextResponse.json(element)

  } catch (error) {
    return new NextResponse("Internal error", { status: 500 })
  }
}