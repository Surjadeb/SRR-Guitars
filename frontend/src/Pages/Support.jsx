
import React, { useRef, useState, useEffect } from "react";
import './CSS/Support.css'
import emailjs from "@emailjs/browser";

const Support = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");
  const [searchQuery, setSearchQuery] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [activeAccordions, setActiveAccordions] = useState({});

  useEffect(() => {
    // Initialize EmailJS with your actual Public Key
    emailjs.init("Bal7Vf8GCZyDQlmtN");
  }, []);



  const toggleAccordion = (id) => {
    setActiveAccordions(prev => ({ ...prev, [id]: !prev[id] }));
  };


  const handleSearch = () => {
    // In a real app, filter data based on searchQuery
    console.log('Searching for:', searchQuery);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent. We\'ll respond within 24 hours.');
    const emailValue = formRef.current.user_email.value;
    emailjs
      .sendForm(
        "service_59i0bu7",
        "template_qbo5y6v",
        formRef.current,
        "Bal7Vf8GCZyDQlmtN"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setStatus("SUCCESS: Email sent");
          formRef.current.reset();
        },
        (error) => {
          console.log("FULL ERROR:", JSON.stringify(error, null, 2));
          console.error("RAW ERROR:", error);
          setStatus("ERROR: " + (error?.text || "Unknown error"));
        }
      );


  };

  return (
    <div style={{
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      margin: 0,
      padding: 0,
      background: "linear-gradient(135deg, #020202ff 0%, #3f1668ff 100%)",
      // color: "#333",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      animation: "fadeIn 1s ease-in"
    }}>


      <div className="container">
        <div className="sticky-header">
          <h1>Support Center</h1>
          <p className="intro">Welcome to SRR GUITARS support page. From  electric to many more kinds, find answers to your guitar buying, maintenance, and shipping questions below.</p>
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search FAQs, troubleshooting, or resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        <div className="section">
          <h2>Frequently Asked Questions (FAQs)</h2>
          <ul className="accordion">
            <li>
              <button onClick={() => toggleAccordion('faq1')}>How do I choose the right guitar?</button>
              <div className={`content ${activeAccordions.faq1 ? 'show' : ''}`}>Consider your playing style—acoustic for folk, electric for rock. Check our <a href="https://www.youtube.com/watch?v=m5svhFCEF98">Guitar Buying Guide</a> for tips.</div>
            </li>
            <li>
              <button onClick={() => toggleAccordion('faq2')}>What are your shipping times?</button>
              <div className={`content ${activeAccordions.faq2 ? 'show' : ''}`}>Orders ship within 1-2 business days. Standard delivery takes 3-7 days; expedited options available.</div>
            </li>
            <li>
              <button onClick={() => toggleAccordion('faq3')}>What's your return policy?</button>
              <div className={`content ${activeAccordions.faq3 ? 'show' : ''}`}>Returns accepted within 30 days if unused. Contact us for a return label and full refund.</div>
            </li>
            <li>
              <button onClick={() => toggleAccordion('faq4')}>Do you offer guitar repairs or maintenance?</button>
              <div className={`content ${activeAccordions.faq4 ? 'show' : ''}`}>We provide basic setup services. For repairs, visit our <a href="/services">Repair Center</a>.</div>
            </li>
            <li>
              <button onClick={() => toggleAccordion('faq5')}>How do I track my order?</button>
              <div className={`content ${activeAccordions.faq5 ? 'show' : ''}`}>You'll receive a tracking number via email once shipped. Log in to your account to view status.</div>
            </li>
          </ul>
        </div>

        <div className="section">
          <h2>Troubleshooting</h2>
          <p>Common issues and fixes for your guitar purchases:</p>
          <ul className="accordion">
            <li>
              <button onClick={() => toggleAccordion('troub1')}>Guitar not arriving</button>
              <div className={`content ${activeAccordions.troub1 ? 'show' : ''}`}>Check your order status in your account. Contact us if delayed beyond 10 days.</div>
            </li>
            <li>
              <button onClick={() => toggleAccordion('troub2')}>Damaged item on arrival</button>
              <div className={`content ${activeAccordions.troub2 ? 'show' : ''}`}>Take photos and email us within 48 hours for a replacement or refund.</div>
            </li>
            <li>
              <button onClick={() => toggleAccordion('troub3')}>Website login issues</button>
              <div className={`content ${activeAccordions.troub3 ? 'show' : ''}`}>Clear cookies or reset your password. Ensure your browser is updated.</div>
            </li>
            <li>
              <button onClick={() => toggleAccordion('troub4')}>Payment not processing</button>
              <div className={`content ${activeAccordions.troub4 ? 'show' : ''}`}>Try a different card or contact your bank. We accept major credit cards and PayPal.</div>
            </li>
            <li>
              <button onClick={() => toggleAccordion('troub5')}>Guitar setup questions</button>
              <div className={`content ${activeAccordions.troub5 ? 'show' : ''}`}>Watch our <a href="https://www.youtube.com/watch?v=jtSHeLP2D3k">setup videos</a> or bring it to a local shop for tuning.</div>
            </li>
          </ul>
        </div>

        <div className="section">
          <h2>Resources</h2>
          <ul>
            <li><a href="https://www.youtube.com/watch?v=m5svhFCEF98">Guitar Buying Guide</a> - Learn about types, brands, and features.</li>
            <li><a href="https://www.youtube.com/watch?v=pDvLvGE6wY0">Guitar Care & Maintenance</a> - Tips for cleaning, storing, and tuning.</li>
            <li><a href="https://www.youtube.com/watch?v=RY3AvEGKfZ0">Tutorial Videos</a> - Watch demos on playing techniques and repairs.</li>
            <li><a href="https://forums.prsguitars.com/">Guitar Community Forum</a> - Connect with other players and share advice.</li>
          </ul>
        </div>

        <div className="section contact-form">
          <h2>Contact Us</h2>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />
            <label htmlFor="user_email"></label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              placeholder="you@example.com"
              required />
            <input type="text" name="subject" placeholder="Subject (e.g., Order Issue)" />
            <textarea name="message" rows="5" placeholder="Describe your issue or question..." required></textarea>
            <button type="submit">Send Message</button>

          </form>
          {status && (
            <p
              style={{
                marginTop: "1rem",
                color: status.startsWith("SUCCESS") ? "green" : "red"
              }}
            >
              {status}
            </p>
          )}
          <p>Phone: 1-800-123-4567 (Mon-Fri, 9 AM - 5 PM IST) | Live Chat: Available on our homepage.</p>
          <p>Response Time: We aim to reply within 24 hours.</p>
        </div>


      </div>

      <button className="live-chat-btn" onClick={() => setModalOpen(true)}>💬</button>

      <div className={`modal ${modalOpen ? 'show' : ''}`}>
        <div className="modal-content">
          <h3>Quick Contact</h3>
          <p>Need instant help? Call us at 1-800-123-4567 or email srrguitars@gmail.com</p>
          <button onClick={() => setModalOpen(false)}>Close</button>
        </div>
      </div>
    </div>
  );
};



