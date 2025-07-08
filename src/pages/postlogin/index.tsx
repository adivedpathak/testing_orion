
import React from 'react'
import Navbar from '@/components/navigation/index'
import HeroSection from '@/components/postlogincomponents/HeroSection'
// import VisualGridSection from '@/components/postlogincomponents/VisualGridSection'
import TopStartupsSection from '@/components/postlogincomponents/TopStartupSection'
import Footer from '@/components/postlogincomponents/footer'
// import FAQComponent from '@/components/postlogincomponents/GetFuded'
// import StatsSection from '@/components/postlogincomponents/Stat-Card'
const PostLoginPage: React.FC = () => {
  return (<>
   
      <Navbar />
      <HeroSection />
       {/* <StatsSection /> */}
      {/* <VisualGridSection /> latet updates section */}
      <TopStartupsSection />
{/* <FAQComponent /> */}

      <Footer />
 </>
  )
}

export default PostLoginPage