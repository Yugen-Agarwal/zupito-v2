import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

const Teams = () => {
  const sectionRef = useScrollReveal();
  return (
    <section
      ref={sectionRef}
      data-animate="fade-up"
      className="relative w-full bg-[#FDF9FB] overflow-hidden"
    >
      {/* Outer container spacing mirrors ActionsPage rhythm */}
      <div className="home-container py-10 lg:py-16">
        <div className="w-full mx-auto relative">
          {/* Top badge */}
          <div className="flex justify-center lg:justify-start">
            <div
              data-animate-item
              className="inline-flex font-['Manrope'] items-center justify-center gap-[0.3188rem] rounded-[2.6562rem] bg-[#FFE9F2] px-2 py-2 h-[1.8063rem] text-center align-middle font-bold text-[#132436] text-[0.7438rem] leading-[100%]"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#5B7CF5]" />
              <span>Plugin integration</span>
            </div>
          </div>
          {/* Hero row: heading left, paragraph right on large screens */}
          <div className="mt-4 sm:mt-5 md:mt-6 grid grid-cols-1 lg:grid-cols-2 items-start gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 text-center lg:text-left">
            {/* Heading */}
            <h2
              data-animate-item
              style={{ transitionDelay: "0.08s" }}
              className="home-title xl:w-[35.7491rem] font-['Inter'] font-bold text-[#132436] leading-[1.15]"
            >
              <span className="align-middle">
                Reach
                <span className="align-middle inline-flex items-center justify-center mx-2 relative top-[-0.125rem]">
                  <img
                    src="/images/sec-4.svg"
                    alt=""
                    className="w-[1.4875rem] h-[1.4875rem] md:w-[2.9749rem] md:h-[2.9749rem]"
                  />
                </span>
                <span className="text-[#3A4A5A] opacity-50">Real </span>
                <br className="hidden sm:block" />
                Prospects Faster
                <span className="align-middle inline-flex items-center justify-center ml-2 relative top-[-0.125rem]">
                  <img
                    src="/images/section-4.svg"
                    alt=""
                    className="w-[1.4875rem] h-[1.4875rem] md:w-[2.9749rem] md:h-[2.9749rem]"
                  />
                </span>
              </span>
            </h2>

            {/* Sub copy */}
            <div className="flex justify-center lg:justify-end">
              <p
                data-animate-item
                style={{ transitionDelay: "0.15s" }}
                className="max-w-[550px] font-['Manrope'] font-medium text-[14px] sm:text-[16px] lg:text-[18px] text-[#475768] leading-[1.6]"
              >
                Experience the quality and speed of Artificial Intelligence in email verification and email finding. Try Zupitu without Sign-Up. We welcome FREE trials and offer 10 Credits daily forever.
              </p>
            </div>
          </div>
          {/* Features grid */}
          <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {[
              {
                title: "Streamlined Efficiency",
                desc: "Combining verification & email - finding features in one platform, save seamless lead generation.",
              },
              {
                title: "Automate Workflows",
                desc: "Streamline processes, save time, and ensure consistent image quality across your platforms.",
              },
              {
                title: "Customer Support",
                desc: "Boost support efficiency, elevate customer satisfaction, and deliver a seamless user experience.",
              },
              {
                title: "Quick Results, Zero Complexity",
                desc: "Zupitu's intuitive platform. Get your team verifying and finding contacts in minutes, not days.",
              },
              {
                title: "Cost-Effective Solutions",
                desc: "Zupitu’s affordable plans unlock premium features -perfect for businesses of all sizes.",
              },
              {
                title: "Campaign With Confidence",
                desc: "Run your campaigns with confidence -Zupitu is built and trusted by customers like you.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                data-animate-item
                style={{ transitionDelay: `${0.1 * idx}s` }}
                data-hover="lift"
                className="bg-white rounded-[0.6375rem] sm:rounded-[0.7438rem] lg:rounded-[0.85rem] shadow-[0_0.4375rem_1rem_0_#181D2717] px-4 sm:px-5 md:px-6 pt-5 sm:pt-6 md:pt-7 lg:pt-8 pb-6 sm:pb-7 md:pb-8 lg:pb-10 min-h-[11.6872rem] sm:min-h-[12.7496rem] lg:min-h-[13.8121rem] flex flex-col gap-3 sm:gap-4 lg:gap-5 cursor-pointer"
              >
                <div className="w-[2.5499rem] h-[2.5499rem] sm:w-[2.7624rem] sm:h-[2.7624rem] lg:w-[3rem] lg:h-[3rem] rounded-full bg-[#FAFAFF] flex items-center justify-center">
                  <img
                    src={
                      idx === 0
                        ? "/images/streamlined-efficiency.png"
                        : idx === 1
                          ? "/images/automate-workflows.png"
                          : idx === 2
                            ? "/images/customer-support.png"
                            : idx === 3
                              ? "/images/quick-results.png"
                              : idx === 4
                                ? "/images/costEffective-solutions.png"
                                : "/images/campaign-confidence.png"
                    }
                    alt=""
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col gap-2 sm:gap-3">
                  <h3 className="text-[18px] sm:text-[20px] md:text-[20.4px] font-semibold leading-[1.3] sm:leading-[1.4] text-[#132436] font-['Inter'] capitalize">
                    {item.title}
                  </h3>
                  <p className="home-description text-[14px] sm:text-[15px] md:text-[16px] text-[#546779] font-['Manrope'] leading-[1.6]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
