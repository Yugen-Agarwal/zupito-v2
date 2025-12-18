import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

const Footer = () => {
  const sectionRef = useScrollReveal();

  return (
    <>
      <section
        ref={sectionRef}
        data-animate="fade-up"
        className="relative w-full overflow-hidden bg-transparent"
      >
        <div className="w-full flex justify-center px-6! py-6! sm:py-6! md:py-6!">
          <div
            className="relative w-full max-w-full mx-auto rounded-[24px] overflow-hidden bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/email-finder-footer-bg-img.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 1,
            }}
          >
            <div className="w-full flex justify-center px-6 overflow-visible">
              <div
                className="w-full h-full px-4! sm:px-6! md:px-10! lg:px-14! xl:px-22! 2xl:px-[130px]! py-8 sm:py-10 md:py-12 lg:py-14 flex flex-col lg:flex-row items-center justify-start pb-0!"
                style={{ zIndex: 2 }}
              >
                <div className="w-full lg:flex-1 flex flex-col justify-center">
                  <div className="w-full flex flex-col gap-6 sm:gap-[30px]">
                    <div className="flex flex-col gap-8 sm:gap-[40px]">
                      <div className="flex flex-col gap-4 sm:gap-[16px]">
                        <h1
                          data-animate-item
                          className="home-title lg:max-w-[600px] text-white capitalize font-['Inter'] text-[40px]! xl:text-[44px]!"
                        >
                          Sign Up For{" "}
                          <span
                            style={{
                              fontFamily: "Inter",
                              fontWeight: 700,
                              color: "#FFDD47",
                            }}
                          >
                            300 Free Credits
                          </span>{" "}
                          With Unlimited Validity
                        </h1>

                        <p
                          data-animate-item
                          style={{ transitionDelay: "0.08s" }}
                          className="home-description text-[#546779] font-['Manrope'] text-[14px] lg:text-[16px]"
                        >
                          Use your free credits for both finding and verifying
                          emails.
                        </p>
                      </div>
                    </div>

                    <div
                      data-animate-item
                      style={{ transitionDelay: "0.2s" }}
                      className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-6 w-full max-w-[800px] pt-4! sm:pt-6! pb-4! sm:pb-6! px-4!"
                    >
                      <button
                        data-hover="lift"
                        className="w-full sm:w-auto h-[50px] sm:h-[54px] font-['Inter'] md:h-[58px] lg:h/[62px] px-6! sm:px-8! md:px-10! rounded-[50px] bg-[#EB3609] hover:bg-[#FF6B35] text-white text-[14px] lg:text-[16px] font-semibold whitespace-nowrap inline-flex items-center justify-center gap-2 sm:gap-3 transition-colors cursor-pointer"
                      >
                        <span>Checkout Details</span>
                        <img
                          src="/images/right-arrow.svg"
                          alt="Right arrow icon"
                          className="w-4 h-4 sm:w-5 sm:h-5"
                        />
                      </button>
                      <button
                        data-hover="lift"
                        className="text-white font-['Manrope'] text-[14px] lg:text-[16px] font-semibold flex items-center gap-2 hover:text-[#EDFF67] transition-colors cursor-pointer"
                      >
                        <span>Claim 300 free credits</span>
                        <img
                          src="/images/right-arrow.svg"
                          alt="Right arrow icon"
                          className="w-4 h-4 sm:w-5 sm:h-5 mt-1"
                        />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-auto shrink-0 flex items-center justify-center lg:justify-end">
                  <div
                    className="relative w-full hidden lg:flex items-center justify-center overflow-visible"
                    style={{ maxWidth: "clamp(200px, 25vw, 350px)" }}
                  >
                    <img
                      src="/images/footer-image.svg"
                      alt="Promotional"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 px-6! sm:px-8! md:px-12! lg:px-16! xl:px-24! 2xl:px-[150px]!">
              <div className="w-full max-w-full mx-auto mt-6! md:mt-8! lg:mt-12! flex flex-col lg:flex-row gap-4">
                <div className="flex-1 rounded-[16px] bg-[#1C2D3E] py-2! md:py-4! px-8! flex flex-col gap-4! md:gap-6!">
                  <div className="text-white font-extrabold text-[28px] sm:text-[34px] md:text-[40px] leading-[100%]">
                    Zupitu
                  </div>
                  <p className="text-white text-[14px] lg:text-[16px] sm:text-[16px] md:text-[16px] leading-[28px] md:leading-[34px] max-w-[722px] font-['Manrope']">
                    From dynamic visuals to interactive features, our software
                    empowers you to craft a website tailored to every need.
                  </p>
                </div>

                <div className="w-full lg:w-auto grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-4">
                  {[
                    { label: "Facebook", icon: "/images/FB.svg" },
                    { label: "Linked In", icon: "/images/Linkedin.svg" },
                    { label: "Twitter", icon: "/images/Twitter.svg" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="rounded-[16px] bg-[#1C2D3E] flex flex-col items-center justify-center gap-4 p-6! cursor-pointer"
                    >
                      <div className="w-[37.5px] h-[37.5px] rounded-full flex items-center justify-center">
                        <img
                          src={s.icon}
                          alt={s.label}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <div className="text-white text-[16px] md:text-[16px]">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full max-w-full mx-auto rounded-[16px] bg-[#1C2D3E] px-6! md:px-[52px]! py-8! md:py-[50px]!">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-[60px] text-white">
                  {[
                    {
                      title: "Product",
                      items: [
                        "Email Verifier",
                        "Email Finder",
                        "Phone Verification",
                        "Pricing",
                      ],
                    },
                    {
                      title: "Resources",
                      items: ["Documentation", "Helpdesk & FAQ", "Blog"],
                    },
                    {
                      title: "Use Cases",
                      items: ["Lead Generation", "Offers"],
                    },
                    { title: "Company", items: ["Terms", "Contact Us"] },
                  ].map((col) => (
                    <div key={col.title} className="flex flex-col gap-4">
                      <h3 className="font-bold text-[14px] sm:text-[16px] md:text-[20px] tracking-[-0.32px] capitalize">
                        {col.title}
                      </h3>
                      <ul className="flex flex-col gap-3 md:gap-4 opacity-90">
                        {col.items.map((it) => (
                          <li
                            key={it}
                            className="text-[14px] lg:text-[16px] leading-[100%] cursor-pointer"
                          >
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full max-w-full mx-auto text-center text-white text-[14px] lg:text-[16px] py-10!">
              © 2025 Zupitu.{" "}
              <span className="text-white/70">All Rights Reserved.</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
