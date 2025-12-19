import useScrollReveal from "../../hooks/useScrollReveal";

const ActionsPage = () => {
  const sectionRef = useScrollReveal();
  return (
    <section
      ref={sectionRef}
      data-animate="fade-up"
      className="relative w-full bg-[#FAFBFF] overflow-hidden !mt-4"
    >
      {/* Outer container mirrors HeroSection spacing rhythm */}
      <div className="home-container py-10 lg:py-14">
        <div className="w-full mx-auto relative">
          {/* Header copy */}
          <div className="text-center">
            <div
              data-animate-item
              className="inline-flex items-center font-['Inter'] justify-center gap-[0.3188rem] rounded-[2.6562rem] bg-white w-auto h-[1.5938rem] px-2 py-2 text-[0.85rem] leading-[0.9563rem] font-semibold text-[#132436] capitalize"
            >
              <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
              Plugin Integration
            </div>

            <h2
              data-animate-item
              style={{ transitionDelay: "0.08s" }}
              className="home-title !mt-5 text-[#132436] font-semibold font-['Inter']"
            >
              <span className="inline-block align-middle text-[1.6999rem] sm:text-[2.1249rem] md:text-[2.6562rem] lg:text-[3.1874rem]">
                See
                <span className="align-middle inline-flex items-center justify-center mx-1 sm:mx-2 relative top-[-0.125rem]">
                  <img
                    src="/images/setting-orange.svg"
                    alt=""
                    className="w-[2.1249rem] h-[1.6999rem] sm:w-[2.9218rem] sm:h-[2.3374rem] md:w-[3.4531rem] md:h-[2.7624rem] lg:w-[3.9842rem] lg:h-[3.1874rem]"
                  />
                </span>
                Zupitu In Action
              </span>
            </h2>

            <p
              data-animate-item
              style={{ transitionDelay: "0.15s" }}
              className="home-description-actionpage !mt-5 text-[#546779] font-['Manrope'] text-center max-w-full mx-auto md:max-w-[72.3542rem]"
            >
              Experience the quality and speed of Artificial Intelligence in
              email verification and email finding. Try Zupitu without Sign-Up.
              We welcome FREE trials and offer 10 Credits daily forever.
            </p>
          </div>

          {/* Connector dot and subtle divider (decorative) */}
          <div className="absolute flex w-full justify-center mt-4">
            <img
              src="/images/element-img.svg"
              alt=""
              aria-hidden="true"
              className="pointer-events-none select-none w-full max-w-[15.937rem] sm:max-w-[21.2494rem] md:max-w-[54.9827rem] h-auto"
            />
          </div>

          {/* Decorative background animation image (outside the card) */}
          <img
            src="/images/action-bg-animation.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none select-none absolute top-12 left-[-1.25rem] w-[5.3123rem] sm:top-14 sm:left-[-3.125rem] sm:w-[9.5622rem] md:top-[33%] md:left-[-5rem] md:w-[11.6872rem] lg:left-[-8.70rem] lg:w-[13.8121rem] opacity-80 z-0 hidden sm:block"
          />

          {/* Card container (desktop exact sizing as provided) */}
          <div className="w-full relative z-[1] mt-12 sm:mt-16 md:mt-10 lg:mt-15 top-8 sm:top-12 md:top-16 lg:top-24 h-auto lg:h-[30.3866rem] mb-8 sm:mb-12 md:mb-16 lg:mb-[5.3123rem]">
            <div className="bg-white rounded-[0.85rem] sm:rounded-[1.0625rem] shadow-[0_0.625rem_1.875rem_0_#0000001A] mx-auto h-full overflow-hidden w-full">
              {/* Desktop divider line at x=681, 30.75rem tall */}
              {/* <div
              aria-hidden="true"
              className="hidden lg:block absolute left-1/2 -translate-x-1/2 inset-y-12 w-0 border-l lg:px-10! border-[#132436] opacity-10 pointer-events-none"
            /> */}

              <div className="relative h-auto lg:h-[30.3866rem] z-[1] grid grid-cols-1 p-4 sm:p-6 md:p-8 md:grid-cols-2 gap-6 md:gap-8 lg:gap-0 items-stretch">
                {/* Left panel (copy) sized 561x451 at 3.75rem offset */}
                <div className="relative rounded-[0.85rem]  flex flex-col justify-between gap-7">
                  <div className="flex flex-col gap-5 sm:pl-4">
                    <div
                      data-animate-item
                      className="inline-flex items-center font-['Manrope'] justify-center gap-[0.3188rem] rounded-[2.6562rem] bg-[#F0F3FF] px-3 sm:px-4 py-2 w-auto sm:w-[11.333rem] h-auto sm:h-[2.4437rem] text-[0.7438rem] sm:text-[0.85rem] md:text-[0.9563rem] leading-[100%] font-bold text-[#132436]"
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-[#5B7CF5] inline-block"></div>
                      <div className="inline-block">Let's get in touch</div>
                    </div>


                    <div className="flex gap-3 flex-col">
                      <h3
                        data-animate-item
                        style={{ transitionDelay: "0.12s" }}
                        className="home-subtitle-actionpage  text-[#132436] font-['Inter']"
                      >
                        Comprehensive Personal &{" "}
                        <br className="hidden sm:block" />
                        Business
                        <span className="align-middle inline-flex items-center justify-center mx-2 relative -top-px">
                          <img
                            src="/images/setting-orange-1.svg"
                            alt=""
                            className=" w-[2.4437rem] h-[2.4437rem]"
                          />
                        </span>
                        Email Validation
                      </h3>

                      <p
                        data-animate-item
                        style={{ transitionDelay: "0.18s" }}
                        className="actionpage-description text-[18px]  text-[#546779] font-['Manrope'] max-w-[29.8023rem]"
                      >
                        Verify up to 10 emails instantly without sign-up just
                        enter an email, click Verify, and repeat. Explore bulk
                        validation, verification history, and all platform features
                        with unlimited access and no credits required.
                      </p>
                    </div>
                  </div>

                  <button
                    data-animate-item
                    style={{ transitionDelay: "0.25s" }}
                    data-hover="lift"
                    className="inline-flex mb-7 items-center pl-4 font-['Manrope'] gap-2 text-[#EB3609] font-bold text-[1.1688rem] leading-7 sm:text-[1.1688rem]  md:leading-[1.5938rem] capitalize cursor-pointer"
                  >
                    <span>Checkout Our Deals</span>
                    <span className="flex items-center justify-center ">
                      <img
                        src="/images/right-orange-arrow.svg"
                        alt="Right arrow icon"
                        className="w-4 h-3"
                      />
                    </span>
                  </button>
                </div>

                {/* Right panel (widget) sized 600x490 at 724/42 */}
                <div className="md:ps-7 md:border-l border-[#13243617]">
                  <div className="relative mx-auto h-auto min-h-[21.2494rem] sm:min-h-[23.9056rem] lg:h-[26.0305rem] lg:mx-0 w-full max-w-full bg-[#132436] rounded-[1.0625rem] sm:rounded-[1.275rem] p-3 sm:p-4 md:p-6 flex flex-col items-center gap-3 sm:gap-4 md:gap-[1.5938rem]">
                    {/* Top icon */}
                    <div
                      data-animate-item
                      className="mt-2 sm:mt-3 relative w-[2.5499rem] h-[2.5499rem] sm:w-[4.1437rem] sm:h-[4.1437rem] rounded-full bg-white shadow-sm"
                    >
                      <img src="/images/email-icon.svg" alt="Email" className="absolute left-[55%] top-[52%] -translate-x-1/2 -translate-y-1/2 w-[1.5938rem] h-[1.5938rem] sm:w-[2.5898rem] sm:h-[2.0718rem] object-contain" />
                    </div>

                    {/* Title */}
                    <h4
                      data-animate-item
                      style={{ transitionDelay: "0.08s" }}
                      className="
    font-['Inter'] 
    font-semibold 
    text-[1.0625rem]
    sm:text-[1.275rem]
    md:text-[1.4875rem]
    lg:text-[1.6999rem] 
    leading-[1.4]
    sm:leading-[1.5]
    tracking-[-0.01em]
    sm:tracking-[-0.005em]
    md:tracking-[-0.01em]
    lg:tracking-[-0.015em] 
    text-center 
    text-white
    px-2
  "
                    >
                      Verify Personal & Business
                      <br className="hidden sm:block" />
                      Emails Instantly
                    </h4>



                    {/* Subtitle */}
                    <p
                      data-animate-item
                      style={{ transitionDelay: "0.15s" }}
                      className="
    font-['Manrope']
    font-medium
    text-[0.7438rem]
    sm:text-[0.85rem]
    md:text-[1.0625rem]
    lg:text-[1.1rem]
    leading-[1.5]
    sm:leading-[1.6]
    md:leading-[1.7]
    lg:leading-[1.9656rem]
    text-center
    text-[#546779]
    opacity-70
    max-w-[26.0305rem]
    px-2 sm:px-4
  "
                    >
                      Check up to 10 emails for free — no sign-up required.
                    </p>


                    {/* Input group */}
                    <div className="w-full px-2">
                      <div
                        data-animate-item
                        style={{ transitionDelay: "0.2s" }}
                        className="mx-auto w-full mb-4 max-w-[26.9867rem] bg-white rounded-[5.8436rem] h-[2.5499rem] sm:h-[3.9842rem] flex items-center shadow-[0_0.125rem_0_0_#0000000A] border border-[#E6E8EB] overflow-hidden"
                      >
                        <input
                          type="email"
                          placeholder="Email Address..."
                          className="flex-1 min-w-0 h-full px-3 sm:px-4 md:px-5 text-[0.7438rem] sm:text-[0.85rem] md:text-[0.9563rem] lg:text-[1rem] placeholder:text-[#9AA6B2] text-[#3A4A5A] font-medium outline-none bg-transparent"
                          aria-label="Email address"
                        />
                        <button
                          type="button"
                          className="
    inline-flex items-center justify-center 
    font-['Manrope'] font-semibold 
    text-[0.7438rem]
    sm:text-[0.85rem]
    md:text-[0.9563rem]
    lg:text-[1rem]
    tracking-[-0.01em]
    sm:tracking-[-0.01em]
    md:tracking-[-0.01em]
    lg:tracking-[-0.01em]
    text-white 
    bg-[#EB3609] hover:bg-[#FF6B35] 
    rounded-[2.6562rem] 
    px-4
    sm:px-6
    md:px-8
    lg:px-[1.7531rem]
    py-3
    sm:py-4
    md:py-5
    lg:py-[0.9563rem]
    h-auto
    sm:h-[2.6562rem]
    md:h-[2.9749rem]
    lg:h-[3.3467rem]
    transition-colors cursor-pointer
    mr-1.5
  "
                        >
                          Verify Now
                        </button>


                      </div>
                    </div>

                    {/* bottom spacing */}
                    {/* <div className="mb-4" /> */}
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
