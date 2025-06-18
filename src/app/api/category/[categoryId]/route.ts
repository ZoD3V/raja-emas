import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ categoryId: string }> }
) {
  const categoryId = await params;
  try {
    if (!categoryId) {
      return new NextResponse("Category id is required", { status: 400 });
    }

    const category = await prisma.category.findUnique({
      where: {
        id: categoryId.categoryId,
      },
    });

    return NextResponse.json(category);
  } catch (error) {
    console.log("[CATEGORY_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ categoryId: string }> }
) {
  const categoryId = await params;

  try {
    const session = await auth();

    if (!session?.user) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!categoryId) {
      return new NextResponse("Category id is required", { status: 400 });
    }

    const category = await prisma.category.deleteMany({
      where: {
        id: categoryId.categoryId,
      },
    });

    return NextResponse.json(category);
  } catch (error) {
    console.log("[BANNER_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ categoryId: string }> }
) {
  const categoryId = await params;
  try {
    const session = await auth();

    const body = await req.json();

    const { name } = body;

    if (!session?.user) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!name) {
      return new NextResponse("name is required", { status: 400 });
    }
    if (!categoryId) {
      return new NextResponse("banner id is required", { status: 400 });
    }

    const category = await prisma.category.update({
      where: {
        id: categoryId.categoryId,
      },
      data: {
        name,
      },
    });

    return NextResponse.json(category);
  } catch (error) {
    console.log("[CATEGORY_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
