import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import Credentials from "next-auth/providers/credentials";
import { SignInSchema } from "@/lib/zod";
import { compareSync } from "bcrypt-ts";

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const validateFields = SignInSchema.safeParse(credentials);
        if (!validateFields.success) {
          return null;
        }

        const { email, password } = validateFields.data;

        const user = await prisma.user.findUnique({
          where: { email },
        });

        if (!user || !user.password) {
          throw new Error("No user found");
        }

        const passwordMatch = compareSync(password, user.password);

        if (!passwordMatch) {
          return null;
        }

        return user;
      },
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const protectedRoutes = ["/dashboard"];

      if (!isLoggedIn && protectedRoutes.includes(nextUrl.pathname)) {
        return Response.redirect(new URL("/sign-in", nextUrl));
      }

      if (isLoggedIn && nextUrl.pathname.startsWith("/sign-in")) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      return true;
    },
  },
});
