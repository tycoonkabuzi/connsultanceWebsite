import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import imageStep from "../assets/pexels-cottonbro-5378700.jpg";

const Steps = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  return (
    <div className="main-steps">
      {/* Step 1 */}
      <div className="main-left" data-aos="fade-right">
        <div className="container-image-steps">
          <img src={imageStep} alt="Step 1 illustration" />
        </div>
      </div>

      <div className="main-right" data-aos="fade-left">
        <h1>
          Step 1 – GlobalAssess™ – Assessment of International Potential and
          Readiness
        </h1>
        <ul>
          <li>
            Assess internal systems, staff, training, support, Intranet and
            marketing programs
          </li>
          <li>
            Develop a 10-year international operations and development projected
            budget
          </li>
          <li>
            Identify and prioritize the best countries for the client through
            EGS GlobalTeam™ testing and GlobalSurvey™
          </li>
          <li>
            Create international slide presentations from client internal slides
          </li>
          <li>
            Develop a profile of the optimal Licensee and license terms –
            GlobalProfile™
          </li>
        </ul>
      </div>

      {/* Step 2 – Floating Card */}
      <div className="bottom-text-steps" data-aos="fade-up">
        <div className="box-text-steps floating-card">
          <h1>Step 2 – Create International Business Plan</h1>
          <ul>
            <li>
              Assist with applying for trademarks for high-potential countries
            </li>
            <li>Define the development model that works best for client</li>
            <li>
              Develop steps to acquire the client international license document
            </li>
            <li>
              Create/modify materials to present client operations, training,
              support, marketing as differentiators
            </li>
            <li>
              Develop a country pro forma unit, licensee and franchisor
              financial and development model – LicensePro™
            </li>
            <li>
              Identify legal agreements and franchise regulations for priority
              countries
            </li>
          </ul>
        </div>
      </div>

      {/* Step 3 + Image */}
      <div className="step3-with-image" data-aos="fade-up">
        <div className="main-right" data-aos="fade-left">
          <h1>Step 3 – Implement the International Plan</h1>
          <ul>
            <li>
              Assess internal systems, staff, training, support, Intranet and
              marketing programs
            </li>
            <li>
              Develop a 10-year international operations and development
              projected budget
            </li>
            <li>
              Identify and prioritize the best countries for the client through
              EGS GlobalTeam™ testing and GlobalSurvey™
            </li>
            <li>
              Create international slide presentations from client internal
              slides
            </li>
            <li>
              Develop a profile of the optimal Licensee and license terms –
              GlobalProfile™
            </li>
          </ul>
        </div>

        <div className="second-part" data-aos="fade-right">
          <div className="second">
            <img src={imageStep} alt="Step 3 illustration" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
