import { useEffect, useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";
import { portfolioData } from "../data/portfolioData";

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (percent >= 100) {
      const t1 = setTimeout(() => {
        setFadeOut(true);
        const t2 = setTimeout(() => {
          setIsLoading(false);
        }, 450);
        return () => clearTimeout(t2);
      }, 200);
      return () => clearTimeout(t1);
    }
  }, [percent, setIsLoading]);

  return (
    <div className={`academic-loader-screen ${fadeOut ? "loader-fade-out" : ""}`}>
      <div className="loader-box">
        <div className="loader-badge">{portfolioData.personal.initials}</div>
        <h1 className="loader-name">{portfolioData.personal.name}</h1>
        <p className="loader-degrees">{portfolioData.personal.degrees}</p>
        <p className="loader-affil">{portfolioData.personal.college}</p>

        <div className="loader-progress-track">
          <div 
            className="loader-progress-bar"
            style={{ width: `${Math.min(100, Math.max(0, percent))}%` }}
          ></div>
        </div>

        <div className="loader-status-text">
          <span>INITIALIZING ACADEMIC REPOSITORY</span>
          <span className="loader-percent">{percent}%</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
