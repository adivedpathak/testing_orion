
import HeroSection from '@/components/online-session-components/HeroSection';
import ActionCards from '@/components/online-session-components/ActionCards';
import Navigation from '@/components/navigation'
import FeaturedSessions from '@/components/online-session-components/FeaturesSessions';
// import Calltoaction from '@/components/online-session-components/Calltoaction';
import Footer from '@/components/postlogincomponents/footer';


import SessionCard from '@/components/online-session-components/sessionCard';

const OnlineSessionPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <Navigation />
      <HeroSection />
       <SessionCard />
      <ActionCards />
     
      <FeaturedSessions />
      <Footer />
    </div>
  );
};


export default OnlineSessionPage;