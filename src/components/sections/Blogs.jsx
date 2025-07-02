import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaArrowRight } from "react-icons/fa";

export const Blogs = () => {
  const blogData = [
    {
      title: "Mastering the Basics of Full-Stack Web Development",
      description:
        "Learn the essentials of building full-stack applications, from front-end design using React and Tailwind CSS to back-end development with Node.js and database integration.",
      backgroundImage:
        "https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg",
    },
    {
      title: "The Future of Artificial Intelligence: Trends and Applications",
      description:
        "Explore how AI is transforming industries with innovations like machine learning, natural language processing, and computer vision, and what it means for the future of technology.",
      backgroundImage:
        "https://img.freepik.com/free-vector/wireframe-robot-ai-artificial-intelligence-robotic-hand-machine-learning-cyber-mind-domination-concept_127544-852.jpg",
    },
    {
      title: "Cybersecurity in the Digital Age: Protecting Data and Privacy",
      description:
        "Understand the importance of cybersecurity, common threats, and effective strategies for safeguarding your personal and professional digital assets.",
      backgroundImage:
        "https://img.freepik.com/free-photo/html-css-collage-concept-with-hacker_23-2150061984.jpg",
    },
    {
      title: "A Beginner's Guide to Cloud Computing and DevOps",
      description:
        "Discover how cloud platforms like AWS and Azure, combined with DevOps tools like Docker and Kubernetes, enable businesses to build scalable and efficient systems.",
      backgroundImage:
        "https://img.freepik.com/free-photo/programmer-holding-laptop-with-cloud-computing_53876-71510.jpg",
    },
    {
      title: "Demystifying SEO and Digital Marketing for Tech Professionals",
      description:
        "Dive into the world of SEO, analytics, and digital marketing strategies to help tech startups and developers boost their online presence.",
      backgroundImage:
        "https://img.freepik.com/free-vector/internet-business-seo-strategy_23-2147494779.jpg",
    },
    {
      title: "The Role of UI/UX Design in Modern App Development",
      description:
        "Learn how to create intuitive, user-friendly interfaces with tools like Figma and Adobe XD, and understand why great design is essential for user engagement.",
      backgroundImage:
        "https://img.freepik.com/free-vector/ui-ux-differences-concept-illustration_114360-11700.jpg",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(3);

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section
      id="blogs"
      className="min-h-screen flex items-center justify-center py-20 relative  bg-gradient-to-br from-white via-gray-100 to-white"
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-transparent blur-xl opacity-30 pointer-events-none"></div>

      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 relative">
          <h2 className="text-3xl font-bold mb-1 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            My Blogs
          </h2>
          <p className="text-gray-600 text-sm text-center mb-10">
            "Where Ideas Meet Inspiration."
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:flex lg:flex-wrap lg:gap-6">
            {blogData.slice(0, visibleCount).map((blog, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-xl  flex flex-col md:flex-row items-center transition-all hover:-translate-y-1 hover:border-blue-500/50 border border-gray-200 shadow-md"
              >
                {/* Left-side Image for Larger Screens */}
                <div
                  className="hidden md:block w-100 h-32 mr-4 bg-cover bg-center rounded-lg"
                  style={{ backgroundImage: `url(${blog.backgroundImage})` }}
                ></div>

                {/* Background Image for Smaller Screens */}
                <div
                  className="md:hidden absolute inset-0 bg-cover bg-center opacity-10 rounded-xl"
                  style={{ backgroundImage: `url(${blog.backgroundImage})` }}
                ></div>

                <div className="relative z-10">
                  <h3 className=" text-gray-700 text-xl font-bold mb-4">{blog.title}</h3>
                  <p
                    className="text-black mb-4 line-clamp-2 sm:line-clamp-none"
                    title={blog.description}
                  >
                    {blog.description}
                  </p>
                  <a
                    href="#"
                    className="flex items-center text-blue-500 hover:underline group"
                  >
                    <span className="mr-2">Read More</span>
                    <FaArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {visibleCount < blogData.length && (
            <div className="flex justify-center mt-8">
              <button
                onClick={handleSeeMore}
                className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
              >
                See More
              </button>
            </div>
          )}
        </div>
      </RevealOnScroll>
    </section>
  );
};
