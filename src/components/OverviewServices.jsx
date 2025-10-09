import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OverviewServices = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="container py-5 main-overview-services">
      <div className="row justify-content-center text-center">
        <div className="col-lg-8 col-md-10" data-aos="fade-up">
          <h1 className="fw-bold mb-4 display-5 " style={{ color: "#46c0a0" }}>
            The GGS Global
          </h1>
          <p className="lead text-secondary lh-lg">
            The <strong>GGS Global Team</strong> — At GGS (Global Growth
            Solutions), we specialize in tailored solutions that support your
            business or franchise in achieving sustainable global expansion.
            From international readiness evaluations to on-the-ground market
            insights and strategic consulting, GGS provides all the essential
            components for a smooth and successful journey into global markets.
          </p>
          <p
            className="fs-5 fw-semibold text-dark mt-4"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            Explore below to learn more about the specific services we offer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OverviewServices;
