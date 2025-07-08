import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Video, Users, Lightbulb, Play } from "lucide-react"

const HostSessionsSection = () => {
  const sessionTypes = [
    {
      icon: Video,
      title: "Product Demos",
      description: "Showcase your products to a global audience",
    },
    {
      icon: Lightbulb,
      title: "Panel Discussions /  Podcasts",
      description: "Collaborate on innovative ideas and solutions",
    },
    // {
    //   icon: MessageSquare,
    //   title: "Feedback Sessions",
    //   description: "Get unbiased feedback from fresh perspectives",
    // },
    {
      icon: Users,
      title: "Webinars",
      description: "Connect with like-minded entrepreneurs",
    },
  ]

  return (
    <section id="host-sessions" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm">
            Online Sessions
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Showcase your journey, insights, and innovations.

            {/* <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              promote your products
            </span>{" "} */}
            {/* through webinars */}
          </h2>
          {/* Host impactful webinars, podcasts, panel discussions, or live product demos. */}
Host impactful webinars, podcasts, panel discussions, or live product demos.
Or simply tune in to see what other startups are building, solving, and sharing — all in one place.          {/* <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Or brainstorm new ideas, or get feedback from an unbiased and fresh population mind - we've got you covered
            with our comprehensive session hosting platform
          </p> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Session types */}
          <div className="space-y-6">
            {sessionTypes.map((session, index) => {
              const IconComponent = session.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500"
                >
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="bg-blue-100 text-blue-600 p-3 rounded-lg group-hover:bg-blue-200 transition-colors duration-300">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{session.title}</h3>
                      <p className="text-gray-600">{session.description}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Online startup session"
                width={600}
                height={400}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Live Session in Progress</h3>
                <p className="text-sm opacity-90">Join 500+ entrepreneurs online</p>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Button
                  size="lg"
                  className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30"
                >
                  <Play className="h-6 w-6 text-white" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          {/* <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 mr-4"
          >
            Host Your Session
          </Button>
          <Button size="lg" variant="outline" className="bg-white text-gray-700 hover:bg-gray-50">
            Browse Sessions
          </Button> */}
        </div>
      </div>
    </section>
  )
}

export default HostSessionsSection
