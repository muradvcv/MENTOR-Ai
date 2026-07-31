import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is MentorAI?",
    answer:
      "MentorAI is an AI-powered learning platform that helps students and developers learn faster through personalized guidance, AI mentoring, quizzes, and smart recommendations.",
  },
  {
    question: "Do I need prior experience to use MentorAI?",
    answer:
      "No. Whether you're a beginner or an experienced developer, MentorAI adapts its recommendations and learning path to your current skill level.",
  },
  {
    question: "Which AI models does MentorAI use?",
    answer:
      "MentorAI supports modern Large Language Models such as OpenAI, Gemini, Claude, Groq, and other compatible AI providers.",
  },
  {
    question: "Can I generate study notes and quizzes?",
    answer:
      "Yes. MentorAI can generate summaries, study notes, quizzes, explanations, and personalized learning resources with AI.",
  },
];

const FaqCTA = () => {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-400">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Frequently Asked <span className="text-purple-500">Questions</span>
          </h2>

          <p className="mt-5 text-lg text-gray-400">
            Everything you need to know about MentorAI and how our intelligent
            learning platform can help you achieve your goals.
          </p>
        </div>

        {/* FAQ */}
        <div className="mx-auto max-w-4xl space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="collapse collapse-plus rounded-2xl border border-purple-500/20 bg-[#111111]"
            >
              <input
                type="radio"
                name="mentorai-faq"
                defaultChecked={index === 0}
              />

              <div className="collapse-title flex items-center justify-between text-lg font-semibold text-white">
                {faq.question}
                <ChevronDown className="text-purple-400" size={20} />
              </div>

              <div className="collapse-content">
                <p className="leading-7 text-gray-400">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className=" overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-r from-purple-900/30 via-[#151515] to-purple-900/30 p-10 md:p-16">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="max-w-2xl">
              <h3 className="text-3xl font-bold text-white md:text-4xl">
                Ready to Learn with{" "}
                <span className="text-purple-500">MentorAI?</span>
              </h3>

              <p className="mt-5 text-lg leading-8 text-gray-400">
                Join thousands of students and developers who are learning
                smarter with AI-powered mentoring, personalized study plans,
                intelligent recommendations, and interactive learning tools.
              </p>
            </div>

            <Link
              href="/register"
              className="group inline-flex items-center gap-3 rounded-2xl bg-purple-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-purple-700"
            >
              Get Started Free
              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqCTA;