import { RevealOnScroll } from "../RevealOnScroll";
import { FaCode, FaSearch, FaSketch, FaCloud } from "react-icons/fa";

export const Services = () => {
  return (
    <section
      id="services"
      className="min-h-screen flex items-center justify-center py-20 relative"
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-transparent blur-3xl opacity-30 pointer-events-none"></div>

      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 relative">
          <h2 className="text-3xl font-bold mb-1 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            My Services
          </h2>
          <p className="text-gray-600 text-sm text-center mb-10">
            What I do & What I offer?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[ 
              {
                title: "Web Development",
                description:
                  "Custom websites and web applications using modern technologies.",
                technologies: ["React", "Next.js", "Tailwind CSS", "Node.js"],
                icon: <FaCode className="text-4xl text-blue-500 mr-4 " />
              },
              {
                title: "UI/UX Design",
                description:
                  "User-friendly, modern, and responsive UI/UX designs.",
                technologies: ["Figma", "Adobe XD", "Sketch", "Tailwind CSS"],
                icon: <FaSketch className="text-4xl text-blue-500 mr-4 " />
              },
              {
                title: "SEO & Digital Marketing",
                description:
                  "Optimizing websites for search engines and marketing strategies.",
                technologies: ["Google Analytics", "SEO", "Social Media Ads"],
                icon: <FaSearch className="text-4xl text-blue-500 mr-4" />
              },
              {
                title: "Cloud & DevOps",
                description:
                  "Deploying scalable applications on cloud platforms with CI/CD.",
                technologies: ["AWS", "Docker", "Kubernetes", "Jenkins"],
                icon: <FaCloud className="text-4xl text-blue-500 mr-4" />
              },
            ].map((service, index) => (
              <div
                key={index}
                className="
                  glass p-6 rounded-xl border border-white/10 
                  relative transition-all
                  hover:-translate-y-1 hover:border-blue-500/50
                "
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="flex items-center flex-col sm:flex-row sm:justify-start">
                    {service.icon}
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                </div>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.technologies.map((tech, key) => (
                    <span
                      key={key}
                      className="
                        bg-blue-500/10 text-blue-500 py-1 px-3 
                        rounded-full text-sm
                        transition
                        hover:bg-blue-500/20 hover:-translate-y-0.5
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
