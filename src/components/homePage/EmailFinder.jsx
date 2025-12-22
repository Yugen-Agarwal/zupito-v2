import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

const EmailFinder = () => {
  const sectionRef = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      data-animate="fade-up"
      className="relative w-full bg-white overflow-hidden"
    >
      <div className="home-container pb-10 lg:pb-16">
        <div className="w-full h-auto mx-auto">

          <div className="relative w-full bg-white overflow-hidden">

            {/* Two column responsive layout */}
            <div className="md:grid md:grid-cols-1 lg:grid-cols-5 items-stretch gap-6 md:gap-5 lg:gap-5">
              {/* LEFT: second + fourth + fifth images combined */}
              <div className="col-span-3 mb-4 md:mb-0 flex">
                <div className="flex flex-col border-[#EEF0F3] border-solid border rounded-[1.275rem] w-full h-full" data-animate-item>
                  {/* Second image area (feature chips panel) */}
                  <div className="relative w-full bg-[#F5F5F5] rounded-t-[1.275rem] pt-10 sm:pt-10 md:pt-[2.1249rem] px-4 sm:px-6 pb-6">
                    {/* Use provided image as-is (no manual chips) */}
                    <div className="w-full flex items-center justify-center">
                      <img
                        src="/images/container-v.svg"
                        alt="CRM features"
                        className="w-full h-auto object-contain rounded-[0.85rem]"
                      />
                    </div>
                  </div>

                  {/* Fourth image (bottom description panel) */}
                  <div className="w-full bg-[#FCFCFD] rounded-b-[1.275rem] py-4 px-7 flex-1 flex flex-col">
                    <div className="max-w-[39.8426rem] gap-7 mx-auto flex flex-col justify-between h-full">
                      <p className="home-description-emailfinder text-[#546779] font-['Manrope']">
                        Beyond Opt-In mail list, email finder is a one of the
                        most reliable sources of building a deliverable list.
                        Zupitu helps you uncover the most accurate.
                      </p>

                      <button
                        data-hover="lift"
                        className="inline-flex font-['Manrope'] items-center gap-3 text-[#EB3609] font-bold text-[0.85rem] sm:text-[0.9563rem] md:text-[1.0625rem] lg:text-[1.1688rem] capitalize cursor-pointer"
                      >
                        <span>Explore Email Finder</span>
                        <img
                          src="/images/right-orange-arrow.svg"
                          alt=""
                          className="w-4 h-3"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT: sixth image background with list */}
              <div className="col-span-2 w-full flex">
                <div
                  className="relative w-full h-full min-h-auto lg:min-h-auto p-4 sm:p-5 md:p-6 rounded-[1.275rem] border-[#EEF0F3] border-solid border"
                  data-animate-item
                  style={{ transitionDelay: "0.15s" }}
                >
                  <img
                    src="/images/7.png"
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover rounded-[1.275rem]"
                  />

                  <div className="relative z-[1] w-full h-full flex flex-col items-center gap-5 p-3 sm:p-4">
                    <h3
                      data-animate-item
                      style={{ transitionDelay: "0.2s" }}
                      className=" text-center font-['Inter'] text-[#132436] capitalize text-[24px]!"
                    >
                      List Building With Reliable Email Finder
                    </h3>

                    <div className="w-full max-w-[37.1864rem] mx-auto flex flex-col items-center gap-2">
                      {[
                        "Check domain status",
                        "Verified business emails",
                        "New point",
                        "Upload lists without template restriction",
                        "Find complex emails",
                      ].map((label, idx) => (
                        <div
                          key={label}
                          data-animate-item
                          style={{ transitionDelay: `${0.15 + idx * 0.08}s` }}
                          className="w-full h-[3.0812rem] bg-white rounded-[0.5313rem] shadow-[0_0.5rem_1.25rem_0_#00000012] px-3 flex items-center gap-4"
                        >
                          <span className="inline-flex items-center justify-center min-w-[2.0187rem] min-h-[2.0187rem] rounded-[0.5313rem] bg-[#F6F6F7]">
                            <img
                              src="/images/Bullet.svg"
                              alt=""
                              className="w-5 h-4 object-contain"
                            />
                          </span>
                          <span className="home-description-emailfinder-bottom text-[#3A4A5A] font-['Manrope']">
                            {label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailFinder;
