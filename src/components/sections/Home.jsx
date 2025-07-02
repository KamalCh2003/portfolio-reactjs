import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative "

    >
       <div className="absolute inset-0 bg-[url('https://img.freepik.com/premium-vector/cyber-circuit-future-technology-concept-background_42077-20992.jpg?uid=R149926634&ga=GA1.1.2070331538.1741978664&semt=ais_hybrid&w=740')] bg-cover bg-center bg-no-repeat md:hidden opacity-10"></div>
      <RevealOnScroll>
        <div className=" md:text-center z-10 px-4">
        <div
  class="w-20 h-20 mt-10 md:mt-30 bg-cover bg-center rounded-full mx-0 md:mx-auto"
  style={{
    backgroundImage:
      "url('https://img.freepik.com/free-photo/young-man-standing-with-arms-folded_171337-17911.jpg?w=740')",
  }}
></div>
          <h1 class="w-[50] md:w-full text-3xl md:text-7xl mt-10 mb-10 bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent text-left md:text-center">
  Hello! I'm Kamal Chaudhary
</h1>

          <p className="text-gray-100 text-2xl mb-4 font-bold max-w-lg mx-auto">
            A Frontend Developer based in Pokhara, Nepal
          </p>
          <p className="text-sm text-gray-600 md:text-lg mb-20 max-w-lg mx-auto">
            Passionate creating great experiences for Digital Product
          </p>
          <div className="flex justify-center space-x-4 mb-20">
            <a
              href="#contact"
              className=" text-sm bg-blue-500 text-white py-3 px-3 md:[py-3 px-6] rounded md:text-2xl transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              Connect with me
            </a>

            <a
              href="#resume"
              className=" text-sm border border-blue-500/50 text-blue-500 py-3 px-3 md:[py-3 px-6]  rounded md:text-2xl transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Download Resume
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
