import {
  Bot,
  FileText,
  BrainCircuit,
  BookOpen,
  MessageSquareText,
  Sparkles,
} from "lucide-react";

const tools = [
  {
    icon: MessageSquareText,
    title: "AI Mentor Chat",
    description:
      "Get instant answers, explanations, and personalized learning support from your AI mentor.",
    badge: "Popular",
  },
  {
    icon: FileText,
    title: "Notes Generator",
    description:
      "Generate structured study notes, summaries, and revision materials in seconds.",
    badge: "AI Powered",
  },
  {
    icon: BrainCircuit,
    title: "Quiz Generator",
    description:
      "Create interactive quizzes based on any topic to test and improve your knowledge.",
    badge: "Smart",
  },
  {
    icon: BookOpen,
    title: "Learning Roadmap",
    description:
      "Receive a personalized roadmap tailored to your current skills and career goals.",
    badge: "Recommended",
  },
  {
    icon: Bot,
    title: "AI Code Helper",
    description:
      "Debug code, understand errors, and receive clean coding suggestions with AI assistance.",
    badge: "Developer",
  },
  {
    icon: Sparkles,
    title: "Content Assistant",
    description:
      "Generate blogs, documentation, project ideas, and educational content effortlessly.",
    badge: "New",
  },
];

const PopularTools = () => {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-400">
            AI TOOLS
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Popular <span className="text-purple-500">AI Tools & Services</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-400">
            Discover powerful AI tools designed to make learning faster,
            smarter, and more personalized with MentorAI.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, index) => {
            const Icon = tool.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-purple-500/20 bg-[#111111] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]"
              >
                {/* Badge */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400 transition-all duration-300 group-hover:bg-purple-600 group-hover:text-white">
                    <Icon size={30} />
                  </div>

                  <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-400">
                    {tool.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {tool.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {tool.description}
                </p>

                <button className="mt-8 rounded-xl border border-purple-500 bg-purple-600 px-5 py-2.5 font-medium text-white transition-all duration-300 hover:bg-purple-700">
                  Explore Tool
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularTools;