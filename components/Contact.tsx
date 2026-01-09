import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "automation",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_i6xst7p", // 🔴 EmailJS SERVICE ID
        "template_tnxf4yo", // 🔴 EmailJS TEMPLATE ID
        {
          from_name: formData.name,
          from_email: formData.email,
          project_type: formData.projectType,
          message: formData.message,
        },
        "f1NsfT-XLJYcFk_Nf" // 🔴 EmailJS PUBLIC KEY
      )
      .then(
        () => {
          alert("✅ Inquiry sent successfully!");
          setFormData({
            name: "",
            email: "",
            projectType: "automation",
            message: "",
          });
          setLoading(false);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("❌ Failed to send inquiry. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-indigo-500 font-black text-xs uppercase tracking-[0.4em] mb-6 block">
              Work With Me
            </span>

            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white mb-10">
              Let's Scale <br />
              <span className="text-slate-500">Together.</span>
            </h2>

            <p className="text-slate-400 text-lg max-w-md mb-12">
              Currently accepting new high-impact projects. Reach out below.
            </p>

            <div className="space-y-8">
              {/* EMAIL */}
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                  📧
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Direct Email</h4>
                  <a
                    href="mailto:globalzoy@gmail.com"
                    className="text-slate-400 text-sm hover:text-indigo-400"
                  >
                    globalzoy@gmail.com
                  </a>
                </div>
              </div>

              {/* WHATSAPP */}
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                  🟢
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">WhatsApp</h4>
                  <a
                    href="https://wa.me/94771234567?text=Hello%20I%20need%20your%20service"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 text-sm hover:text-green-400"
                  >
                    +94 77 123 4567
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-slate-900/60 p-10 rounded-[40px] border border-white/10 space-y-6"
            >
              <input
                required
                type="text"
                placeholder="Full Name"
                className="w-full p-5 rounded-xl bg-slate-950 text-white border border-white/10"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />

              <input
                required
                type="email"
                placeholder="Work Email"
                className="w-full p-5 rounded-xl bg-slate-950 text-white border border-white/10"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />

              <select
                className="w-full p-5 rounded-xl bg-slate-950 text-white border border-white/10"
                value={formData.projectType}
                onChange={(e) =>
                  setFormData({ ...formData, projectType: e.target.value })
                }
              >
                <option value="automation">n8n Automation</option>
                <option value="web">Web Application</option>
                <option value="ai">AI Agent</option>
                <option value="audit">System Audit</option>
              </select>

              <textarea
                required
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full p-5 rounded-xl bg-slate-950 text-white border border-white/10"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-6 bg-white text-slate-900 font-black uppercase rounded-xl hover:bg-slate-200 transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Launch Inquiry"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
