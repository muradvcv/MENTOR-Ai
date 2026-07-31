"use client"
import Link from "next/link";
import { ArrowLeft, Home} from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <section className="flex min-h-screen items-center justify-center bg-black px-6">
      <div className="mx-auto max-w-2xl text-center">
      
        {/* 404 */}
        <h1 className="mt-10 text-8xl font-extrabold tracking-wider text-purple-500 md:text-9xl">
          404
        </h1>

        <h2 className="mt-6 text-4xl font-bold text-white">
          Page Not Found
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-gray-400">
          Oops! The page you are looking for does not exist or may have been
          moved. Lets get you back to MentorAI.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-700"
          >
            <Home size={20} />
            Back to Home
          </Link>

          <button
            onClick={() => router.back()}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-purple-500 px-6 py-3 font-semibold text-purple-400 transition hover:bg-purple-600 hover:text-white"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>
      </div>
    </section>
  );
}