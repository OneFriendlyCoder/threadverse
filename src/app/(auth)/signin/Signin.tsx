import Link from "next/link";
import UserAuthForm from "@/components/UserAuthForm";
const Signin = () => {
    return (  
        <div className="container mx-auto flex w-full flex-col  justify-center space-y-6 sm:w-[400px]">
            <div className="flex flex-col space-y-2 text-center">
                {/*Import icon logo */}
                <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
                <p className="text-sm max-w-sm mx-auto"> By continuing, you are setting up a ThreadVerse account</p>
                {/*SignIN form */}
                <UserAuthForm/>
                <p className="px-8 text-center text-sm text-zinc-700">
                    New to threadverse?{' '}
                    <Link href="/signup" className="hover:text-zinc-800 text-sm underline underline-offset-4">
                            SignUp
                    </Link>
                </p>
            </div>
        </div>
    );
}
 
export default Signin;