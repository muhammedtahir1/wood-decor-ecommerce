import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prisma from "./lib/db";

// creating a custom error to
class CustomAuthError extends CredentialsSignin {
  code = "Something went wrong while authenticating";
  // write a constructor to accept the error message
  constructor(message?: string) {
    super(message);
    if (message) {
      this.code = message;
    }
  }
}
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: { email: { type: "email" }, password: { type: "password" } },
      authorize: async (credentials) => {
        let user = null;

        // const validationResult = signInFormSchema.safeParse(credentials); // validate the credentials (TODO)
        const dbUser = await prisma.admin.findUnique({
          where: {
            email: `${credentials.email}`,
          },
        });
        if (!dbUser) {
          throw new CustomAuthError("No such email found");
        }

        if (dbUser.password !== credentials.password) {
          throw new CustomAuthError("Password is incorrect");
        }

        user = {
          email: dbUser.email,
          // github: "https://github.com/mohdfaizan5",
        };
        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = token.sub as string;
      }
      return token;
    },
    session: async ({ session, token, user }) => {
      if (session?.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});
