import  Heading  from "../../atoms/Heading";
import Paragraph from "../../atoms/Paragraph";
import { HeaderCard, TopNavBar } from "molecules";
import Link from "next/link"
import InputFields from "../../atoms/inputFields";
import InputHeading from "../../atoms/inputHeading"

export default function Login() {
  return (
       <div class="min-h-screen bg-gray-100 text-gray-800 antialiased px-4 py-6 flex flex-col justify-center sm:py-12">
          <div class="relative py-3 sm:max-w-xl mx-auto text-center min-w-1/2">
             <span class="text-2xl font-light">Create to your account</span>
             <div class="relative mt-4 bg-white shadow-md sm:rounded-lg text-left">
               <div class="h-2 bg-indigo-400 rounded-t-md"></div>
                    <div class="py-6 px-8">
                         <InputHeading heading="Name" />
                         <InputFields placeholder="Name" classNames="mb-2 border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md" type='text'/>
                         <InputHeading heading="Email"/>
                         <InputFields placeholder="Email" classNames="mb-2  border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md" type='email'/>
                         <InputHeading heading="Mobile" />
                         <InputFields placeholder="Mobile" classNames="mb-2  border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md" type='text'/>
                         <InputHeading heading="Password" />
                         <InputFields placeholder="Password" classNames="mb-2 border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md" type='password'/>
                         <div class="flex justify-between items-baseline">
                         <button class="mt-4 bg-indigo-500 text-white py-2 px-6 rounded-lg">Signup</button>
                         <Link href="/" clLinkss="text-sm hover:underline">Already have account?</Link>
                   </div>                 
               </div>     
             </div>
          </div>
      </div>
  );
}
