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
        <div className="mx-auto max-w-[1800px] px-4 flex justify-center">
          <div
            className="relative w-full max-w-full mx-auto rounded-[24px] overflow-hidden bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/email-finder-footer-bg-img.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 1,
            }}
          >
            <div className="w-full flex justify-center  overflow-visible">
              <div
                className="w-full h-full px-6! sm:px-8! md:px-12! lg:px-16! xl:px-24! 2xl:px-32! pt-6! sm:pt-8! md:pt-12! lg:pt-16! xl:pt-24! 2xl:pt-32! flex flex-col md:flex-row items-center justify-start pb-0!"
                style={{ zIndex: 2 }}
              >
                {/* Text Content Section */}
                <div className="w-full md:flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
                  <div className="w-full flex flex-col gap-6 sm:gap-[30px] items-center md:items-start">
                    <div className="flex flex-col gap-8 sm:gap-[40px] w-full">
                      <div className="flex flex-col gap-4 sm:gap-[16px] w-full items-center md:items-start">
                        <h1
                          data-animate-item
                          className="home-title max-w-[450px] md:max-w-[600px] text-white capitalize font-['Inter'] text-[32px]! sm:text-[36px]! md:text-[40px]! xl:text-[44px]!"
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
                          className="home-description text-[#546779] font-['Manrope'] text-[14px] md:text-[16px] max-w-[500px] md:max-w-none"
                        >
                          Use your free credits for both finding and verifying
                          emails.
                        </p>
                      </div>
                    </div>

                    <div
                      data-animate-item
                      style={{ transitionDelay: "0.2s" }}
                      className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-6 w-full max-w-[800px] pt-4! sm:pt-6! pb-4! sm:pb-6! px-4! justify-center md:justify-start"
                    >
                      <button
                        data-hover="lift"
                        className="w-full sm:w-auto h-[50px] sm:h-[54px] font-['Inter'] md:h-[58px] lg:h-[62px] px-6! sm:px-8! md:px-10! rounded-[50px] bg-[#EB3609] hover:bg-[#FF6B35] text-white text-[14px] md:text-[16px] font-semibold whitespace-nowrap inline-flex items-center justify-center gap-2 sm:gap-3 transition-colors cursor-pointer"
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
                        className="text-white font-['Manrope'] text-[14px] md:text-[16px] font-semibold flex items-center gap-2 hover:text-[#EDFF67] transition-colors cursor-pointer"
                      >
                        <span>Claim 300 free credits</span>
                        <img
                          src="/images/right-arrow.svg"
                          alt="Right arrow icon"
                          className="w-4 h-4 sm:w-5 sm:h-5 mt-1 shrink-0"
                        />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-auto shrink-0 flex items-center justify-center md:justify-end relative">
                  <div
                    className="relative w-full flex items-center justify-center overflow-visible"
                    style={{ maxWidth: "clamp(200px, 35vw, 350px)" }}
                  >
                    {/* Mobile Image */}
                    <img
                      src="/images/footer-image-responsive.png"
                      alt="Promotional"
                      className="block lg:hidden w-[180px] sm:w-[220px]"
                    />

                    {/* Desktop Image */}
                    <img
                      src="/images/footer-image.svg"
                      alt="Promotional"
                      className="hidden lg:block w-full max-w-full"
                    />
                  </div>
                </div>

              </div>
            </div>

            <div className="flex flex-col gap-4 px-6! sm:px-8! md:px-12! lg:px-16! xl:px-24! 2xl:px-32!">
              <div className="w-full max-w-full mx-auto mt-6! md:mt-8! lg:mt-12! flex flex-col lg:flex-row gap-4">
                <div className="flex-1 rounded-[16px] bg-[#1C2D3E] py-3! md:py-5! px-8! flex flex-col gap-5! md:gap-7!">
                  <div className="text-white font-extrabold text-[30px] sm:text-[36px] md:text-[42px] leading-[110%]">
                    Zupitu
                  </div>
                  <p className="text-[#546779] text-[15px] sm:text-[17px] md:text-[19px] lg:text-[20px] leading-[28px] md:leading-[32px] max-w-[760px] font-['Manrope']">
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
                      <div className="text-[#546779] text-[15px] sm:text-[17px] md:text-[19px] lg:text-[20px]">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full max-w-full mx-auto rounded-[16px] bg-[#1C2D3E] px-6! md:px-[52px]! py-8! md:py-[50px]!">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 lg:gap-14 text-white">
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
                    <div key={col.title} className="flex flex-col gap-5 md:gap-6">
                      <h3 className="font-bold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] tracking-[-0.32px] capitalize">
                        {col.title}
                      </h3>
                      <ul className="flex flex-col gap-4 md:gap-5 opacity-90">
                        {col.items.map((it) => (
                          <li
                            key={it}
                            className="text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] leading-[130%] cursor-pointer"
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