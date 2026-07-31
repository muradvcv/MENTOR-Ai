import { BrainCircuit, Bot, GraduationCap, Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="bg-black py-30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-400">
              ABOUT MENTORAI
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
              Learn Smarter with the Power of{" "}
              <span className="text-purple-500">Agentic AI</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              MentorAI is an intelligent learning platform that helps students,
              developers, and professionals achieve their goals through
              personalized AI guidance. Our Agentic AI understands your
              learning journey, recommends the right resources, generates study
              materials, and provides instant assistance whenever you need it.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              Whether you are preparing for interviews, learning programming,
              or exploring new technologies, MentorAI becomes your personal AI
              mentor to help you learn faster and more effectively.
            </p>

            <button className="mt-10 rounded-xl bg-purple-600 px-8 py-3 font-semibold text-white transition hover:bg-purple-700">
              Explore MentorAI
            </button>
          </div>

          {/* Right Cards */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-purple-500/20 bg-[#111111] p-8 transition hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]">
              <BrainCircuit className="mb-5 text-purple-500" size={42} />
              <h3 className="text-xl font-semibold text-white">
                Smart Learning
              </h3>
              <p className="mt-3 text-gray-400">
                Personalized learning paths generated based on your goals and
                current skill level.
              </p>
            </div>

            <div className="rounded-3xl border border-purple-500/20 bg-[#111111] p-8 transition hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]">
              <Bot className="mb-5 text-purple-500" size={42} />
              <h3 className="text-xl font-semibold text-white">
                AI Mentor
              </h3>
              <p className="mt-3 text-gray-400">
                Ask questions anytime and receive accurate, context-aware AI
                guidance instantly.
              </p>
            </div>

            <div className="rounded-3xl border border-purple-500/20 bg-[#111111] p-8 transition hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]">
              <GraduationCap className="mb-5 text-purple-500" size={42} />
              <h3 className="text-xl font-semibold text-white">
                Skill Growth
              </h3>
              <p className="mt-3 text-gray-400">
                Track your progress, improve continuously, and achieve your
                learning milestones faster.
              </p>
            </div>

            <div className="rounded-3xl border border-purple-500/20 bg-[#111111] p-8 transition hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]">
              <Sparkles className="mb-5 text-purple-500" size={42} />
              <h3 className="text-xl font-semibold text-white">
                AI-Powered Tools
              </h3>
              <p className="mt-3 text-gray-400">
                Generate notes, quizzes, summaries, and intelligent study
                recommendations with one click.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;