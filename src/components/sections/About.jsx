import { RevealOnScroll } from "../RevealOnScroll";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDatabase,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiGraphql,
  SiMongodb,
} from "react-icons/si";

export const About = () => {
  const techSkills = [
    { name: "React", icon: <FaReact className="h-12 w-12 text-blue-500" /> },
    {
      name: "JavaScript",
      icon: <FaJsSquare className="h-12 w-12 text-yellow-500" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="h-12 w-12 text-blue-500" />,
    },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss className="h-12 w-12 text-teal-400" />,
    },
    { name: "CSS", icon: <FaCss3Alt className="h-12 w-12 text-green-600" /> },
    { name: "Python", icon: <FaPython className="h-12 w-12 text-blue-500" /> },
    { name: "AWS", icon: <FaAws className="h-12 w-12 text-orange-400" /> },
    {
      name: "MongoDB",
      icon: <SiMongodb className="h-12 w-12 text-green-700" />,
    },
    {
      name: "GraphQL",
      icon: <SiGraphql className="h-12 w-12 text-pink-600" />,
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-100 to-white"
    >
      <RevealOnScroll>
        <div className="max-w-7xl w-full px-4 py-16">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="relative flex flex-col md:flex-row gap-12">
            {/* Left Section */}
            <div className="md:w-1/2 flex flex-col items-center">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5d87b82d23c815126c2aa49c/1569777469303-TQQ33LS11KUE8DSAUPFY/Portrait+of+a+young+man.03.jpg"
                className="w-45 h-60 object-cover mb-6"
                alt="Profile"
              />

              <p className="text-black text-center mb-10">
                Passionate developer with expertise in building scalable web
                applications and creating innovative solutions. I’m a full-stack
                developer who loves crafting clean, scalable web applications.
                My goal is to build solutions that offer both exceptional
                performance and a delightful user experience.
              </p>

              <div className="rounded-xl hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold ml-5 mb-4 bg-gradient-to-l from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Tech Stack
                </h3>

                <div className="flex flex-wrap gap-6 justify-center">
                  {techSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="text-blue-500 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech.icon}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block w-px bg-gray-300 absolute left-1/2 top-0 h-full transform -translate-x-1/2" />

            {/* Right Section */}
            <div className="md:w-1/2 flex flex-col justify-center">
              {/* Education */}
              <div className="p-6 rounded-xl hover:-translate-y-1 transition-all">
                <h3 className="text-2xl mb-4 bg-gradient-to-l from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Education
                </h3>
                <ul className="list-none space-y-4">
                  <li className="text-lg text-gray-900">
                    <h4 className="text-blue-900 font-medium">
                      BSc in Computer Science and Information Technology
                    </h4>{" "}
                    - Tribhuvan University (2022-Present)
                  </li>
                  <p className="text-sm text-gray-700 mb-6">
                    Relevant Coursework: Data Structures & Algorithms, Web
                    Development, Cloud Computing...
                  </p>
                  <li className="text-lg text-gray-900 font-medium">
                    <h4 className="text-blue-900">
                      Padmodaya Public Model Secondary School
                    </h4>{" "}
                    (2019-2021)
                  </li>
                  <p className="text-sm text-gray-700">
                    Relevant Coursework: Social Science
                  </p>
                </ul>
              </div>

              {/* Work Experience */}
              <div className="p-6 rounded-xl hover:-translate-y-1 transition-all">
                <h3 className="text-2xl font-medium bg-gradient-to-l from-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
                  Work Experience
                </h3>
                <div className="space-y-6 text-gray-900">
                  <div>
                    <h4 className="text-blue-900 text-lg font-medium">
                      Software Engineer at ABC Corp <br /> (2020 - Present)
                    </h4>
                    <p className="text-sm text-gray-700 mb-6">
                      Developed and maintained microservices for cloud-based
                      applications.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-blue-900 text-lg font-medium">
                      Intern at DEF Startups (2019)
                    </h4>
                    <p className="text-sm text-gray-700">
                      Assisted in building front-end components and integrating
                      REST APIs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
