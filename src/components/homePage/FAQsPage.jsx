import React, { useState } from 'react'
import useScrollReveal from '../../hooks/useScrollReveal'

const FAQsPage = () => {
  const sectionRef = useScrollReveal()
  const [openIndex, setOpenIndex] = useState(3)

  const faqs = [
    {
      question: "Is it legal to use an email finder?",
      answer:
        "Zupitu delivers one of the highest accuracy rates in the industry. Every email is verified in real time using multiple validation checks such as syntax, domain, MX records, and disposable email detection."
    },
    {
      question: "Can I find emails in bulk?",
      answer:
        "Zupitu delivers one of the highest accuracy rates in the industry. Every email is verified in real time using multiple validation checks such as syntax, domain, MX records, and disposable email detection."
    },
    {
      question: "What happens if no email is found?",
      answer:
        "Zupitu delivers one of the highest accuracy rates in the industry. Every email is verified in real time using multiple validation checks such as syntax, domain, MX records, and disposable email detection."
    },
    {
      question: "How accurate are the emails you find?",
      answer:
        "Zupitu delivers one of the highest accuracy rates in the industry. Every email is verified in real time using multiple validation checks such as syntax, domain, MX records, and disposable email detection."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      ref={sectionRef}
      data-animate="fade-up"
      className="relative w-full"
      style={{ background: 'var(--color-white-solid, #FFFFFF)' }}
    >
      {/* ✅ Reduced mobile padding */}
      <div className="home-container py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20">
        <div className="w-full mx-auto relative">

          {/* ================= HEADER ================= */}
          <div className="w-full">

            <div
              data-animate-item
              className="inline-flex items-center justify-center gap-1 rounded-full bg-[#F6F6F6] px-3 py-2 h-[1.8063rem] mx-auto lg:mx-0 table"
            >
              <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
              <span className="text-[#132436] font-['Manrope'] font-bold text-[0.7438rem]">
                FAQ
              </span>
            </div>

            {/* ✅ Reduced gap & margin on mobile */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-4 sm:gap-5 md:gap-6 lg:gap-8 mt-3 sm:mt-4 md:mt-5 lg:mt-6">

              <div className="flex-1 max-w-[30.1741rem]">
                <h2
                  data-animate-item
                  style={{ transitionDelay: "0.08s" }}
                  className="home-title text-[#132436] font-['Inter'] font-bold text-center lg:text-left leading-[1.15]"
                >
                  <span className="inline-flex items-center">
                    <img
                      src="/images/faq.svg"
                      alt=""
                      className="mr-3 w-[2.1249rem] h-[2.1249rem] sm:w-[2.6562rem] sm:h-[2.6562rem] md:w-[3.3999rem] md:h-[3.3999rem] shrink-0"
                    />
                    <span>Frequently</span>
                  </span>
                  <br className="hidden sm:block" />
                  <span className="inline-flex items-center">
                    <span>Asked Questions</span>
                    <img
                      src="/images/faq2.svg"
                      alt=""
                      className="ml-3 w-[2.1249rem] h-[2.1249rem] sm:w-[2.6562rem] sm:h-[2.6562rem] md:w-[3.1874rem] md:h-[3.1874rem] shrink-0"
                    />
                  </span>
                </h2>
              </div>

              <div className="flex-1 max-w-[568px]">
                {/* ✅ Reduced bottom margin on mobile */}
                <p
                  data-animate-item
                  style={{ transitionDelay: "0.15s" }}
                  className="home-description mb-3 sm:mb-4 md:mb-5 lg:mb-6 text-center lg:text-left text-[#546779] leading-[1.6]"
                >
                  If you're new or looking for answers to your questions, this guide will help you learn more about our services and their features.
                </p>
              </div>
            </div>

            {/* ================= FAQ ITEMS ================= */}
            <div className="w-full mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-16">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="w-full"
                  style={
                    index > 0
                      ? { borderTop: '0.0625rem solid #D5D7DA' }
                      : undefined
                  }
                >
                  {/* ✅ Reduced vertical padding on mobile */}
                  <div
                    data-animate-item
                    style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
                    className="w-full py-4 sm:py-5 md:py-6 flex items-center justify-between cursor-pointer hover:bg-gray-50/50"
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex-1 pr-4 sm:pr-5 md:pr-6">
                      <h3 className="text-[0.95rem] sm:text-[1.05rem] md:text-[1.1rem] font-bold text-[#132436] font-['Manrope'] leading-[1.4]">
                        {index + 1}. {faq.question}
                      </h3>
                    </div>

                    <button
                      className={`shrink-0 w-[2.6562rem] h-[1.8063rem] rounded-full flex items-center justify-center transition-all duration-300 ${
                        openIndex === index ? 'bg-[#132436]' : 'bg-[#F6F6F6]'
                      }`}
                      type="button"
                    >
                      {openIndex === index ? (
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                          <path d="M19 13H5v-2h14v2z" />
                        </svg>
                      ) : (
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#132436]">
                          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                        </svg>
                      )}
                    </button>
                  </div>

                  {/* ✅ Padding only when open */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index
                        ? 'max-h-[26.5617rem] opacity-100 py-3 sm:py-4 md:py-5'
                        : 'max-h-0 opacity-0 py-0'
                    }`}
                  >
                    <div className="px-4 sm:px-5 md:px-6 lg:px-8">
                      <p className="text-[0.9375rem] sm:text-[1rem] text-[#747C9A] font-['Manrope'] leading-[1.6]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQsPage
