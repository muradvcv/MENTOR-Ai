import { Check, Crown, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for beginners starting with AI learning.",
    popular: false,
    features: [
      "AI Chat Mentor",
      "5 AI Requests / Day",
      "Basic Quiz Generator",
      "Learning Dashboard",
      "Community Support",
    ],
  },
  {
    name: "Pro",
    price: "$19",
    description: "Best choice for students and developers.",
    popular: true,
    features: [
      "Unlimited AI Chat",
      "AI Image Analyzer",
      "AI Code Helper",
      "AI Notes Summarizer",
      "Priority Support",
    ],
  },
  {
    name: "Team",
    price: "$49",
    description: "Built for teams, institutions, and organizations.",
    popular: false,
    features: [
      "Everything in Pro",
      "Team Workspace",
      "Shared Learning",
      "Analytics Dashboard",
      "24/7 Premium Support",
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-400">
            PRICING
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Choose Your <span className="text-purple-500">Learning Plan</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-400">
            Start for free and upgrade anytime to unlock advanced AI-powered
            learning tools and personalized mentoring.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2 ${plan.popular
                  ? "border-purple-500 bg-gradient-to-b from-purple-900/30 to-[#111111] shadow-[0_0_40px_rgba(168,85,247,0.25)]"
                  : "border-purple-500/20 bg-[#111111] hover:border-purple-500"
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-purple-600 px-4 py-2 text-sm font-semibold text-white">
                  <div className="flex items-center gap-2">
                    <Crown size={16} />
                    Most Popular
                  </div>
                </div>
              )}

              <Sparkles className="text-purple-500" size={36} />

              <h3 className="mt-6 text-2xl font-bold text-white">
                {plan.name}
              </h3>

              <div className="mt-4 flex items-end gap-2">
                <span className="text-5xl font-bold text-white">
                  {plan.price}
                </span>
                <span className="pb-2 text-gray-400">/month</span>
              </div>

              <p className="mt-5 text-gray-400">{plan.description}</p>

              <div className="my-8 h-px bg-purple-500/20" />

              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <div className="rounded-full bg-purple-500/10 p-1">
                      <Check size={16} className="text-purple-400" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-10 w-full rounded-xl py-3 font-semibold transition ${plan.popular
                    ? "bg-purple-600 text-white hover:bg-purple-700"
                    : "border border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white"
                  }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;