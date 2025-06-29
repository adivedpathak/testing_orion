
import HeroSection from '@/components/host-session-components/HeroSection';
import ActionCards from '@/components/host-session-components/ActionCards';
import Navigation from '@/components/navigation'
import FeaturedSessions from '@/components/host-session-components/FeaturesSessions';
import Calltoaction from '@/components/host-session-components/Calltoaction';




const HostSessionPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <Navigation />
      <HeroSection />
      <ActionCards />
      <FeaturedSessions />
      <Calltoaction />
    </div>
  );
};


export default HostSessionPage;