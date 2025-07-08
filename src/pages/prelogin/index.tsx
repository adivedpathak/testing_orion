import ExploreSection from '@/components/explore-section'
import HeroSection from '@/components/hero-section'
import HostSessionsSection from '@/components/host-sessions-section'
import Navigation from '@/components/navigation'
import Footer from '@/components/postlogincomponents/footer'
import FAQComponent from '@/components/postlogincomponents/GetFuded'
import ShareNeedsSection from '@/components/share-needs-section'


const Prelogin
 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <main>
        <HeroSection />
        <ShareNeedsSection />
        
        <ExploreSection />
        <HostSessionsSection />
        <FAQComponent />
        <Footer />
      </main>
    </div>
  )
}

export default Prelogin
