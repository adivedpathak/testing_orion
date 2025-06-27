import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plane, Wheat, Dna, DollarSign, ShoppingBag, Heart } from "lucide-react"

const ExploreSection = () => {
  const industries = [
    {
      icon: Plane,
      name: "Aerospace",
      color: "bg-blue-100 text-blue-600 hover:bg-blue-200",
      startups: "250+",
    },
    {
      icon: Wheat,
      name: "AgriTech",
      color: "bg-green-100 text-green-600 hover:bg-green-200",
      startups: "180+",
    },
    {
      icon: Dna,
      name: "BioTech",
      color: "bg-purple-100 text-purple-600 hover:bg-purple-200",
      startups: "320+",
    },
    {
      icon: DollarSign,
      name: "FinTech",
      color: "bg-yellow-100 text-yellow-600 hover:bg-yellow-200",
      startups: "450+",
    },
    {
      icon: ShoppingBag,
      name: "Consumer",
      color: "bg-pink-100 text-pink-600 hover:bg-pink-200",
      startups: "380+",
    },
    {
      icon: Heart,
      name: "MedTech",
      color: "bg-red-100 text-red-600 hover:bg-red-200",
      startups: "290+",
    },
  ]

  return (
    <section id="explore" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm">
            Explore Opportunities
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Explore from amongst{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              1000s of Startups
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Discover collaboration opportunities, expand your market reach, gain valuable knowledge, build credibility,
            and drive innovation across diverse industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`inline-flex p-4 rounded-full ${industry.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{industry.name}</h3>
                  <p className="text-gray-600 mb-4">{industry.startups} startups</p>
                  <Button variant="outline" size="sm" className="group-hover:bg-blue-50 group-hover:border-blue-300">
                    Explore
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            View All Industries
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ExploreSection
