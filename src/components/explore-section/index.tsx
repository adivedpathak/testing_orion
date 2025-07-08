import { useState } from "react"
import {
  Rocket, Leaf, Shield, Cloud, FlaskConical, HeartPulse, Globe, Database, Gamepad, Bitcoin
} from "lucide-react" // Replace or add icons as needed

const industries = [
  { icon: Rocket, title: "Aerospace", description: "Innovating flight and space tech." },
  { icon: Leaf, title: "Agritech", description: "Smart farming and sustainable food." },
  { icon: Database, title: "Analytics", description: "Turning data into insight." },
  { icon: Globe, title: "AR/VR", description: "Merging digital and physical reality." },
  { icon: FlaskConical, title: "Biotech", description: "Life sciences meets tech." },
  { icon: Bitcoin, title: "Blockchain", description: "Decentralized future of trust." },
  { icon: HeartPulse, title: "Digital Health", description: "Revolutionizing healthcare." },
  { icon: Shield, title: "Cybersecurity", description: "Securing digital assets." },
  { icon: Cloud, title: "Cloud Computing", description: "Scaling innovation in the cloud." },
  { icon: Gamepad, title: "Gaming", description: "Shaping digital entertainment." },
  
]

const StartupIndustries = () => {
  const [visibleCount, setVisibleCount] = useState(8)
  const loadMore = () => setVisibleCount((prev) => prev + 8)
  const hasMore = visibleCount < industries.length

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-20 bg-white text-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Explore Startup Industries</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Explore diverse sectors driving startup innovation across tech, health, energy, and more.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {industries.slice(0, visibleCount).map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 shadow-sm rounded-2xl p-5 hover:shadow-md transition-all"
          >
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 rounded-md bg-purple-100 text-purple-600">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
            <p className="text-gray-500 text-sm">{item.description}</p>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="text-center mt-10">
          <button
            onClick={loadMore}
            className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-sm font-semibold transition"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  )
}

export default StartupIndustries
