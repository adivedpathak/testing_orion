import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/Collapsible";

const faqData = [
  {
    question: "What is this platform about?",
    answer:
      "Our platform is the world's largest hub designed to support startups from the pre-seed stage all the way to IPO. We connect founders with talent, investors, customers, and key learning resources in one place.",
  },
  {
    question: "Who can join the platform?",
    answer:
      "Anyone involved in the startup ecosystem can join - founders, investors, mentors, employees, and service providers. Whether you're just starting out or scaling your business, there's a place for you here.",
  },
  {
    question: "How do I register?",
    answer:
      "Registration is simple and free. Click the 'Sign Up' button, fill out your profile information, and verify your email address. You'll be able to start connecting with the community immediately.",
  },
  {
    question: "What does 'Share Needs' mean?",
    answer:
      "Share Needs is our feature that allows you to post what your startup needs - whether it's funding, talent, partnerships, or resources. The community can then respond with relevant connections and opportunities.",
  },
  {
    question: "Can I explore startups in specific sectors?",
    answer:
      "Yes! Our Explore feature allows you to filter startups by industry, stage, location, and other criteria. You can discover companies that align with your interests or investment thesis.",
  },
  {
    question: "What are Online Sessions?",
    answer:
      "Online Sessions are virtual events including workshops, pitch sessions, networking events, and educational webinars. They're designed to help you learn, connect, and grow your startup.",
  },
  {
    question: "How can I host a session?",
    answer:
      "If you're an expert in your field, you can apply to host sessions through the 'Host Sessions' section. We welcome industry leaders, successful founders, and subject matter experts to share their knowledge.",
  },
  {
    question: "Do I have to pay to attend sessions?",
    answer:
      "Most sessions are free for community members. Some premium workshops or exclusive events may have a fee, but we strive to keep valuable content accessible to all entrepreneurs.",
  },
  {
    question: "How do I get funding through the platform?",
    answer:
      "You can get funding by creating a compelling startup profile, sharing your funding needs, participating in pitch events, and connecting directly with investors who match your sector and stage.",
  },
  {
    question: "Is my startup profile visible to everyone?",
    answer:
      "Your basic profile is visible to the community, but you can control what information is public. Sensitive details like financials can be shared privately with verified investors only.",
  },
  {
    question: "How do I connect with other members?",
    answer:
      "You can connect through our messaging system, join relevant groups, attend online sessions, or use our matching algorithm that suggests relevant connections based on your needs and interests.",
  },
  {
    question: "Can I customize notifications and updates?",
    answer:
      "You can customize your notification preferences in your settings to receive updates about relevant opportunities, events, and connections while avoiding information overload.",
  },
];

export default function FAQComponent() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
      {/* Get Funded Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 lg:p-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Get Funded</h2>
            <p className="text-lg text-gray-600 leading-relaxed">Looking to raise capital?</p>
            <p className="text-gray-600 leading-relaxed">
              Explore curated investment opportunities, join high-impact pitch day events, and network with active
              investors ready to back bold ideas. Fuel your vision with the right funding partners.
            </p>
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Fundraising
            </Button>
          </div>
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/funding-network.png"
                alt="Global funding network visualization"
                width={500}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 flex space-x-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`w-3 h-3 rounded-full ${i === 2 ? "bg-purple-600" : "bg-gray-300"}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="space-y-8">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently asked questions</h2>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <Collapsible key={index} open={openItems.includes(index)} onOpenChange={() => toggleItem(index)}>
              <CollapsibleTrigger className="w-full">
                <div className="flex items-center justify-between p-6 bg-white border border-gray-200 rounded-lg hover:border-purple-200 hover:bg-purple-50/50 transition-all duration-200 group">
                  <div className="flex items-center space-x-4">
                    <span className="text-purple-600 font-semibold text-lg">Q.</span>
                    <h3 className="text-left font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    {openItems.includes(index) ? (
                      <Minus className="w-5 h-5 text-purple-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
                    )}
                  </div>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="px-6 pb-6 pt-2 bg-white border-x border-b border-gray-200 rounded-b-lg -mt-1">
                  <div className="pl-8">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </section>
    </div>
  );
}
