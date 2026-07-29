"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 pt-20">

      {/* Glow Background */}
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-purple-700/30 blur-[150px]" />
      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-violet-600/20 blur-[160px]" />


      <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">


        {/* Left Content */}
        <div className="text-center md:text-left">


          <div className="mb-5 inline-flex rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-sm text-purple-300">
            🚀 AI Powered Personal Mentor
          </div>


          <h1 className="text-2xl font-bold leading-tight text-white md:text-4xl">

            Your Smart
            <span className="text-purple-500">
              {" "}AI Mentor
            </span>

            <br />

            For Learning & Growth

          </h1>


          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">

            Get personalized guidance, improve your skills,
            track your progress, and achieve your goals with
            an intelligent AI mentor available anytime.

          </p>



          {/* Buttons */}

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">


            <Link href="/auth/register">

              <Button className="w-full rounded-xl bg-purple-600 px-8 py-3 font-semibold text-white shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:bg-purple-500 sm:w-auto">

                Start Learning

                <ArrowRight size={18} />

              </Button>

            </Link>



            <Link href="/about">

              <Button className="w-full rounded-xl border border-purple-600 bg-black px-8 py-3 text-white hover:bg-purple-600/10 sm:w-auto">

                Explore More

              </Button>

            </Link>


          </div>



          {/* Stats */}

          <div className="mt-10 grid grid-cols-3 gap-5">

            <div>
              <h3 className="text-2xl font-bold text-white">
                10K+
              </h3>
              <p className="text-sm text-zinc-500">
                Learners
              </p>
            </div>


            <div>
              <h3 className="text-2xl font-bold text-white">
                99%
              </h3>
              <p className="text-sm text-zinc-500">
                Accuracy
              </p>
            </div>


            <div>
              <h3 className="text-2xl font-bold text-white">
                24/7
              </h3>
              <p className="text-sm text-zinc-500">
                Support
              </p>
            </div>

          </div>


        </div>




        {/* Right AI Card */}

        <div className="flex justify-center">


          <div className="relative h-[420px] w-[350px] rounded-3xl border border-purple-600/30 bg-zinc-950 p-6 shadow-[0_0_50px_rgba(168,85,247,0.25)]">


            <div className="flex h-full flex-col items-center justify-center">


              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-purple-700 to-violet-500 text-5xl font-bold text-white shadow-[0_0_40px_rgba(168,85,247,0.6)]">
                AI
              </div>


              <h2 className="mt-8 text-2xl font-bold text-white">
                Mentor AI
              </h2>


              <p className="mt-3 text-center text-zinc-400">
                Your intelligent assistant for
                learning, coding and career growth.
              </p>


            </div>


          </div>


        </div>



      </div>


    </section>
  );
};

export default Hero;