import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import imageStep from "../assets/checklist.jpg";
import imageStep2 from "../assets/strategy.jpg";

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
        <h2>Step 1 – GlobalLaunch™: Assessment of Readiness & Opportunity</h2>

        <ul>
          <li>
            Assess operational readiness for international expansion (internal
            systems, team, support, marketing)
          </li>
          <li>Conduct a Brand Positioning & Differentiation Audit</li>
          <li>
            Define your Global Advantage — what makes your offering viable
            across borders
          </li>
          <li>Develop your Ideal Market Entry Profile (GlobalFit™)</li>
          <li>
            Create a strategic international presentation tailored for investors
            or partners
          </li>
          <li>
            Identify and prioritize high-potential countries through
            on-the-ground research and testing (GeoScan™)
          </li>
          <li>
            Build a 10-year international development budget and ROI forecast
          </li>
        </ul>
      </div>

      {/* Step 2 – Floating Card */}
      <div className="bottom-text-steps" data-aos="fade-up">
        <div className="box-text-steps floating-card">
          <h2>
            Step 2 – StrategyBuild™: Create the International Business Plan
          </h2>
          <ul>
            <li>Assist in trademark and IP preparation for target countries</li>
            <li>
              Define the best entry model: direct, representation, licensing,
              partnerships, or PPP
            </li>
            <li>
              Build a go-to-market roadmap including branding, onboarding, and
              operations
            </li>
            <li>
              Structure unit economics and country-level projections
              (MarketCanvas™)
            </li>
            <li>
              Develop international training, operations, and marketing
              materials
            </li>
            <li>Conduct legal landscape mapping and regulatory review</li>
            <li>
              Design tailored investor/licensee offers and support packages
            </li>
          </ul>
        </div>
      </div>

      {/* Step 3 + Image */}
      <div className="step3-with-image" data-aos="fade-up">
        <div className="main-right" data-aos="fade-left">
          <h2>Step 3 – Execute360™: Implementation & Market Penetration</h2>
          <ul>
            <li>
              Represent your offer at international expos, summits, and
              strategic events
            </li>
            <li>
              Qualify leads and negotiate partnerships, representation, or
              licensing deals
            </li>
            <li>
              Support contract drafting, negotiations, and regulatory alignment
            </li>
            <li>
              Provide progress dashboards, reporting, and campaign tracking
            </li>
            <li>
              Adjust priorities and markets based on live feedback and
              opportunities
            </li>
            <li>
              Act as your outsourced international development team or advisor
            </li>
            <li>Deliver quarterly strategy reviews with GGS management</li>
          </ul>
        </div>

        <div className="second-part" data-aos="fade-right">
          <div className="second">
            <img src={imageStep2} alt="Step 3 illustration" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
