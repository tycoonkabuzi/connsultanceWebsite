import { Mail, Phone, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser"; // ✅ add EmailJS
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SecondaryPagesHeader from "../components/SecondaryPagesHeader";
import { useLanguage } from "../context/LanguageProvider";
import background from "../assets/car1.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    document.title = "Contact";
  }, []); // runs once when the component mounts

  const { language, translation } = useLanguage();
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus("");

    emailjs
      .send(
        "service_5k366w9", // ✅ your Zoho Service ID from EmailJS
        "template_r9botvc", // ✅ replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "info@globalgrowthsolutions.org", // ✅ goes to your inbox
          reply_to: formData.email, // ensures Reply button goes to sender
        },
        "-Ll9ex00IvhWBATsp" // ✅ replace with your EmailJS public key
      )
      .then(() => {
        setFormData({ name: "", email: "", message: "" });
        setStatus("✅ Message sent successfully!");
      })
      .catch(() => {
        setStatus("❌ Failed to send message. Please try again later.");
      })
      .finally(() => setSending(false));
  };

  return (
    <>
      <NavBar />
      <SecondaryPagesHeader
        title={translation[language].titleContact}
        paragraph={translation[language].paragraphContact}
        background={background}
      />
      <div className="contact-container">
        {/* Left: Info */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Have questions or ideas? Reach out and let’s create something
            amazing together.
          </p>

          <div className="info-item">
            <MapPin size={20} />
            <span>Kraków, Poland</span>
          </div>
          <div className="info-item">
            <Phone size={20} />
            <span>+48 794120123</span>
          </div>
          <div className="info-item">
            <Mail size={20} />
            <span>info@globalgrowthsolutions.org</span>
          </div>
        </div>

        {/* Right: Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send a Message</h2>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn-submit" disabled={sending}>
            {sending ? "Sending..." : "Send"}
          </button>

          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
