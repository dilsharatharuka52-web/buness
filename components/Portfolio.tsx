import React from "react";
import { motion } from "framer-motion";

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "Automated Sales Pipeline",
      client: "n8nZOY",
      tags: ["n8n", "HubSpot", "Gemini"],
      description:
        "Built an AI agent that monitors Slack for leads, scores them via Gemini, and updates CRM in real-time.",
      image:
        "image/56e37615-b23d-489a-b0a3-a6692dba183c.png",
      detailsLink: "/projects/automated-sales-pipeline",
      liveLink: "https://n8n-soz.vercel.app/",
    },
    {
      title: "Smart Hotel Booking Website",
      client: "OceanView Boutique Hotel",
      tags: ["React", "Gemini AI", "Next.js","AWS"],
      description:
        "A modern, mobile-friendly hotel website with an AI booking assistant that answers guest questions, shows room availability, and captures bookings automatically. The website improves guest experience, increases direct bookings, and works as a 24/7 virtual receptionist.",
      image:
        "image/projectOceanViewBoutiqueHotel.png",
      detailsLink: "/projects/logistics-dashboard",
      liveLink: "https://ocean-view.vercel.app/",
    },
    {
      title: "E-commerce Automation",
      client: "Thread & Needle",
      tags: ["n8n", "Shopify", "Twilio"],
      description:
        "Omni-channel customer support automation that reduced human support tickets by 45%.",
      image:
        "image/dashbord.png",
      detailsLink: "/projects/ecommerce-automation",
      liveLink: "https://n8n-soz.vercel.app/",
    },
  ];

  return (
    <section id="portfolio" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-indigo-500 font-black text-xs uppercase tracking-[0.4em] mb-4 block">
              Recent Projects
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-white">
              Selected <br />
              <span className="text-slate-500">Case Studies.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-sm text-slate-400 text-sm leading-relaxed"
          >
            A collection of automation and web engineering projects that
            delivered measurable business value.
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group"
            >
              <div className="relative aspect-[16/10] rounded-[40px] overflow-hidden mb-10 border border-white/5 shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-60"></div>

                <div className="absolute top-6 left-6 flex gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 text-[9px] font-black uppercase tracking-widest text-white rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-2">
                <span className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em]">
                  {project.client}
                </span>
                <h3 className="text-3xl font-black text-white mt-2 mb-4 tracking-tight group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <div className="mt-8 flex items-center space-x-6">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 text-[11px] font-black uppercase tracking-widest hover:text-white transition-all flex items-center gap-1"
                  >
                    Live Preview
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
