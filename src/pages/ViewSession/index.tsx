import Navigation from '@/components/navigation'
import Footer from '@/components/postlogincomponents/footer'
import HeroSlider from '@/components/ViewSessionComponents/HeroSlider'
import SessionsSection from '@/components/ViewSessionComponents/SessionSection'

function ViewSession() {
  return (
 <div className="min-h-screen bg-white">
  <Navigation />
   
      <HeroSlider />
      <SessionsSection />
      <Footer />
    </div>
  )
}

export default ViewSession