
import { Button } from "@/components/ui/button"
import {Badge} from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {  ArrowRight,  TrendingUp } from "lucide-react"


  const trendingTags: string[] = [
    "Startup",
    "AI",
    "Fundraising",
    "Product Management",
    "Marketing",
    "Development",
    "Design",
    "Leadership",
    "Growth Hacking",
    "Blockchain",
  ]

function ActionCards() {
  return (<>
    {/* Interactive Cards Section */}
      <section className="w-full px-8 md:px-12 lg:px-20 xl:px-32 py-16">
        <div className="grid md:grid-cols-2 gap-8 w-full">
          {/* Join Session Card */}
          <Card className="group cursor-pointer overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
            <CardContent className="p-0">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
                  alt="Join Session"
                  className="w-full h-full object-none group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold mb-2">Join Session</h3>
                  <p className="text-blue-100 mb-4">Discover amazing sessions from industry experts</p>
                  <Button variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold">
                    Explore Sessions <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Host Session Card */}
          <Card className="group cursor-pointer overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
            <CardContent className="p-0">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
                  alt="Host Session"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold mb-2">Host Session</h3>
                  <p className="text-purple-100 mb-4">Share your expertise with the community</p>
                  <Button variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold">
                    Start Hosting <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section className="w-full px-8 md:px-12 lg:px-20 xl:px-32 py-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
            <TrendingUp className="h-6 w-6 mr-2 text-purple-600" />
            Trending Topics
          </h2>
          <p className="text-gray-600">Explore popular session topics</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 w-full">
          {trendingTags.map((tag, index) => (
            <Badge
              key={index}
              variant="outline"
              className="px-4 py-2 text-sm cursor-pointer border-purple-200 text-purple-700 hover:bg-purple-100 hover:border-purple-300 transition-all duration-200 hover:scale-105"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </section>
      </>
    
  )
}

export default ActionCards