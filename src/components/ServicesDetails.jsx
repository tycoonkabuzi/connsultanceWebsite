import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import image1 from "../assets/businessExpension.jpg";
import image2 from "../assets/internationalSale.jpg";
import image3 from "../assets/revenueGrowth.jpg";
import image4 from "../assets/pexels-mikhail-nilov-6893955.jpg";
import image5 from "../assets/teamCollaborating.jpg";
import image6 from "../assets/analysingReports.jpg";

const ServicesDetails = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const ServiceBlock = ({ title, description, list, img, reverse }) => (
    <div className="row align-items-center my-5">
      {/* Image Section */}
      <div
        className={`col-lg-6 ${reverse ? "order-lg-2" : ""}`}
        data-aos={reverse ? "fade-left" : "fade-right"}
      >
        <img
          src={img}
          alt={title}
          className="img-fluid rounded-4 shadow-sm w-100"
          style={{
            maxHeight: "350px",
            objectFit: "cover",
            borderRadius: "1rem",
          }}
        />
      </div>

      {/* Text Section */}
      <div
        className={`col-lg-6 mt-4 mt-lg-0 ${reverse ? "order-lg-1" : ""}`}
        data-aos={reverse ? "fade-right" : "fade-left"}
      >
        <h2
          className="fw-bold mb-3"
          style={{ color: "#46c0a0" }} // ✅ Custom title color
        >
          {title}
        </h2>
        <p className="text-secondary">{description}</p>
        {list && (
          <ul className="list-group list-group-flush mt-3">
            {list.map((item, idx) => (
              <li key={idx} className="list-group-item">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );

  return (
    <section className="container py-5 main-service-details">
      <ServiceBlock
        img={image1}
        title="Market Expansion & Product Launch"
        description="Expanding into new markets is more than just shipping a product — it’s about understanding demand, positioning your offer correctly, and building scalable entry points. At GGS, we guide your product or service into emerging regions like Africa or the Middle East with a structured and strategic launch approach."
        list={[
          "Market opportunity analysis & entry strategy",
          "Go-to-market planning and execution",
          "Product/service localization and messaging",
          "Sales channel & distributor identification",
          "Pre-launch, pilot, and full-scale rollout support",
        ]}
      />

      <ServiceBlock
        img={image2}
        reverse
        title="International Sales Representation"
        description="If you’re ready to sell internationally but lack a local team or on-the-ground expertise, GGS becomes your extended sales force. We act as your representative in foreign markets — engaging buyers, managing meetings, and building trust with stakeholders."
        list={[
          "B2B lead generation and outreach",
          "Sales presentations and negotiation support",
          "Distributor or client relationship management",
          "Local market intelligence feedback",
          "Meeting representation (physical/virtual)",
        ]}
      />

      <ServiceBlock
        img={image3}
        title="Revenue Growth Consulting"
        description="Growing revenue in a complex business environment requires more than working harder — it requires working smarter. GGS helps companies unlock new sources of growth through commercial strategy, pricing optimization, and performance systems."
        list={[
          "Commercial strategy development",
          "Sales funnel and process optimization",
          "CRM systems and reporting setup",
          "Growth-focused team advisory",
          "Pricing, margin, and KPI dashboard analysis",
        ]}
      />

      <ServiceBlock
        img={image4}
        reverse
        title="Global Business Consulting"
        description="International expansion can be filled with legal, operational, and cultural challenges — unless you have the right partner. Our consulting services give you the roadmap and support to expand confidently into new markets."
        list={[
          "International business structuring",
          "Market entry compliance & legal support",
          "Import-export and trade facilitation",
          "Partner/distributor due diligence",
          "International risk & governance advisory",
        ]}
      />

      <ServiceBlock
        img={image5}
        title="Digital Growth Services"
        description="Your digital presence should be your top-performing sales channel. GGS optimizes your digital infrastructure, guides your digital transformation, and helps you innovate with smart systems that drive growth."
        list={[
          "Website and UX audits",
          "SEO and traffic strategy",
          "Automation and workflow design",
          "Digital maturity audit",
          "Innovation strategy design",
        ]}
      />

      <ServiceBlock
        img={image6}
        reverse
        title="Market Intelligence & Strategic Advisory"
        description="Business decisions made without market context are expensive guesses. GGS delivers deep, localized intelligence to support your critical moves and minimize risk in every new market you enter."
        list={[
          "In-depth market & competitor analysis",
          "Buyer behavior research and persona development",
          "Feasibility and financial modeling",
          "Local ecosystem and supply chain mapping",
          "Regulatory and compliance overviews",
        ]}
      />
    </section>
  );
};

export default ServicesDetails;
