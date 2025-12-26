import IconVerify from "../../assets/IconVerify";
import useScrollReveal from "../../hooks/useScrollReveal";

const ActionsPage = ({isPopupOpen , setIsPopupOpen}) => {
  const sectionRef = useScrollReveal();
  return (
    <section
      ref={sectionRef}
      data-animate="fade-up"
      className="relative w-full bg-[#FAFBFF] overflow-hidden"
    >
      {/* ================= CONTAINER ================= */}
      <div className="home-container py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
        <div className="mx-auto relative">

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
              className="home-title mt-4 sm:mt-5 md:mt-6 font-['Inter'] font-semibold text-[#132436] leading-[1.15]"
            >
              <span className="inline-flex items-center text-[1.7rem] sm:text-[2.1rem] md:text-[2.65rem] lg:text-[3.18rem]">
                See
                <span className="mx-2 inline-flex">
                  <img
                    src="/images/setting-orange.svg"
                    alt=""
                    className="w-[2.1rem] sm:w-[2.9rem] md:w-[3.45rem] lg:w-[4rem]"
                  />
                </span>
                Zupitu In Action
              </span>
            </h2>

            <p
              data-animate-item
              style={{ transitionDelay: "0.15s" }}
              className="home-description-actionpage mt-4 sm:mt-5 md:mt-6 max-w-[60rem] mx-auto text-[#546779] leading-[1.6]"
            >
              Experience the quality and speed of AI-powered email verification
              and email finding. Try Zupitu without sign-up. Enjoy free trials
              with 10 daily credits forever.
            </p>
          </div>

          {/* ================= DECORATIONS ================= */}
          <div className="absolute left-0 right-0 flex justify-center mt-6 sm:mt-8 pointer-events-none">
            <img
              src="/images/element-img.svg"
              alt=""
              className="w-full max-w-[55rem]"
            />
          </div>

          <img
            src="/images/action-bg-animation.png"
            alt=""
            aria-hidden
            className="hidden sm:block absolute left-[-6rem] top-1/.3 w-[12rem] opacity-80 pointer-events-none"
          />

          {/* ================= MAIN CARD ================= */}
          <div className="relative z-10 mt-10 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 mb-8 sm:mb-12 md:mb-16">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 p-4 sm:p-6 md:p-8 lg:p-10">

                {/* ================= LEFT ================= */}
                <div className="flex flex-col justify-between gap-6 sm:gap-8 lg:py-4">
                  <div className="space-y-4 sm:space-y-5 sm:px-4">

                    <div
                      data-animate-item
                      className="inline-flex items-center gap-2 rounded-full bg-[#F0F3FF] px-4 py-2 text-sm font-semibold text-[#132436]"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-[#5B7CF5]" />
                      Let's get in touch
                    </div>

                    <h3
                      data-animate-item
                      className="home-subtitle-actionpage font-['Inter'] text-[#132436] leading-[1.35]"
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
                      className="actionpage-description text-[#546779] pr-1.5 leading-[1.6]"
                    >
                      Verify up to 10 emails instantly without sign-up. Enter an
                      email, click Verify, and repeat. Explore bulk validation,
                      verification history, and all platform features with
                      unlimited access.
                    </p>
                  </div>

                  <button
                    data-hover="lift"
                    className="inline-flex items-center gap-2 font-bold text-[#EB3609] font-['Manrope'] text-lg pl-4"
                  >
                    Checkout Our Deals
                    <img
                      src="/images/right-orange-arrow.svg"
                      alt=""
                      className="w-4 h-3"
                    />
                  </button>
                </div>

                {/* ================= RIGHT ================= */}
                <div className="lg:border-l lg:pl-7 border-[#13243617] flex items-center justify-center lg:py-4">
                  <div className="bg-[#132436] rounded-xl px-6 py-8 lg:py-10 flex flex-col items-center gap-5 text-center w-full max-w-[500px]">

                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                      <img
                        src="/images/email-icon.svg"
                        alt="Email"
                        className="w-8 h-8"
                      />
                    </div>

                    <h4 className="font-['Inter'] font-semibold text-white text-lg sm:text-xl lg:text-2xl">
                      Verify Personal & Business
                      <br />
                      Emails Instantly
                    </h4>

                    <p className="font-['Manrope'] text-sm sm:text-base text-white opacity-70 max-w-md">
                      Check up to 10 emails for free — no sign-up required.
                    </p>

                    <div className="w-full bg-white rounded-full flex items-center overflow-hidden border max-w-[450px] mx-auto">
                      <input
                        type="email"
                        placeholder="Email Address..."
                        className="flex-1 px-4 py-4 text-sm outline-none"
                      />
                      <button
                      onClick={()=>setIsPopupOpen(true)}
                        className="bg-[#EB3609] hover:bg-[#FF6B35] text-white font-semibold px-4 py-2.5 rounded-full mr-1 transition-colors flex items-center justify-center gap-2"
                      >
                        <span className="hidden [@media(min-width:900px)]:block">
                          Verify Now
                        </span>
                        <IconVerify className="block [@media(min-width:900px)]:hidden w-5 h-5" />
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