import React, { useState } from 'react'
import useScrollReveal from '../../hooks/useScrollReveal'

const FAQsPage = () => {
  const sectionRef = useScrollReveal()
  const [openIndex, setOpenIndex] = useState(3) // Start with 4th question open

  const faqs = [
    {
      question: "Is it legal to use an email finder?",
      answer: "Zupitu delivers one of the highest accuracy rates in the industry. Every email is verified in real time using multiple validation checks such as syntax, domain, MX records, and disposable email detection."
    },
    {
      question: "Can I find emails in bulk?",
      answer: "Zupitu delivers one of the highest accuracy rates in the industry. Every email is verified in real time using multiple validation checks such as syntax, domain, MX records, and disposable email detection."
    },
    {
      question: "What happens if no email is found?",
      answer: "Zupitu delivers one of the highest accuracy rates in the industry. Every email is verified in real time using multiple validation checks such as syntax, domain, MX records, and disposable email detection."
    },
    {
      question: "How accurate are the emails you find?",
      answer: "Zupitu delivers one of the highest accuracy rates in the industry. Every email is verified in real time using multiple validation checks such as syntax, domain, MX records, and disposable email detection."
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
      {/* Outer container with responsive padding */}
      <div className="home-container py-8 lg:py-10">
        <div className="w-full mx-auto relative">
          {/* Header Section - max-width 85.125rem */}
          <div className="w-full">
            {/* FAQ Tag - width: 5.3125rem, height: 3.0625rem */}
            <div
              data-animate-item
              className="inline-flex items-center justify-center gap-[0.3188rem] rounded-[2.6562rem] bg-[#F6F6F6] px-3 py-2 h-[1.8063rem]"
            >
              <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
              <span className="text-[#132436] font-['Manrope'] font-bold text-[0.7438rem] leading-[100%] text-center">FAQ</span>
            </div>

            {/* Title Section - width: 85.125rem, height: 14.9375rem, justify-content: space-between */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-[1.1156rem] !mt-2 h-auto">
              {/* Left side - Title with icons - width: 35.5rem, height: 14.9375rem, gap: 1.3125rem */}
              <div className="flex-1 max-w-[30.1741rem]">
                <h2
                  data-animate-item
                  style={{ transitionDelay: "0.08s" }}
                  className="home-title text-[#132436] font-['Inter'] font-bold"
                >
                  <span className="inline-flex items-center gap-2">
                    {/* Green Checkmark Icon */}
                    <img src="/images/faq.svg" alt="" className="w-[2.1249rem] h-[2.1249rem] sm:w-[2.6562rem] sm:h-[2.6562rem] md:w-[3.3999rem] md:h-[3.3999rem] shrink-0" />
                    Frequently
                  </span>
                  <br className="hidden sm:block" />
                  <span className="inline-flex items-center gap-2">
                    Asked Questions
                    {/* Purple Question Mark Icon */}
                    <img src="/images/faq2.svg" alt="" className="w-[2.1249rem] h-[2.1249rem] sm:w-[2.6562rem] sm:h-[2.6562rem] md:w-[3.1874rem] md:h-[3.1874rem] shrink-0" />
                  </span>
                </h2>
              </div>

              {/* Right side - Description and Questions */}
              <div className="flex-1 lg:max-w-none">
                <p
                  data-animate-item
                  style={{ transitionDelay: "0.15s" }}
                  className="home-description text-[#546779] mb-8 lg:mb-[2.1249rem]"
                >
                  If you're new or looking for answers to your questions, this guide will help you learn more about our services and their features.
                </p>

                {/* FAQ Items Section */}
                <div className="max-w-full">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="w-full"
                      style={index > 0 ? { borderTop: '0.0625rem solid var(--color-grey-85, #D5D7DA)' } : undefined}
                    >
                      {/* FAQ Item */}
                      <div
                        data-animate-item
                        style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
                        className="w-full py-8 lg:py-[1.0625rem] flex items-center justify-between cursor-pointer transition-colors hover:bg-gray-50/50"
                        onClick={() => toggleFAQ(index)}
                      >
                        <div className="flex-1 pr-4">
                          <h3 className="text-[20.4px] font-semibold text-[#132436] font-['Manrope'] capitalize">
                            {index + 1}. {faq.question}
                          </h3>
                        </div>

                        {/* Toggle Button */}
                        <button
                          data-hover="lift"
                          className={`shrink-0 w-[2.6562rem] h-[1.8063rem] rounded-[2.6562rem] flex items-center justify-center transition-all duration-300 cursor-pointer ${openIndex === index
                            ? 'bg-[#132436]'
                            : 'bg-[#F6F6F6]'
                            }`}
                          aria-label={openIndex === index ? 'Collapse answer' : 'Expand answer'}
                          type="button"
                        >
                          {openIndex === index ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-5 h-5 sm:w-6 sm:h-6">
                              <path d="M19 13H5v-2h14v2z" fill="white" />
                            </svg>
                          ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-5 h-5 sm:w-6 sm:h-6">
                              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="#132436" />
                            </svg>
                          )}
                        </button>
                      </div>

                      {/* Answer Section */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[26.5617rem] opacity-100' : 'max-h-0 opacity-0'
                          }`}
                      >
                        <div className="px-6 lg:px-[2.1249rem] pb-8 lg:pb-12">
                          <p className="text-[0.85rem] sm:text-[0.9563rem] font-normal text-[#747C9A] font-['Manrope'] max-w-full">
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
        </div>
      </div>
    </section>
  )
}

export default FAQsPage
