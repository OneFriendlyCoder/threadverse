import Link from "next/link";
import Signin from "./Signin";
const Page = () => {
    return (  
        <div className="absolute inset-0">
            <div className="h-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-20">
                <Link href="/">Home</Link>
                <Signin/>
            </div>
        </div>
    );
}
 
export default Page;