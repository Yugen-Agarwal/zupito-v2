import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

const EmailPrecision = () => {
  const sectionRef = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      data-animate="fade-up"
      className="relative w-full bg-white overflow-hidden"
    >

      <div className="home-container py-8 lg:py-12">
        <div className="mx-auto relative">

          <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-center gap-[0.3188rem] md:gap-[0.425rem] lg:gap-[0.5313rem]">

            {/* LEFT SIDE - NOW AUTO WIDTH */}
            <div className="w-full lg:w-auto flex flex-col gap-[0.2125rem] text-center lg:text-left">

              {/* Plugin tag */}
              <div className="flex justify-center lg:justify-start">
                <div
                  data-animate-item
                  className="inline-flex items-center justify-center gap-[0.3188rem] rounded-[2.6562rem] bg-[#F6F6F6] w-[10.9965rem] h-[2.6031rem] px-[0.1063rem] py-[0.1063rem] text-[0.9563rem] leading-[0.9563rem] font-semibold text-[#132436] capitalize"
                >
                  <span className="w-[0.425rem] h-[0.425rem] rounded-full bg-[#3B82F6]" />
                  Plugin Integration
                </div>
              </div>

              {/* HEADLINE */}
              <div className="flex flex-col gap-2 min-w-0">

                {/* Line 1 */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-[0.1593rem] min-w-0">
                  <span
                    data-animate-item
                    style={{ transitionDelay: "0.05s" }}
                    className="home-title-emailprecision text-[#132436] font-['Inter'] font-bold"
                  >
                    Lead
                  </span>

                  {/* ICON — SAFE, WRAPS IF NEEDED */}
                  <img
                    src="/images/setting-orange2.svg"
                    alt=""
                    className="h-[3em] w-auto object-contain flex-shrink-0"
                  />

                  <span
                    data-animate-item
                    style={{ transitionDelay: "0.1s" }}
                    className="home-title-emailprecision text-[#a3a5a8] opacity-50 font-['Inter'] font-bold"
                  >
                    Generation
                  </span>
                </div>

                {/* Line 2 */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-[0.1593rem] min-w-0">
                  <span
                    data-animate-item
                    style={{ transitionDelay: "0.15s" }}
                    className="home-title-emailprecision text-[#a3a5a8] opacity-50 font-['Inter'] font-bold"
                  >
                    With&nbsp;
                  </span>

                  <span
                    data-animate-item
                    style={{ transitionDelay: "0.2s" }}
                    className="home-title-emailprecision text-[#132436] font-['Inter'] font-bold"
                  >
                    Email Precision
                  </span>

                  {/* ENVELOPE/ROCKET ICON — NO OVERLAP EVER */}
                  <img
                    src="/images/rocket-purple.svg"
                    alt=""
                    className="h-[3em] w-auto object-contain flex-shrink-0"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-full lg:flex-1 lg:max-w-[35.2553rem] text-center lg:text-left">
              <p
                data-animate-item
                style={{ transitionDelay: "0.25s" }}
                className="home-description-emailprecision pt-4 text-[18px] text-[#546779] font-['Manrope'] mx-auto lg:mx-0 max-w-[550px]"
              >
                Your email marketing success depends upon valid and opt-in email
                database.<br />
                An email verifier helps you maintain a valid list and email
                finder discovers the right business contacts to fill your
                sales pipeline with high-quality leads.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailPrecision;
