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
        console.log("credentials", credentials);

        // const validationResult = signInFormSchema.safeParse(credentials); // validate the credentials (TODO)
        const dbUser = await prisma.user.findUnique({
          where: {
            email: `${credentials.email}`,
          },
        });
        console.log("user", dbUser);

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
    // used when session in server is created
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = token.sub as string;
        // if (user?.github) {
        //   token.github = user?.github
        // }
      }
      // console.log("🧓🧓JWT callback");
      // console.log(token, user);
      return token;
    },
    // used when client useSession is called
    session: async ({ session, token, user }) => {
      if (session?.user) {
        session.user.id = token.id as string;
      }
      // console.log("🛠🛠🛠session callback sesssion", session);
      // console.log("🛠🛠🛠session callback token ", token);
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});
