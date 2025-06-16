"use server";
import { SignInSchema, SignUpSchema } from "@/lib/zod";
import { hashSync } from "bcrypt-ts";
import { prisma } from "./prisma";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { NextResponse } from "next/server";

export const signUpCredentials = async (
  prevState: unknown,
  formData: FormData
) => {
  const data = Object.fromEntries(formData.entries());

  const validateFields = SignUpSchema.safeParse(data);

  if (!validateFields.success) {
    return {
      error: validateFields.error.flatten().fieldErrors,
    };
  }

  const { name, password, email } = validateFields.data;

  const hashedPassword = hashSync(password, 10);

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return {
      error: {
        email: "Email sudah terdaftar, silakan gunakan email lain.",
      },
    };
  }

  try {
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
  } catch (error) {
    return { message: `Failed to register user ${error}` };
  }
  NextResponse.redirect("/sign-in");
};

export const signInCredentials = async (
  prevState: unknown,
  formData: FormData
) => {
  const data = Object.fromEntries(formData.entries());

  const validateFields = SignInSchema.safeParse(data);

  if (!validateFields.success) {
    return {
      error: validateFields.error.flatten().fieldErrors,
    };
  }

  const { password, email } = validateFields.data;

  try {
    await signIn("credentials", { email, password, redirectTo: "/dashboard" });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { message: "Invalid Credentials" };
        default:
          return { message: "Something went wrong" };
      }
    }
    throw error
  }
};
