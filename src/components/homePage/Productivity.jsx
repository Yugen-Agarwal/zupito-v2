import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

const Productivity = () => {
  const sectionRef = useScrollReveal();
  return (
    <section
      ref={sectionRef}
      data-animate="fade-up"
      className="relative w-full bg-[#FAFBFF] overflow-hidden"
    >
      {/* Container rhythm mirrors ActionsPage */}
      <div className="home-container py-10 lg:py-16">
        <div className="w-full mx-auto">
          {/* Top copy row (second image sizing intent) */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.0fr] items-start">
            {/* Headline block on the left */}
            <div className="flex flex-col gap-4 text-center lg:text-left">
              <div
                data-animate-item
                className="inline-flex font-['Manrope'] items-center gap-[0.3188rem] rounded-[2.6562rem] bg-[#F6F6F6] px-3 py-2 h-[1.8063rem] w-fit mx-auto lg:mx-0 text-[0.7438rem] font-bold text-[#132436] shadow-[0_0.0625rem_0_0_#0000000A]"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#5B7CF5]" />
                <span>Type Something</span>
              </div>

              <h2
                data-animate-item
                style={{ transitionDelay: "0.08s" }}
                className="home-title text-[#132436] font-['Inter'] font-bold"
              >
                <span>Powerful</span>
                <span className="align-middle inline-flex items-center justify-center mx-2 relative -top-px">
                  <img
                    src="/images/Powerfull-platform.svg"
                    alt=""
                    className="w-[1.4875rem] h-[1.4875rem] md:w-[3.3999rem] md:h-[3.3999rem] mx-1.5"
                  />
                </span>
                <span className="text-[#3A4A5A] opacity-50">Platform</span>
                <br />
                <span>Features For Productivity</span>
              </h2>
            </div>

            {/* Right description copy */}
            <div className="text-center mt-4 lg:mt-0 lg:text-left ">
              <p
                data-animate-item
                style={{ transitionDelay: "0.15s" }}
                className="home-description text-[#546779] font-['Manrope'] max-w-[500px] text-[20.4px] mx-auto lg:mx-0"
              >
                Zupitu's user-friendly interface simplifies prospecting with
                intuitive tools for high-quality data generation.
              </p>
              <p
                data-animate-item
                style={{ transitionDelay: "0.22s" }}
                className="home-description  text-[#546779] font-['Manrope'] text-[20.4px] mx-auto lg:mx-0 max-w-[500px]"
              >
                It supports seamless team collaboration, easily handles large
                data volumes, and offers cost-effective scalability for growing
                businesses.
              </p>
            </div>
          </div>

          {/* Main content row (third image sizing intent) */}
          <div className="!mt-10 sm:!mt-12 grid grid-cols-1 lg:grid-cols-2 gap-[1.0625rem] md:gap-[1.5938rem]">
            {/* Left large card (fourth + sixth + seventh images) */}
            <div className="relative w-full" data-animate-item>
              {/* Background image */}
              <div
                className="relative h-full rounded-[1.275rem] border border-[#EEF0F3] bg-[#FAFAFF] overflow-hidden"
                style={{
                  backgroundImage: "url('/images/Background.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Decorative frame on top area (fifth image) */}
                <div className="w-full">
                  <img
                    src="/images/productivity-frame.png"
                    alt="Productivity frame"
                    className="w-full h-auto select-none pointer-events-none"
                  />
                </div>

                {/* Bottom content block (sixth image) */}
                <div className="px-9 md:px-9 lg:px-9 bg-white/0 rounded-b-[1.275rem]">
                  <div className="flex flex-col gap-1">
                    <div
                      data-animate-item
                      className="inline-flex font-['Manrope'] items-center gap-[0.3188rem] rounded-[2.6562rem] bg-white px-3 py-2 h-[1.8063rem] w-fit text-[0.7438rem] font-bold text-[#132436] shadow-[0_0.0625rem_0_0_#0000000A]"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-[#5B7CF5]" />
                      <span>Type Something</span>
                    </div>

                    <div className="mt-5 flex flex-col gap-4">
                      <h3
                        data-animate-item
                        style={{ transitionDelay: "0.12s" }}
                        className="home-subtitle text-[#132436] font-['Inter']"
                      >
                        Powerful Team, Management
                        <br className="hidden sm:block" />
                        <span>Unified</span>
                        <span className="align-middle inline-flex items-center justify-center mx-2 relative -top-px">
                          <img
                            src="/images/Success.svg"
                            alt=""
                            className="w-[1.275rem] h-[1.275rem] sm:w-[1.9124rem] sm:h-[1.9124rem] md:w-[2.9749rem] md:h-[2.9749rem] mx-1.5"
                          />
                        </span>
                        <span>Success</span>
                      </h3>

                      <div className="flex flex-col gap-2">
                        <p
                          data-animate-item
                          style={{ transitionDelay: "0.18s" }}
                          className="home-description text-[#546779] font-['Manrope']"
                        >
                          Zupitu's Team Management features empower businesses
                          with streamlined team management workflows.
                        </p>
                        <p
                          data-animate-item
                          style={{ transitionDelay: "0.24s" }}
                          className="home-description  text-[#546779] font-['Manrope']"
                        >
                          Our free platform features help customers to optimize
                          resource allocation and get actionable insights
                          through detailed reporting. Teams can enhance
                          productivity and budget efficiency.
                        </p>
                        <p
                          data-animate-item
                          style={{ transitionDelay: "0.3s" }}
                          className="home-description  text-[#546779] font-['Manrope']"
                        >
                          These tools ensure accountability and decision- making
                          for achieving business goals
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column feature list (ninth + tenth + eleventh images) */}
            <div className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5 md:gap-6 h-full">
                {[
                  {
                    title: "Manage Multiple Teams",
                    desc: "Our conversion-focused approach ensures your brand captivates and converts with every pixel.",
                    icon: "/images/manage-multiple-teams.svg",
                  },
                  {
                    title: "Track Team Performance",
                    desc: "Monitor team performance in real time and take informed actions to maximize productivity and effectiveness.",
                    icon: "/images/track-team-performance.svg",
                  },
                  {
                    title: "Manage Credits",
                    desc: "Distribute resources smartly by allocating and reallocating credits across teams, ensuring optimized budget consumption and usage.",
                    icon: "/images/manage-credits.svg",
                  },
                  {
                    title: "Detailed Reporting",
                    desc: "Generate detailed reports on multiple data points, including individual team member usage, date-wise history, and overall team activity, for actionable insights.",
                    icon: "/images/detailed-reporting.svg",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    data-animate-item
                    style={{ transitionDelay: `${0.1 * idx}s` }}
                    data-hover="lift"
                    className="rounded-[0.85rem] border border-[#EEF0F3] bg-white p-5 sm:p-6 md:p-6 lg:p-6 lg:pt-8 lg:pb-8 shadow-[0_0.0625rem_0_0_#0000000A] cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-[2.8687rem] h-[2.8687rem] rounded-[2.3374rem] bg-[#FAFBFF] flex items-center justify-center shrink-0">
                        <img
                          src={item.icon}
                          alt=""
                          className="w-[1.6999rem] h-[1.6999rem]"
                        />
                      </div>
                      <div className="flex-1 flex flex-col gap-2">
                        <h4 className="text-[20.4px] font-bold text-[#132436] font-['Inter'] capitalize">
                          {item.title}
                        </h4>
                        <p className="home-description  text-[#546779] font-['Manrope'] ">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productivity;
