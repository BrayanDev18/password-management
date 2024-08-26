import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(req: Request, { params }: { params: { itemId: string } }) {
  try {
    const { itemId } = params
    const values = await req.json()

    if (!itemId) new NextResponse("Unauthorized", { status: 400 })

    const element = await db.element.update({
      where: {
        id: itemId
      },
      data: { ...values }
    })

    return NextResponse.json(element)

  } catch (error) {
    return new NextResponse("Internal error", { status: 500 })
  }
}