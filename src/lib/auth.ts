// authOptions

import { NextAuthOptions } from "next-auth"
import { db } from "./db"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import Google from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    session: {
        strategy: 'jwt'
    },
    pages:{
        signIn: '/signin'
    },
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        })
    ]
}