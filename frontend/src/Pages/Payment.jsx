// import React, { useEffect } from "react";

// const Payment = ({ amount }) => {
//     useEffect(() => {
//         if (window.paypal) {
//             window.paypal.Buttons({
//                 createOrder: (data, actions) => {
//                     return actions.order.create({
//                         purchase_units: [{
//                             amount: { value: amount.toString() },
//                         }],
//                     });
//                 },

//                 onApprove: (data, actions) => {
//                     return actions.order.capture().then((details) => {
//                         alert("Payment Successful!");
//                         console.log(details);
//                     });
//                 },

//             }).render("#paypal-button-container");
//         }
//     }, []);

//     return (
//         <div style={{ padding: "20px" }}>
//             <h2>Secure Payment</h2>
//             <div id="paypal-button-container"></div>
//         </div>
//     );
// };

// export default Payment;

//new code................................
import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import "./CSS/Payment.css";

const UPI_APPS = [
  { id: "gpay", label: "Google Pay", color: "#000", logo: "https://images.seeklogo.com/logo-png/33/2/google-pay-logo-png_seeklogo-334912.png" },
  { id: "phonepe", label: "PhonePe", color: "#5A2CBB", logo: "https://www.logo.wine/a/logo/PhonePe/PhonePe-Logo.wine.svg" },
  { id: "paytm", label: "Paytm", color: "#00baf2", logo: "https://images.seeklogo.com/logo-png/30/1/paytm-logo-png_seeklogo-305549.png" },
];

const Payment = ({ onComplete = () => {} }) => {
  const location = useLocation();
  const amount = location.state?.amount ?? 1;

  const [visible, setVisible] = useState(true);
  const [selected, setSelected] = useState(null);
  const [stage, setStage] = useState("select"); // select -> pin -> processing -> success -> done
  const [pin, setPin] = useState("");
  const [txn, setTxn] = useState(null);
  const [soundOn, setSoundOn] = useState(true);

  const playBeep = (freq = 880, time = 0.08) => {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = "sine";
      o.frequency.value = freq;
      o.connect(g);
      g.connect(ctx.destination);
      o.start(0);
      g.gain.setValueAtTime(0.0001, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.05, ctx.currentTime + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + time);
      o.stop(ctx.currentTime + time + 0.02);
    } catch (e) { /* ignore audio errors */ }
  };

  const vibrate = (pattern = 100) => {
    if (navigator.vibrate) navigator.vibrate(pattern);
  };

  useEffect(() => {
    if (!visible) return;
    if (soundOn) playBeep(700, 0.06);
  }, [visible, soundOn]);

  const startPinEntry = (appId) => {
    setSelected(appId);
    setStage("pin");
    if (soundOn) playBeep(1000, 0.06);
  };

  const submitPin = async () => {
    if (pin.length < 4) {
      alert("Enter 4-digit UPI PIN (fake)");
      return;
    }

    setStage("processing");
    if (soundOn) playBeep(1200, 0.05);
    vibrate([60, 20, 60]);

    try {
      const res = await fetch("http://localhost:4000/api/gpay/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, app: selected }),
      });
      const data = await res.json();

      setTimeout(() => {
        setTxn(data);
        setStage("success");
        if (soundOn) {
          playBeep(1400, 0.08);
          setTimeout(() => playBeep(880, 0.06), 120);
        }
        vibrate([120, 30, 60]);
        setTimeout(() => {
          onComplete(data);
          setStage("done");
          setVisible(false);
        }, 1500);
      }, 2000);
    } catch (err) {
      setTimeout(() => {
        const data = { status: "SUCCESS", txnId: "UPI" + Math.floor(Math.random() * 99999999), amount };
        setTxn(data);
        setStage("success");
        if (soundOn) playBeep(1400, 0.08);
        vibrate([120, 30, 60]);
        setTimeout(() => {
          onComplete(data);
          setStage("done");
          setVisible(false);
        }, 1500);
      }, 2000);
    }
  };

  if (!visible) return null;

  return (
    <div className="pf-modal">
      <div className="pf-sheet">
        <div className="pf-top">
          <div className="pf-grip" />
          <div className="pf-header-row">
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <img className="pf-small-logo" src={UPI_APPS[0].logo} alt="logo" />
              <div>
                <div className="pf-title">Pay ₹{amount}</div>
                <div className="pf-sub">Choose UPI app to pay</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button className="pf-icon-btn" onClick={() => setSoundOn(s => !s)}>
                {soundOn ? "🔊" : "🔇"}
              </button>
              <button className="pf-icon-btn" onClick={() => { setVisible(false); setStage("done"); }}>
                ✕
              </button>
            </div>
          </div>
        </div>

        {stage === "select" && (
          <div className="pf-content">
            <div className="pf-list">
              {UPI_APPS.map((app) => (
                <button
                  key={app.id}
                  className="pf-app-btn"
                  onClick={() => startPinEntry(app.id)}
                  style={{ borderColor: app.color }}
                >
                  <img src={app.logo} alt={app.label} className="pf-app-logo" />
                  <div className="pf-app-label">{app.label}</div>
                  <div className="pf-app-meta">Pay with UPI</div>
                </button>
              ))}
            </div>
            <div className="pf-note">
              This is a simulated UPI payment.
            </div>
          </div>
        )}

        {stage === "pin" && (
          <div className="pf-content">
            <div className="pf-pin-card">
              <div className="pf-pin-title">{UPI_APPS.find(a => a.id === selected)?.label}</div>
              <div className="pf-pin-sub">Enter your 4-digit UPI PIN</div>
              <div className="pf-pin-display">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="pf-pin-dot">{pin[i] ? "●" : ""}</div>
                ))}
              </div>
              <div className="pf-keypad">
                {["1","2","3","4","5","6","7","8","9","←","0","OK"].map((k) => (
                  <button
                    key={k}
                    className="pf-key"
                    onClick={() => {
                      if (k === "←") setPin(p => p.slice(0, -1));
                      else if (k === "OK") submitPin();
                      else setPin(p => (p.length < 4 ? p + k : p));
                    }}
                  >
                    {k}
                  </button>
                ))}
              </div>
              <div style={{ marginTop: 12, textAlign: "center" }}>
                <button className="pf-cancel" onClick={() => { setStage("select"); setPin(""); }}>Choose another app</button>
              </div>
            </div>
          </div>
        )}

        {stage === "processing" && (
          <div className="pf-content pf-process">
            <div className="pf-loader" />
            <div className="pf-process-text">Processing payment via {UPI_APPS.find(a=>a.id===selected)?.label}…</div>
          </div>
        )}

        {stage === "success" && (
          <div className="pf-content pf-success">
            <div className="pf-success-circle">✓</div>
            <h3>Payment Successful</h3>
            <p className="pf-txn">Txn ID: {txn?.txnId || txn?.transaction_id}</p>
            <div style={{ marginTop: 10 }}>
              <button className="pf-done" onClick={() => { onComplete(txn); setVisible(false); }}>Done</button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Payment;