// new code started from here 


// import React, { useRef, useState, useEffect } from "react";
// import emailjs from "@emailjs/browser";

// const Support = () => {
//   const formRef = useRef();
//   const [status, setStatus] = useState("");

//   useEffect(() => {
//     // Initialize EmailJS with your actual Public Key
//     emailjs.init("Bal7Vf8GCZyDQlmtN");
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const emailValue = formRef.current.user_email.value;
// emailjs
//   .sendForm(
//     "service_59i0bu7",
//     "template_qbo5y6v",
//     formRef.current,
//     "Bal7Vf8GCZyDQlmtN"
//   )
//   .then(
//     (result) => {
//       console.log("Email sent:", result.text);
//       setStatus("SUCCESS: Email sent");
//       formRef.current.reset();
//     },
//     (error) => {
//       console.log("FULL ERROR:", JSON.stringify(error, null, 2));
//       console.error("RAW ERROR:", error);
//       setStatus("ERROR: " + (error?.text || "Unknown error"));
//     }
//   );

//   };

//   return (
//     <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
//       <h2>Support / Contact Us</h2>

//       <form ref={formRef} onSubmit={handleSubmit}>
//         <div style={{ marginBottom: "1rem" }}>
//           <label htmlFor="user_email">Your Email:</label>
//           <input
//             type="email"
//             name="user_email"
//             id="user_email"
//             placeholder="you@example.com"
//             required
//             style={{
//               width: "100%",
//               padding: "0.5rem",
//               marginTop: "5px"
//             }}
//           />
//         </div>

//         <button
//           type="submit"
//           style={{
//             padding: "0.5rem 1rem",
//             width: "100%",
//             background: "black",
//             color: "white",
//             border: "none",
//             cursor: "pointer"
//           }}
//         >
//           Send Message
//         </button>
//       </form>

//       {status && (
//         <p
//           style={{
//             marginTop: "1rem",
//             color: status.startsWith("SUCCESS") ? "green" : "red"
//           }}
//         >
//           {status}
//         </p>
//       )}
//     </div>
//   );
// };

export default Support;
