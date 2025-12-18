import { useEffect, useRef, useState } from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

const ROTATING_WORDS = ["Find", "Verify", "Connect"];
const ROTATION_INTERVAL = 2600;
const FADE_DURATION = 260;

function HeroSection() {
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const fadeTimeoutRef = useRef(null);
  const rotateIntervalRef = useRef(null);
  const sectionRef = useScrollReveal({ rootMargin: "0 0 -10% 0" });

  useEffect(() => {
    rotateIntervalRef.current = setInterval(() => {
      setIsFading(true);
      fadeTimeoutRef.current = setTimeout(() => {
        setActiveWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        setIsFading(false);
      }, FADE_DURATION);
    }, ROTATION_INTERVAL);

    return () => {
      clearInterval(rotateIntervalRef.current);
      clearTimeout(fadeTimeoutRef.current);
    };
  }, []);

  return (
    <main className="relative w-full bg-white">
      {/* Hero Section */}
      <section
        ref={sectionRef}
        className="relative w-full overflow-hidden "
      >
        {/* Dots/backdrop spacing wrapper to mimic Figma breathing room */}
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pb-10">
          <div className="max-w-full lg:max-w-[1250px] mx-auto relative">
            <div
              className="grid grid-cols-1 lg:grid-cols-2 
              items-center lg:items-start  lg:gap-x-8
               [@media(min-width:64rem)_and_(max-width:79.9375rem)]:min-h-[calc(100vh-7.5rem)] "
            >
              {/* Copy */}
              <div className="max-w-full lg:max-w-[600px] flex flex-col items-start sm:items-center lg:items-start  pt-4 sm:pt-8 md:pt-10 lg:pt-18 xl:pt-24">
                <h1
                  data-animate-item
                  style={{ transitionDelay: "0.05s" }}
                  className="home-main-title text-[2.5rem] sm:text-[2.8rem] md:text-[3rem] lg:text-[3.4rem] xl:text-[3rem] leading-[1.08] text-[#132436] font-bold font-['Inter']"
                >
                  {/* Line 1: AI Tool To Connect */}
                  <span className="block sm:whitespace-nowrap">
                    <span>AI Tool To </span>
                    <span
                      aria-live="polite"
                      className={`inline-block text-[#EB3609] font-extrabold transition-all duration-300 ease-in-out transform ${isFading ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
                        }`}
                    >
                      {ROTATING_WORDS[activeWordIndex]}
                    </span>
                  </span>

                  {/* Line 2: Emails [badge] Instantly */}
                  <span className="block sm:whitespace-nowrap flex items-center flex-wrap mt-2">
                    <span>Emails</span>
                    <span className="inline-flex items-center justify-center mx-2 relative top-[-2px]">
                      <img
                        src="/images/load.svg"
                        alt=""
                        className="w-[1.5rem] h-[1.5rem] sm:w-[1.9rem] sm:h-[1.9rem] md:w-[2.55rem] md:h-[2.55rem] lg:w-[2.97rem] lg:h-[2.97rem] xl:w-[3.6rem] xl:h-[3.6rem]"
                      />
                    </span>
                    <span>Instantly</span>
                  </span>
                </h1>
                <p
                  data-animate-item
                  style={{ transitionDelay: "0.15s" }}
                  className="home-description text-[#546779] text-[14px] sm:text-[16px] md:text-[18px] leading-[1.65] font-['Manrope'] max-w-full sm:max-w-[26rem] mt-6 sm:mt-7"
                >
                  Simplify outreach with Zupitu's AI Email Verifier & Finder – validate emails, find business contacts, and boost deliverability.
                </p>


                {/* CTAs */}
                <div
                  data-animate-item
                  style={{ transitionDelay: "0.25s" }}
                  className="flex flex-wrap items-center gap-4 sm:gap-5 md:gap-6 mt-9 sm:mt-10"
                >
                  <button
                    data-hover="lift"
                    className="rounded-[1.6999rem] sm:rounded-[2.0187rem] lg:rounded-[2.3374rem] whitespace-nowrap font-['Inter'] bg-[#EB3609] hover:bg-[#FF6B35] text-white font-semibold transition-colors flex items-center gap-2 justify-center shadow-sm w-full sm:w-auto sm:min-w-[9.031rem] h-[2.5499rem] sm:h-[2.6562rem] lg:h-[2.7624rem] px-4 sm:px-5 py-2 text-[0.7438rem] sm:text-[0.7968rem] lg:text-[0.85rem] cursor-pointer"
                  >
                    Checkout Deals
                    <img
                      src="/images/right-arrow.svg"
                      alt="Right arrow icon"
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    />
                  </button>

                  <button
                    data-hover="lift"
                    className="text-[#3A4A5A] whitespace-nowrap font-['Manrope'] font-semibold flex items-center gap-2 hover:text-[#EB3609] transition-colors text-[0.7438rem] sm:text-[0.7968rem] lg:text-[0.85rem] cursor-pointer"
                  >
                    <span>Claim 300 free credits</span>
                    <img
                      src="/images/right-arrow.svg"
                      alt="Right arrow icon"
                      className="w-5 h-5"
                      style={{
                        filter:
                          "invert(29%) sepia(8%) saturate(576%) hue-rotate(178deg) brightness(10%) contrast(87%)",
                      }}
                    />
                  </button>
                </div>

                <div className="mt-6 sm:mt-8 md:mt-10 mb-4 w-full max-w-[32.9365rem] h-px bg-linear-to-l from-transparent to-[#666666]/20" />

                {/* Trust bullets */}
                <div className="mt-2 sm:mt-4 md:mt-6 flex items-center gap-3 flex-wrap">
                  <div
                    data-animate-item
                    style={{ transitionDelay: "0.35s" }}
                    className="flex items-center gap-[0.5313rem] h-[2.3374rem] rounded-[2.6562rem] bg-[#FCFCFD] border border-[#EEF0F3] px-3 py-2 cursor-pointer"
                    data-hover="lift"
                  >
                    <span className="inline-flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full  text-white">
                      <img
                        src="/images/check-orange.svg"
                        alt="Checkmark icon"
                        className="w-3 h-3 sm:w-3.5 sm:h-3.5"
                      />
                    </span>
                    <span className="text-[0.85rem] whitespace-nowrap  font-['Manrope'] font-semibold leading-[120%] tracking-[0] text-[#2E3E50]">
                      Flexible solution
                    </span>
                  </div>

                  <div
                    data-animate-item
                    style={{ transitionDelay: "0.4s" }}
                    className="flex items-center gap-[0.5313rem] h-[2.3374rem] rounded-[2.6562rem] bg-[#FCFCFD] border border-[#EEF0F3] px-3 py-2 cursor-pointer"
                    data-hover="lift"
                  >
                    <span className="inline-flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full text-white">
                      <img
                        src="/images/check-orange.svg"
                        alt="Checkmark icon"
                        className="w-3 h-3 sm:w-3.5 sm:h-3.5"
                      />
                    </span>
                    <span className="text-[0.85rem]  whitespace-nowrap  font-['Manrope'] font-semibold leading-[120%] tracking-[0] text-[#2E3E50]">
                      No credit card required
                    </span>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div
                data-animate-item="scale"
                style={{ transitionDelay: "0.35s" }}
                className="order-1 lg:order-last relative lg:pt-0"
              >
                <div className="lg:absolute lg:right-0 full h-[15.937rem] sm:h-[20.1869rem] md:h-[23.9056rem] lg:h-[26.5617rem] xl:h-[31.8741rem] 2xl:h-[36.1239rem]">
                  <img
                    src="/images/Frame 1321317782.png"
                    alt="Zupito email automation flow"
                    className="w-full h-full object-contain select-none pointer-events-none [image-rendering:auto]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HeroSection;