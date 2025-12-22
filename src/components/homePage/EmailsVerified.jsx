import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

const EmailsVerified = () => {
  const sectionRef = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      data-animate="fade-up"
      className="relative w-full bg-white overflow-hidden"
    >
      <div className="home-container py-10 lg:py-16 pt-0!">
        <div className="w-full mx-auto relative">
          <div className="w-full mx-auto flex flex-col md:flex-row gap-6 md:gap-8">

            {/* Left column */}
            <div
              className="w-full lg:w-[50rem] h-auto lg:h-[33.0959rem] rounded-[1.275rem] p-6 bg-[#F0EBFF] flex flex-col gap-5 mb-4 lg:mb-0"
              data-animate-item
            >
              <div className="w-full flex flex-col items-center justify-center text-center">
                <h2
                  data-animate-item
                  style={{ transitionDelay: "0.08s" }}
                  className="home-subtitle-emailverified sm:text-[1.6999rem]! sm:leading-[1.6999rem]! md:leading-[1.9124rem]! lg:leading-[2.1249rem]! font-['Inter'] text-center"
                >
                  <span className="text-[#132436]">
                    Lead Generation <span className="text-[#9C93B4]">with</span>
                  </span>
                  <br />
                  <span className="text-[#132436]">
                    Advantage <span className="text-[#9C93B4]">Of</span>{" "}
                    Verified Emails
                  </span>
                </h2>
              </div>

              <div
                className="flex-1 flex items-center justify-center"
                data-animate-item
                style={{ transitionDelay: "0.15s" }}
              >
                <img
                  src="/images/shape-automate.svg"
                  alt="Email verification workflow"
                  className="w-full h-full md:max-h-[24.1711rem] rounded-[0.85rem] object-contain"
                />
              </div>
            </div>

            {/* Right column (FIXED) */}
            <div
              className="flex flex-col w-full lg:h-[33.149rem] rounded-[1.275rem] border border-[#E9EAEB] p-[0.0532rem] overflow-hidden bg-white"
              data-animate-item
              style={{ transitionDelay: "0.2s" }}
            >
              {/* Image section — grows naturally */}
              <div
                className="flex-1 flex items-center justify-center min-h-0 overflow-hidden"
                data-animate-item
                style={{ transitionDelay: "0.25s" }}
              >
                <img
                  src="/images/background_border.svg"
                  alt="Verified email status"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Bottom content — auto height */}
              <div
                className="w-full rounded-b-[1.275rem] bg-[#F9F9F8] px-6 py-4 flex flex-col flex-shrink-0"
                data-animate-item
                style={{ transitionDelay: "0.3s" }}
              >
                <p className="home-description-emailverified text-[#546779] font-['Manrope'] leading-7! mb-4">
                  Zupitu ensures your emails always reach the right inbox.
                  High email deliverability is achieved through reduced bounce
                  rates, a healthy email list.
                </p>

                <button
                  data-hover="lift"
                  className="inline-flex font-['Manrope'] items-center gap-2 text-[#EB3609] font-bold text-[16.5px] leading-[1.3813rem] sm:leading-[1.4875rem] md:leading-[1.5938rem] capitalize cursor-pointer"
                >
                  <span>Explore Email Finder</span>
                  <img
                    src="/images/right-orange-arrow.svg"
                    alt="Right arrow icon"
                    className="w-4 h-4"
                  />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailsVerified;
