import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SecondaryPagesHeader from "../components/SecondaryPagesHeader";
import { useLanguage } from "../context/LanguageProvider";
import background from "../assets/car2.jpg";

// ✅ Import related images
import image1 from "../assets/car3.jpg";
import image2 from "../assets/car3.jpg";
import image3 from "../assets/car3.jpg";
import image4 from "../assets/car3.jpg";
import image5 from "../assets/car3.jpg";
import image6 from "../assets/car3.jpg";
import image7 from "../assets/car3.jpg";
const PublicSector = () => {
  const { language, translation } = useLanguage();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    {
      title: "Foreign Direct Investment (FDI) Facilitation",
      description:
        "We help governments attract, activate, and retain high-value international investors. Through tailored national strategies and sector opportunity mapping, we build pipelines that convert foreign interest into real economic outcomes — jobs, capital, and infrastructure. Our FDI work ensures that investment is not just encouraged, but effectively delivered and sustained.",
      points: [
        "Design national or regional FDI attraction strategies",
        "Map high-potential sectors and project pipelines",
        "Lead global investor outreach and engagement campaigns",
        "Build tailored investor pitch materials",
        "Support investor onboarding and aftercare",
      ],
      image: image1,
    },
    {
      title: "Trade Promotion & Export Development",
      description:
        "We help countries scale their export industries and connect to international buyers. Our approach blends strategy, direct matchmaking, and global outreach to empower local enterprises and expand national trade footprints. Whether it’s developing national export programs or hosting international trade delegations, we position countries to compete globally.",
      points: [
        "Design national or sector-based export strategies",
        "Organize B2B trade missions and international delegations",
        "Connect local exporters with international buyers",
        "Promote key industries at expos and trade shows",
        "Train trade ministries and export development agencies",
      ],
      image: image2,
    },
    {
      title: "Public–Private Partnership (PPP) Development",
      description:
        "We support governments in designing, structuring, and implementing PPP frameworks to deliver strategic infrastructure and services. GGS provides advisory throughout the full PPP lifecycle — ensuring legal clarity, risk-sharing balance, and project bankability. Our work helps public institutions unlock private sector capital while maintaining development impact.",
      points: [
        "Identify and evaluate PPP-ready sectors and projects",
        "Structure legal, financial, and technical PPP frameworks",
        "Attract qualified private investors and consortia",
        "Support negotiation and risk allocation",
        "Monitor implementation and contract compliance",
      ],
      image: image3,
    },
    {
      title: "Country Branding & National Positioning",
      description:
        "We help governments craft a compelling national image that attracts trade, investment, tourism, and international respect. From visual branding to global campaigns, we position countries as trustworthy, competitive, and forward-thinking destinations.",
      points: [
        "Develop national branding strategies and positioning",
        "Design investor and diplomatic brand materials",
        "Coordinate presence at summits, forums, and expos",
        "Align ministries and stakeholders around one national message",
        "Support public diplomacy, media relations, and global visibility",
      ],
      image: image4,
    },
    {
      title: "Public Sector Innovation & Policy Advisory",
      description:
        "We help public institutions innovate, modernize, and reform. Whether it's drafting economic policy or enabling e-governance, our advisory services guide governments to be more agile, effective, and people-focused. From concept to reform, we support lasting transformation.",
      points: [
        "Policy research, drafting, and stakeholder consultation",
        "Innovation and digital transformation roadmaps",
        "Public service reform and modernization strategies",
        "Impact measurement and evaluation frameworks",
        "Leadership training and institutional capacity building",
      ],
      image: image5,
    },
    {
      title: "Digital Public Services & E-Government Solutions",
      description:
        "We support governments in digitizing their services, improving access, and increasing transparency. Whether through digital ID, e-permitting, or citizen feedback platforms, our solutions reduce bureaucracy and foster trust in government institutions.",
      points: [
        "Assess and design digital transformation strategies",
        "Develop citizen-centered digital public services",
        "Support integration of e-governance tools and platforms",
        "Build inter-ministerial coordination and data systems",
        "Train public servants in digital service delivery",
      ],
      image: image6,
    },
    {
      title: "Investment Promotion Strategy & Reform Advisory",
      description:
        "We advise investment promotion agencies (IPAs), economic development boards, and ministries on how to improve their performance, positioning, and results. Our team designs investment attraction strategies while guiding institutional reforms that strengthen service delivery and long-term competitiveness.",
      points: [
        "Design national and sector-level investment strategies",
        "Reform and modernize IPA operating models",
        "Train IPA staff in investor servicing and targeting",
        "Support development of policy incentives and legal frameworks",
        "Benchmark against global best practices",
      ],
      image: image7,
    },
  ];

  return (
    <>
      <div className="container py-5">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="row align-items-center mb-5"
            data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
          >
            {/* Image */}
            <div className={`col-lg-6 ${idx % 2 !== 0 ? "order-lg-2" : ""}`}>
              <img
                src={service.image}
                alt={service.title}
                className="img-fluid rounded-4 shadow-sm w-100"
                style={{
                  maxHeight: "350px",
                  objectFit: "cover",
                  borderRadius: "1rem",
                }}
              />
            </div>

            {/* Text */}
            <div
              className={`col-lg-6 mt-4 mt-lg-0 ${
                idx % 2 !== 0 ? "order-lg-1" : ""
              }`}
            >
              <h2 className="fw-bold mb-3" style={{ color: "#46c0a0" }}>
                {service.title}
              </h2>
              <p className="text-secondary">{service.description}</p>
              <ul className="list-unstyled mt-3">
                {service.points.map((point, i) => (
                  <li key={i} className="d-flex align-items-start mb-2">
                    <span
                      style={{
                        color: "#46c0a0",
                        fontWeight: "bold",
                        marginRight: "8px",
                      }}
                    >
                      •
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PublicSector;
