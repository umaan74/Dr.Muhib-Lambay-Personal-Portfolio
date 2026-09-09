import { lazy, PropsWithChildren, Suspense, useEffect } from "react";
import About from "./About";
import Achievements from "./Achievements";
import Career from "./Career";
import Certifications from "./Certifications";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Education from "./Education";
import Expertise from "./Expertise";
import Landing from "./Landing";
import Navbar from "./Navbar";
import ProfessionalActivities from "./ProfessionalActivities";
import Work from "./Work";
import setSplitText from "./utils/splitText";

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="container-main" id="main-content">
            <Landing>{children}</Landing>
            <About />
            <Expertise />
            <Suspense fallback={<div style={{ color: "#00e5ff", textAlign: "center", padding: "40px" }}>Loading Technical Skills...</div>}>
              <TechStack />
            </Suspense>
            <Career />
            <Work />
            <Achievements />
            <Certifications />
            <ProfessionalActivities />
            <Education />
            <Contact />
          </main>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
