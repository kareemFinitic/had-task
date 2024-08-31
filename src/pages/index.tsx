import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center bg-blue-20  justify-between p-24 ${inter.className}`}
    >
      <div className="container  mx-auto p-8 flex items-center justify-center">
        <div>
        <h1 className="text-2xl font-bold mb-4">
          Welcome to the Exam Management System
        </h1>
        <div className="items-center flex justify-center mt-12">
           <Link href="/list-exams">
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center w-48">
            Go to Exam List
          </div>
        </Link>

        </div>
        </div>
      </div>
    </main>
  );
}
