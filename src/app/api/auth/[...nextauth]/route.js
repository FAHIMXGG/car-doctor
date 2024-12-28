import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"
import bcrypt from "bcrypt";
import { connectDB } from "@/lib/connectDB";

const handler = NextAuth({
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials) {
                const { email, password } = credentials;
                if (!email || !password) {
                    return null;
                }

                const db = await connectDB();
                const currentUser = await db.collection('users').findOne({ email })
                if (!currentUser) {
                    return null;
                }

                const passwordMatched = bcrypt.compareSync(password, currentUser.password);
                if (!passwordMatched) {
                    return null;
                }
                return currentUser
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    callbacks: {
        async signIn({ user, account}) {
            if (account.provider === 'google' || account.provider === 'github') {
                const {name, email, image} = user;
                try {
                    const db= await connectDB()
                    const userCollection = db.collection('users');
                    const existingUser = await userCollection.findOne({ email });

                    if (!existingUser) {
                        const res = await userCollection.insertOne(user)
                        return user;
                    } else {
                        return user;
                    }
                } catch (error) {
                    console.log(error)
                }
            }
            else {
                return user;
            }
          },
    },
    pages: {
        signIn: '/login'
    },
})

export { handler as GET, handler as POST }