import HomePage from "./MyntraJsx/HomePage";
import KidsSection from "./MyntraJsx/KidsSection";
import MenSection from "./MyntraJsx/MenSection";
import ToysSection from "./MyntraJsx/ToysSection";
import WomensSection from "./MyntraJsx/WomensSection";

export default function App() {
  return (
    <div>
      <HomePage />
      <MenSection />
      <WomensSection />
      <ToysSection />
      <KidsSection />
    </div>
  );
}
