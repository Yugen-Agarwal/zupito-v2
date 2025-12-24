import React from 'react'
import useScrollReveal from '../../hooks/useScrollReveal'

const EmailFinderWorks = () => {
  const sectionRef = useScrollReveal()

  const steps = [
    {
      number: '01',
      chipLabel: '300 free credits on signup',
      title: 'Signup Credits',
      description:
        '300 free credits at signup with month on month top-up to keep the wallet loaded with 300 credits monthly.',
    },
    {
      number: '02',
      chipLabel: 'Manage credits anytime',
      title: 'Access On The Go',
      description:
        'Access the system on the go on mobile, laptop, and tablet. You can work, manage teams, credits.',
    },
    {
      number: '03',
      chipLabel: 'No hidden costs',
      title: 'Free Platform Features',
      description:
        'Access advanced features like API integration & team management at no additional cost.',
    },
  ]

  return (
    <section
      ref={sectionRef}
      data-animate="fade-up"
      className="relative w-full bg-[#FFFDFD]"
      style={{ overflow: 'visible', minHeight: 'auto', paddingBottom: '0' }}
    >
      {/* Outer container spacing mirrors other homepage sections */}
      <div
        className="home-container py-8 lg:py-10"
        style={{ overflow: 'visible', minHeight: 'auto' }}
      >
        <div className="w-full mx-auto relative overflow-visible">
          {/* Header */}
          <div className="text-center">
            <div
              data-animate-item
              className="inline-flex font-['Manrope'] items-center justify-center gap-[0.3188rem] rounded-[2.6562rem] bg-[#FFE9F2] px-3 py-2 h-[1.8063rem] text-[0.7438rem] leading-[100%] font-bold text-[#132436]"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#7B8DFF]" />
              <span>Type Something</span>
            </div>

            <h2
              data-animate-item
              style={{ transitionDelay: '0.08s' }}
              className="home-title !mt-3 text-[#132436] font-['Inter'] font-bold text-center"
            >
              <span className="inline-block align-middle">
                How Our
                <span className="align-middle inline-flex items-center justify-center mx-2 relative -top-[0.1063rem]">
                  <img
                    src="/images/setting-orange2.svg"
                    alt=""
                    className="w-[1.4875rem] h-[1.4875rem] md:w-[3.2937rem] md:h-[3.2937rem] ml-2"
                    loading="lazy"
                  />
                </span>
                Email Finder Works
              </span>
            </h2>

            <p
              data-animate-item
              style={{ transitionDelay: '0.15s' }}
              className="home-description !mt-2 !mb-6 lg:px-17 lg:!mb-2 text-[#546779] font-['Manrope'] text-center max-w-full mx-auto text-[19.5px]"
            >
              Most companies follow unique email patterns. Our tool detects these formats automatically, helping you uncover accurate contact details, even for large organizations.
            </p>
          </div>

          {/* Decorative connector graphic */}
          <div className="hidden lg:flex absolute justify-center w-full !mt-3 md:!mt-4 lg:!mt-4">
            <img
              src="/images/Group-bg.png"
              alt=""
              aria-hidden="true"
              className="pointer-events-none select-none w-[18.5933rem] sm:w-[5.3123rem] md:w-[37.1864rem] h-auto"
              loading="lazy"
            />
          </div>

          {/* Three different cards with background image per card */}
          <div className="relative flex justify-center bottom-0 lg:-bottom-40 !mb-8 md:!mb-12 lg:!mb-[7.4373rem]">
            <div className="relative mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3 w-full overflow-visible pb-2">
              {steps.map((step, idx) => {
                const baseDelay = 0.1 + idx * 0.08
                return (
                  <div
                    key={step.number}
                    data-animate-item
                    className="email-works-card relative w-full rounded-[2.5rem] border border-[#EEF0F3] shadow-[0_0.5rem_1.25rem_0_#6868681A] p-3 md:p-4 flex flex-col gap-[1.0625rem] bg-no-repeat bg-cover overflow-visible cursor-pointer"
                    style={{
                      transitionDelay: `${baseDelay}s`,
                      backgroundImage: "url('/images/7.png')",
                      height: 'auto',
                      minHeight: 'auto',
                      overflow: 'visible',
                    }}
                  >
                    <div
                      className="w-full flex justify-center !mt-[1.0625rem]"
                      data-animate-item="scale"
                      style={{ transitionDelay: `${baseDelay + 0.05}s` }}
                    >
                      <div className="email-works-number inline-flex items-center justify-center w-[2.8687rem] h-[2.2312rem] rounded-[0.3188rem] bg-white shadow-[0_0.125rem_0.375rem_#00000012]">
                        <span className="text-[#132436] font-['Inter'] font-bold text-[0.9563rem] md:text-[1.1688rem] tracking-[-0.05rem]">
                          {step.number}
                        </span>
                      </div>
                    </div>
                    <div
                      data-animate-item="scale"
                      data-hover="lift"
                      className="email-works-chip inline-flex items-center gap-3 bg-white rounded-[0.6375rem] justify-center shadow-[0_0.75rem_1.25rem_-0.5rem_#181D270D] px-4 py-3 cursor-pointer"
                      style={{ transitionDelay: `${baseDelay + 0.1}s` }}
                    >
                      <img src="/images/Tick.png" alt="checkmark" className="w-5 h-5" loading="lazy" />
                      <span className="text-[#3A4A5A] font-medium text-[0.85rem] font-['Manrope']">
                        {step.chipLabel}
                      </span>
                    </div>
                    <div
                      className="w-full rounded-[0.85rem] bg-white p-[1.1688rem] md:p-[1.3813rem] !mb-0 overflow-visible"
                      style={{
                        overflow: 'visible',
                        height: 'auto',
                        transitionDelay: `${baseDelay + 0.15}s`,
                      }}
                      data-animate-item
                    >
                      <h4 className="text-[0.9563rem] sm:text-[20.4px] font-bold text-[#132436] font-['Inter'] !mb-2">{step.title}</h4>
                      <p className="home-description text-[#546779] font-['Manrope'] !mb-0">
                        {step.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EmailFinderWorks

