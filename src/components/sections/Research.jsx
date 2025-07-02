import { FaFileAlt } from "react-icons/fa";

export const Research = () => {
  const researchData = [
    {
      title: "Optimizing Energy Efficiency in IoT Networks",
      description:
        "A study on developing lightweight algorithms to reduce energy consumption in sensor-based IoT devices.",
      link: "#",
    },
    {
      title: "AI-Powered Crop Prediction for Smart Agriculture",
      description:
        "Research on machine learning models to predict crop yield and disease based on weather and soil data.",
      link: "#",
    },
    {
      title: "Blockchain for Secure Medical Records",
      description:
        "Exploring decentralized data storage using blockchain to ensure privacy and tamper-proof access to patient records.",
      link: "#",
    },
  ];

  return (
    <section
      id="research"
      className="min-h-screen flex items-center justify-center py-20 relative bg-gradient-to-br from-white via-gray-100 to-white"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-200/20 to-transparent blur-2xl opacity-30 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 relative">
        <h2 className="text-3xl font-bold mb-1 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent text-center">
          Research Work
        </h2>
        <p className="text-gray-600 text-sm text-center mb-10">
          "Exploring innovation through applied science and technology."
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {researchData.map((research, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-center mb-4">
                <FaFileAlt className="text-cyan-500 mr-3" />
                <h3 className="text-lg text-gray-600 font-semibold">{research.title}</h3>
              </div>
              <p className="text-gray-600 mb-3">{research.description}</p>
              <a
                href={research.link}
                className="text-sm text-blue-500 hover:underline"
              >
                View Paper →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
