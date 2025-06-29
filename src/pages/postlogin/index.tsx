
import React from 'react'
import Navbar from '@/components/navigation/index'
import HeroSection from '@/components/postlogincomponents/HeroSection'
import VisualGridSection from '@/components/postlogincomponents/VisualGridSection'
import TopStartupsSection from '@/components/postlogincomponents/TopStartupSection'
import Footer from '@/components/postlogincomponents/footer'
import StatsSection from '@/components/postlogincomponents/Stat-Card'
const PostLoginPage: React.FC = () => {
  return (<>
   
      <Navbar />
      <HeroSection />
       <StatsSection />
      <VisualGridSection />
      <TopStartupsSection />

  {/* //aur host session oage pe ek image kaissue hia mai badme kr dunga  */}

     {/* //ankit bhai ekbar check kr na // footer ko gap pd rha boht // smj nhi aa rha hai meko boht try kiya */}
      <Footer />
 </>
  )
}

export default PostLoginPage