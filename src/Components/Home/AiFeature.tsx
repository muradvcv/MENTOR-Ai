import {
  Bot,
  BrainCircuit,
  BookOpen,
  GraduationCap,
  Sparkles,
  Target,
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "24/7 AI Mentor",
    description:
      "Ask questions anytime and receive instant, context-aware guidance to overcome learning challenges.",
  },
  {
    icon: BrainCircuit,
    title: "Smart Learning Paths",
    description:
      "AI creates personalized roadmaps based on your skills, goals, and learning progress.",
  },
  {
    icon: BookOpen,
    title: "AI Study Assistant",
    description:
      "Generate notes, summaries, explanations, quizzes, and learning resources in seconds.",
  },
  {
    icon: Target,
    title: "Skill Recommendations",
    description:
      "Discover the next skills, technologies, and courses you should learn to reach your goals.",
  },
  {
    icon: GraduationCap,
    title: "Practice & Feedback",
    description:
      "Receive AI-powered feedback on your answers, assignments, and coding exercises.",
  },
  {
    icon: Sparkles,
    title: "Agentic AI Support",
    description:
      "An intelligent assistant that remembers context and helps you make better learning decisions.",
  },
];

const AiFeature = () => {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-400">
            AI FEATURES
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Learn Smarter with{" "}
            <span className="text-purple-500">MentorAI</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-400">
            MentorAI combines Agentic AI with personalized learning to help
            students and developers master new skills faster through intelligent
            recommendations, real-time guidance, and adaptive learning.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-purple-500/20 bg-[#111111] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400 transition-all duration-300 group-hover:bg-purple-600 group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AiFeature;