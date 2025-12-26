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
            className="relative w-full max-w-full mx-auto rounded-[24px] overflow-hidden bg-no-repeat bg-cover bg-center mb-2"
            style={{
              backgroundImage: "url('/images/email-finder-footer-bg-img.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 1,
            }}
          >
            <div className="w-full flex justify-center  overflow-visible">
              <div
                className="w-full h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-8 sm:pt-10 md:pt-12 lg:pt-16 xl:pt-20 2xl:pt-24 flex flex-col md:flex-row items-center justify-start pb-0"
                style={{ zIndex: 2 }}
              >
                {/* Text Content Section */}
                <div className="w-full md:flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
                  <div className="w-full flex flex-col gap-5 sm:gap-6 md:gap-8 items-center md:items-start">
                    <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 w-full">
                      <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 w-full items-center md:items-start">
                        <h1
                          data-animate-item
                          className="home-title max-w-[450px] md:max-w-[600px] text-white capitalize font-['Inter'] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[44px] leading-[1.2] sm:leading-[1.15]"
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
                          className="home-description text-[#546779] font-['Manrope'] text-[14px] sm:text-[15px] md:text-[16px] max-w-[500px] md:max-w-none leading-[1.6] mt-2 sm:mt-3"
                        >
                          Use your free credits for both finding and verifying
                          emails.
                        </p>
                      </div>
                    </div>

                    <div
                      data-animate-item
                      style={{ transitionDelay: "0.2s" }}
                      className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-full max-w-[800px] justify-center md:justify-start mt-2 sm:mt-3"
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

            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
              <div className="w-full max-w-full mx-auto mt-6 sm:mt-8 md:mt-10 lg:mt-12 flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6">
                <div className="flex-1 rounded-[16px] bg-[#1C2D3E] py-4 sm:py-5 md:py-6 px-4 sm:px-6 md:px-8 flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-7">
                  <div className="text-white font-extrabold text-[30px] sm:text-[36px] md:text-[42px] leading-[1.1]">
              <img src="/images/footer-logo.png" alt="Zupito" className="h-6 sm:h-7 md:h-[30px] lg:h-[34.5px] w-auto" />
                  </div>
                  <p className="text-[#546779] text-[15px] sm:text-[16px] md:text-[18px] leading-[1.6] max-w-[760px] font-['Manrope']">
                    From dynamic visuals to interactive features, our software
                    empowers you to craft a website tailored to every need.
                  </p>
                </div>

                <div className="w-full lg:w-auto grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
                  {[
                    { label: "Facebook", icon: "/images/FB.svg" },
                    { label: "Linked In", icon: "/images/Linkedin.svg" },
                    { label: "Twitter", icon: "/images/Twitter.svg" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="rounded-[16px] bg-[#1C2D3E] flex flex-col items-center justify-center gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 cursor-pointer"
                    >
                      <div className="w-[37.5px] h-[37.5px] rounded-full flex items-center justify-center">
                        <img
                          src={s.icon}
                          alt={s.label}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <div className="text-[#546779] text-[15px] sm:text-[18px]">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full max-w-full mx-auto rounded-[16px] bg-[#1C2D3E] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 py-6 sm:py-8 md:py-10 lg:py-12">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-14 text-white">
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
                    <div key={col.title} className="flex flex-col gap-4 sm:gap-5 md:gap-6">
                      <h3 className="font-bold text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] tracking-[-0.32px] capitalize leading-[1.3]">
                        {col.title}
                      </h3>
                      <ul className="flex flex-col gap-3 sm:gap-4 md:gap-5 opacity-90">
                        {col.items.map((it) => (
                          <li
                            key={it}
                            className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[1.5] cursor-pointer"
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

            <div className="w-full max-w-full mx-auto text-center text-white text-[14px] sm:text-[15px] lg:text-[16px] py-6 sm:py-8 md:py-10 leading-[1.5]">
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