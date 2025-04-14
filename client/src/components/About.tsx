import { FiArrowRight } from "react-icons/fi";

const About = () => {
  return (
    <section id="about-me" className="py-20 relative">
      <div className="absolute inset-0 dot-pattern opacity-10"></div>
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl font-semibold mb-12">
          <span className="text-primary">#</span>about-me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-300 mb-6">Hello, I'm Gurveer!</p>
            <p className="text-gray-400 mb-6">
              I'm a self-taught Full-Stack developer based in India. I can
              develop responsive websites from scratch and raise them into
              modern user-friendly web experiences.
            </p>
            <p className="text-gray-400 mb-6">
              Transforming my creativity and knowledge into websites has been my
              passion for over a year. I have been helping various clients to
              establish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-5 py-2 border border-primary text-primary hover:bg-primary hover:bg-opacity-10 transition-colors duration-300 rounded"
            >
              Read more
              <FiArrowRight className="h-4 w-4 ml-2" />
            </a>
          </div>
          <div className="relative">
            <svg
              className="rounded-lg w-full max-w-md mx-auto"
              viewBox="0 0 400 300"
              width="400"
              height="300"
            >
              <rect width="400" height="300" fill="#1E1E1E" rx="8" />
              <g transform="translate(200, 150)">
                <rect
                  x="-80"
                  y="-100"
                  width="160"
                  height="200"
                  fill="#252525"
                  rx="5"
                />
                <circle cx="0" cy="-50" r="30" fill="#333" />
                <rect
                  x="-60"
                  y="0"
                  width="120"
                  height="10"
                  rx="2"
                  fill="#444"
                />
                <rect
                  x="-60"
                  y="20"
                  width="120"
                  height="10"
                  rx="2"
                  fill="#444"
                />
                <rect
                  x="-60"
                  y="40"
                  width="120"
                  height="10"
                  rx="2"
                  fill="#444"
                />
                <rect
                  x="-60"
                  y="60"
                  width="80"
                  height="10"
                  rx="2"
                  fill="#c084fc"
                />
              </g>
            </svg>
            <div className="absolute top-0 right-0 w-32 h-32 dot-pattern opacity-30"></div>
            <div className="absolute bottom-0 left-0 dot-pattern opacity-30 w-32 h-32"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
