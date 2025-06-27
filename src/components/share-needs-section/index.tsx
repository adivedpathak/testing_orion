import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Lightbulb, FlaskConical, Building } from "lucide-react"

const ShareNeedsSection = () => {
  const needsCategories = [
    {
      icon: Users,
      title: "Internships",
      description: "Find talented interns to join your team",
      color: "bg-blue-100 text-blue-600",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: Lightbulb,
      title: "Live Projects",
      description: "Collaborate on real-world projects",
      color: "bg-green-100 text-green-600",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: FlaskConical,
      title: "Research",
      description: "Partner for cutting-edge research",
      color: "bg-purple-100 text-purple-600",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: Building,
      title: "Labs",
      description: "Access to specialized laboratories",
      color: "bg-orange-100 text-orange-600",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <section id="share-needs" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm">
            Share Your Needs
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Instantly Share Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Immediate, Short & Long Term
            </span>{" "}
            Needs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with the right partners, talent, and resources to accelerate your startup's growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {needsCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className={`absolute top-4 left-4 p-2 rounded-lg ${category.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ShareNeedsSection
