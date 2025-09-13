import { useEffect, useState } from "react";
import video from "../assets/1851190-uhd_3840_2160_25fps.mp4";

import logo from "../assets/Logo PNG_Plan de travail 1 copie.png";
const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "",
    hours: "",
    minutes: "",
    seconds: "",
  });

  const countDown = () => {
    const targetDate = new Date("2025-09-22").getTime();
    const todayDate = Date.now();
    const difference = targetDate - todayDate;
    setTimeLeft({
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    });
  };

  useEffect(() => {
    countDown();
    const timer = setInterval(countDown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="main-coming-soon">
      <video autoPlay loop muted playsInline className="video-bg">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="content">
        <div className="container-image">
          <img src={logo} />
        </div>
        <h1>Website coming soon </h1>
        <p>We’re launching something exciting!</p>

        <div className="countdown">
          <div className="countdown-item">
            <p className="countdown-number">{timeLeft.days}</p>
            <p className="countdown-label">Days</p>
          </div>

          <div className="countdown-item">
            <p className="countdown-number">{timeLeft.hours}</p>
            <p className="countdown-label">Hours</p>
          </div>

          <div className="countdown-item">
            <p className="countdown-number">{timeLeft.minutes}</p>
            <p className="countdown-label">Minutes</p>
          </div>
          <div className="countdown-item">
            <p className="countdown-number">{timeLeft.seconds}</p>
            <p className="countdown-label">Seconds</p>
          </div>
        </div>
        <footer> &copy; Global Growth Solutions</footer>
      </div>
    </div>
  );
};
export default ComingSoon;
