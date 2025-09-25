import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SecondaryPagesHeader from "../components/SecondaryPagesHeader";
import { useLanguage } from "../context/LanguageProvider";

import firstClient from "../assets/firstClient.jpg";
import secondClient from "../assets/secondClient.jpg";
import thirdClient from "../assets/thirdClient.jpg";
import fourthClient from "../assets/fourthClient.png";
import fithClient from "../assets/fourthClient.png";

import background from "../assets/car2.jpg";

const Clients = () => {
  const { language, translation } = useLanguage();

  const clientLogos = [
    {
      id: 1,
      name: "Customer Services Solution Hub",
      src: firstClient,
      alt: "Customer Services Solution Hub",
    },
    { id: 2, name: "Amazon", src: fithClient, alt: "Amazon logo" },
    { id: 3, name: "Microsoft", src: secondClient, alt: "Microsoft logo" },
    { id: 4, name: "", src: thirdClient, alt: "Spotify logo" },
    { id: 5, name: "Netflix", src: fourthClient, alt: "Netflix logo" },
  ];

  const testimonials = [
    {
      id: 1,
      text: "Working with this team has been a game-changer for our business.",
      author: "Aksanti, Waza",
    },
    {
      id: 2,
      text: "Professional, creative, and always delivering on time.",
      author: "John Smith",
    },
  ];

  return (
    <>
      <NavBar />
      <SecondaryPagesHeader
        title={translation[language].titleClient}
        paragraph={translation[language].paragraphClient}
        background={background}
      />

      <div className="clients-page">
        {/* Hero Section */}
        <section className="clients-hero">
          <h1>Sectors, Clients & Markets We Serve</h1>
          <p>
            At Global Growth Solutions (GGS), we operate at the intersection of
            innovation, international expansion, and strategic transformation.
            Our clients range from startups and mid-sized companies to public
            institutions and foreign investors.
          </p>
          <p>
            Whether launching new products, expanding into Africa, or driving
            reforms in public institutions — we bring the tools, talent, and
            market knowledge to succeed.
          </p>
        </section>

        {/* Who We Work With */}
        <section className="clients-section">
          <h2>Who We Work With</h2>
          <ul>
            <li>Private Companies expanding abroad or launching new markets</li>
            <li>
              Public Institutions seeking investment, modernization, or policy
              reform
            </li>
            <li>Startups & SMEs ready to scale across borders</li>
            <li>
              Foreign Investors & Development Agencies seeking local insights
              and implementation
            </li>
            <li>
              Governments aiming to attract FDI, build PPPs, and digitize
              services
            </li>
            <li>
              Economic Zones & Investment Promotion Agencies needing
              international exposure and structuring
            </li>
          </ul>
        </section>

        {/* Sectors */}
        <section className="clients-section">
          <h2>Sectors We Focus On</h2>
          <h3>Private Sector Clients</h3>
          <ul>
            <li>
              Automotive & Mobility (dealers, services, electric vehicle infra)
            </li>
            <li>Healthcare & Wellness (clinics, med-tech, telehealth)</li>
            <li>Education & E-Learning (STEM, tech, early childhood)</li>
            <li>Retail & Consumer Goods (FMCG, lifestyle, electronics)</li>
            <li>Food & Beverage (QSR, local chains, health foods)</li>
            <li>Construction & Real Estate (smart cities, prefabs)</li>
            <li>ICT & Digital Services (software, e-commerce, cloud)</li>
            <li>CleanTech & Energy (solar, waste, water solutions)</li>
            <li>Agribusiness & Food Processing</li>
            <li>Logistics & Transport</li>
            <li>Beauty, Fitness & Franchising</li>
          </ul>

          <h3>Public Sector & National Development</h3>
          <ul>
            <li>Trade & Export Development</li>
            <li>FDI & Investment Promotion</li>
            <li>Public–Private Partnerships (PPP)</li>
            <li>Digital Public Services / E-Government</li>
            <li>Infrastructure Modernization</li>
            <li>Tourism & Country Branding</li>
            <li>Local Industry Development & Job Creation</li>
            <li>Innovation Policy & Capacity Building</li>
          </ul>
        </section>

        {/* Regions */}
        <section className="clients-section">
          <h2>Regions & Countries of Focus</h2>
          <p>
            We help companies and governments build bridges between Africa, the
            Middle East, and Europe, identifying high-impact markets for trade,
            investment, innovation, and transformation.
          </p>
          <h3>Africa – Frontier & Rising Economies</h3>
          <ul>
            <li>Nigeria: Manufacturing, Energy, FMCG, HealthTech</li>
            <li>South Africa: Investment, Smart Cities, Automotive</li>
            <li>Kenya: Digital Economy, Agriculture, Fintech</li>
            <li>Ghana: PPPs, Agribusiness, Diaspora Investment</li>
            <li>Côte d'Ivoire: Infrastructure, Food Processing</li>
            <li>Ethiopia: Industrial Parks, Aviation, Manufacturing</li>
            <li>Rwanda: Innovation Hubs, E-Government, Tourism</li>
            <li>Morocco: Export Zones, Renewable Energy</li>
            <li>Uganda: Health, Digital Payments, Agro-Industrial Parks</li>
            <li>Tanzania: Blue Economy, Tourism, Logistics</li>
            <li>Egypt: Trade Zones, Youth Employment, E-services</li>
            <li>Burkina Faso: Investment Reform, Energy Access</li>
            <li>Benin: Port Development, Agro-Economy</li>
            <li>DR Congo: Mining, Infrastructure, Private Sector Building</li>
            <li>Senegal: Smart Cities, Transport, National Branding</li>
            <li>Zambia: Industrial Parks, Healthcare Infrastructure</li>
          </ul>
          <p>
            📌 Other target countries: Namibia, Botswana, Togo, Sierra Leone,
            Malawi, Mozambique.
          </p>
        </section>

        {/* Logos Section */}
        <section className="clients-logos">
          {clientLogos.map((client) => (
            <div key={client.id} className="logo-card">
              <img src={client.src} alt={client.alt} />
              <span>{client.name}</span>
            </div>
          ))}
        </section>

        {/* Testimonials */}
        <section className="clients-testimonials">
          <h2>What Our Clients Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <div key={t.id} className="testimonial-card">
                <p>“{t.text}”</p>
                <span>- {t.author}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Clients;
