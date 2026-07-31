import { UserPlus, BrainCircuit, BookOpenCheck, Trophy } from "lucide-react";

const steps = [
  {
    id: "01",
    icon: UserPlus,
    title: "Create Your Account",
    description:
      "Sign up in seconds and set your learning goals, interests, and preferred technologies.",
  },
  {
    id: "02",
    icon: BrainCircuit,
    title: "AI Understands You",
    description:
      "MentorAI analyzes your profile, learning progress, and goals to create a personalized roadmap.",
  },
  {
    id: "03",
    icon: BookOpenCheck,
    title: "Learn & Practice",
    description:
      "Study with AI-generated explanations, quizzes, coding challenges, and smart recommendations.",
  },
  {
    id: "04",
    icon: Trophy,
    title: "Track Your Growth",
    description:
      "Monitor your progress, improve your skills, and achieve your learning milestones faster.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-400">
            HOW IT WORKS
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Start Learning in{" "}
            <span className="text-purple-500">4 Simple Steps</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-400">
            MentorAI makes learning simple, personalized, and powered by
            intelligent AI assistance from day one.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="relative rounded-3xl border border-purple-500/20 bg-[#111111] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]"
              >
                {/* Step Number */}
                <span className="absolute right-6 top-6 text-5xl font-extrabold text-purple-500/10">
                  {step.id}
                </span>

                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;