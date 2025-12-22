import useScrollReveal from "../../hooks/useScrollReveal";

const ActionsPage = () => {
  const sectionRef = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      data-animate="fade-up"
      className="relative w-full bg-[#FAFBFF] overflow-hidden mt-4"
    >
      <div className="home-container">
        <div className="relative w-full mx-auto">

          {/* ================= HEADER ================= */}
          <div className="text-center">
            <div
              data-animate-item
              className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-[#132436]"
            >
              <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
              Plugin Integration
            </div>

            <h2
              data-animate-item
              style={{ transitionDelay: "0.08s" }}
              className="home-title mt-5 font-['Inter'] font-semibold text-[#132436]"
            >
              <span className="inline-flex items-center text-[1.7rem] sm:text-[2.12rem] md:text-[2.65rem] lg:text-[3.18rem]">
                See
                <span className="mx-2 inline-flex">
                  <img
                    src="/images/setting-orange.svg"
                    alt=""
                    className="w-[2.12rem] sm:w-[2.9rem] md:w-[3.45rem] lg:w-[3.98rem]"
                  />
                </span>
                Zupitu In Action
              </span>
            </h2>

            <p
              data-animate-item
              style={{ transitionDelay: "0.15s" }}
              className="home-description-actionpage mt-5 max-w-[72rem] mx-auto text-[#546779] font-['Manrope']"
            >
              Experience the quality and speed of AI-powered email verification
              and email finding. Try Zupitu without sign-up. Enjoy free trials
              with 10 daily credits forever.
            </p>
          </div>

          {/* ================= DECORATIONS ================= */}
          <div className="absolute w-full flex justify-center mt-4">
            <img
              src="/images/element-img.svg"
              alt=""
              aria-hidden
              className="w-full max-w-[55rem] pointer-events-none select-none"
            />
          </div>

          <img
            src="/images/action-bg-animation.png"
            alt=""
            aria-hidden
            className="hidden sm:block absolute left-[-5rem] top-1/3 w-[11rem] opacity-80 pointer-events-none"
          />

          {/* ================= MAIN CARD ================= */}
          <div className="relative z-10 mt-16 lg:mt-24 mb-16">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-4 sm:p-6 md:p-8">

                {/* LEFT PANEL */}
                <div className="flex flex-col justify-between gap-8">
                  <div className="space-y-5">
                    <div
                      data-animate-item
                      className="inline-flex items-center gap-2 rounded-full bg-[#F0F3FF] px-4 py-2 text-sm font-semibold text-[#132436]"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-[#5B7CF5]" />
                      Let's get in touch
                    </div>

                    <h3
                      data-animate-item
                      className="home-subtitle-actionpage font-['Inter'] text-[#132436]"
                    >
                      Comprehensive Personal & Business
                      <span className="inline-flex mx-2 align-middle">
                        <img
                          src="/images/setting-orange-1.svg"
                          alt=""
                          className="w-10 h-10"
                        />
                      </span>
                      Email Validation
                    </h3>

                    <p
                      data-animate-item
                      className="actionpage-description text-[#546779] font-['Manrope'] text-[18px]"
                    >
                      Verify up to 10 emails instantly without sign-up just enter an email, click Verify, and repeat. Explore bulk validation, verification history, and all platform features with unlimited access and no credits required..
                    </p>
                  </div>

                  <button
                    data-hover="lift"
                    className="inline-flex items-center gap-2 font-bold text-[#EB3609] font-['Manrope'] text-lg"
                  >
                    Checkout Our Deals
                    <img
                      src="/images/right-orange-arrow.svg"
                      alt=""
                      className="w-4 h-3"
                    />
                  </button>
                </div>

                {/* RIGHT PANEL */}
                <div className="md:border-l md:pl-7 border-[#13243617]">
                  <div className="bg-[#132436] rounded-xl p-4 md:p-6 flex flex-col items-center gap-5 text-center">
                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                      <img
                        src="/images/email-icon.svg"
                        alt="Email"
                        className="w-8 h-8"
                      />
                    </div>

                    <h4 className="font-['Inter'] font-semibold text-white text-lg sm:text-xl lg:text-2xl">
                      Verify Personal & Business Emails Instantly
                    </h4>

                    <p className="font-['Manrope'] text-sm sm:text-base text-white opacity-70">
                      Check up to 10 emails for free — no sign-up required.
                    </p>

                    <div className="w-full max-w-md bg-white rounded-full flex items-center overflow-hidden border text-[12px] lg:text-[15px]">
                      <input
                        type="email"
                        placeholder="Email Address..."
                        className="flex-1 px-4 py-4 outline-none"
                      />
                      <button className="bg-[#EB3609] text-white font-semibold px-6 py-3 rounded-full mr-1">
                        Verify Now
                      </button>
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

export default ActionsPage;
