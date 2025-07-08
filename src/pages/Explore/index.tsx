import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  TrendingUp,
  Users,
  ArrowRight,
  Rocket,
  Leaf,
  HeartPulse,
  Banknote,
  GraduationCap,
  ShieldCheck,
} from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/postlogincomponents/footer"

const startups = [
  {
    id: 1,
    name: "TechFlow AI",
    icon: Rocket,
    status: "Unicorn",
    statusColor: "bg-purple-100 text-purple-700",
    description:
      "Revolutionary AI platform transforming business operations with intelligent automation and predictive analytics.",
    funding: "$2.1B",
    team: "500+",
    growth: "300%",
    isGrowing: true,
    isHiring: true,
  },
  {
    id: 2,
    name: "GreenEnergy Pro",
    icon: Leaf,
    status: "Rising Star",
    statusColor: "bg-green-100 text-green-700",
    description:
      "Sustainable energy solutions powering the future of clean technology with innovative solar and wind systems.",
    funding: "$150M",
    team: "200+",
    growth: "250%",
    isGrowing: true,
    isHiring: true,
  },
  {
    id: 3,
    name: "HealthSync",
    icon: HeartPulse,
    status: "Unicorn",
    statusColor: "bg-purple-100 text-purple-700",
    description:
      "Digital health platform connecting patients with personalized care solutions through AI-driven diagnostics.",
    funding: "$1.8B",
    team: "400+",
    growth: "180%",
    isGrowing: true,
    isHiring: true,
  },
  {
    id: 4,
    name: "FinanceFlow",
    icon: Banknote,
    status: "Growth Stage",
    statusColor: "bg-blue-100 text-blue-700",
    description:
      "Next-generation fintech platform revolutionizing digital payments and financial services for businesses.",
    funding: "$320M",
    team: "150+",
    growth: "220%",
    isGrowing: true,
    isHiring: false,
  },
  {
    id: 5,
    name: "EduTech Plus",
    icon: GraduationCap,
    status: "Rising Star",
    statusColor: "bg-green-100 text-green-700",
    description:
      "Innovative educational technology platform enhancing learning experiences through interactive content and AI tutoring.",
    funding: "$85M",
    team: "120+",
    growth: "190%",
    isGrowing: true,
    isHiring: true,
  },
  {
    id: 6,
    name: "CloudSecure",
    icon: ShieldCheck,
    status: "Growth Stage",
    statusColor: "bg-blue-100 text-blue-700",
    description:
      "Advanced cybersecurity solutions protecting enterprises with cutting-edge threat detection and prevention systems.",
    funding: "$240M",
    team: "180+",
    growth: "160%",
    isGrowing: false,
    isHiring: true,
  },
]

export default function StartupListing() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen mt-5 bg-gradient-to-br from-purple-50 via-white to-purple-100">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Discover Amazing <span className="text-purple-600">Startups</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore innovative companies that are transforming industries and shaping the future with cutting-edge
              technology and visionary leadership.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {startups.map((startup) => (
              <Card
                key={startup.id}
                className="bg-white hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
              >
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                        <startup.icon className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900">{startup.name}</h3>
                        <Badge className={`${startup.statusColor} text-xs font-medium`}>
                          {startup.status}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{startup.description}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">{startup.funding}</div>
                      <div className="text-xs text-gray-500">Funding</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-pink-600">{startup.team}</div>
                      <div className="text-xs text-gray-500">Team</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{startup.growth}</div>
                      <div className="text-xs text-gray-500">Growth</div>
                    </div>
                  </div>

                  {/* Tags & Button */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {startup.isGrowing && (
                        <div className="flex items-center space-x-1 text-gray-500">
                          <TrendingUp className="w-4 h-4" />
                          <span className="text-xs">Growing</span>
                        </div>
                      )}
                      {startup.isHiring && (
                        <div className="flex items-center space-x-1 text-gray-500">
                          <Users className="w-4 h-4" />
                          <span className="text-xs">Hiring</span>
                        </div>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 p-0 h-auto font-medium"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-medium">
              Load More Startups
            </Button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
