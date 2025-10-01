import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Network = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="main-network">
      <div className="network-box" data-aos="fade-up">
        <h2>Network</h2>
        <p>
          Our in-country network of proven and trusted associates covering more
          than 30 countries gives your company the best chance for success.
        </p>
      </div>
    </div>
  );
};

export default Network;
