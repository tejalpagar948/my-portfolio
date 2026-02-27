import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { supabase } from "@/lib/supabase";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async signIn({ user }: { user: any }) {
      // store google info in supabase
      console.log("🔥 SIGNIN CALLBACK RUNNING 🔥");
      console.log("User:", user);
      await supabase.from("reviews").upsert({
        email: user.email,
        name: user.name,
        photo: user.image,
      });

      return true;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
