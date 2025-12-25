const HeroSection = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-no-repeat bg-top"
      style={{
        backgroundImage: "url('/images/help-desk-bg.png')",
        backgroundSize: 'cover',
      }}
    >
      {/* MAIN CONTAINER */}
      <div
        className="
          relative mx-auto
          px-4 sm:px-6 lg:px-12
          py-[40px] sm:py-[50px] lg:py-[70px]
        "
      >
        {/* HEADER */}
        <div className="flex flex-col items-center gap-[21px]">
          <div className="max-w-[1050px] 2xl:max-w-[1150px] text-center">

            {/* TITLE */}
            <h1
              className="
                flex flex-wrap items-center justify-center gap-2 sm:gap-3
                font-['Inter'] font-semibold
                text-[28px] sm:text-[34px]
                lg:text-[40px]
                xl:text-[44px]
                2xl:text-[46px]
                leading-[110%]
                tracking-[-2px]
                text-[#132436]
                mx-auto
                max-w-full sm:max-w-[80%] lg:max-w-[66%]
              "
            >
              <span>Answers</span>

              <span className="inline-flex w-[36px] h-[36px] sm:w-[44px] sm:h-[44px] xl:w-[60px] xl:h-[60px]">
                <img src="/images/setting-orange-5.svg" alt="" />
              </span>

              <span>To The Most Common</span>
              <br />
              <span>Things</span>

              <span className="inline-flex w-[36px] h-[36px] sm:w-[44px] sm:h-[44px] xl:w-[60px] xl:h-[60px]">
                <img src="/images/rocket-purple.svg" alt="" />
              </span>

              <span>We're Asked</span>
            </h1>

            {/* DESCRIPTION */}
            <div className="mt-[20px]  px-1">
              <p className="font-['Manrope'] font-medium text-[15px] sm:text-[17px] xl:text-[20px] leading-[28px] xl:leading-[44px] text-[#546779]">
                We've put together quick answers to the most common questions about our{' '}
                <span className="font-bold text-[#132436]">
                  Email Finder, credits, and support.
                </span>
              </p>

              <p className="font-['Manrope'] font-medium text-[15px] sm:text-[17px] xl:text-[20px] leading-[28px] xl:leading-[44px] text-[#546779]">
                If you don't see what you're looking for, our team is just a message away.
              </p>
            </div>
          </div>
        </div>

        {/* CARDS + CONNECTOR */}
        <div className="relative mt-[60px] sm:mt-[80px] mx-auto max-w-[1362px]">

          {/* CONNECTOR */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[18%] lg:-translate-y-[28%] z-0 pointer-events-none">
            <img
              src="/images/Group-bg.png"
              alt="Connector"
              className="w-full max-w-[900px] lg:max-w-[1022px] h-auto"
            />
          </div>

          {/* CARDS */}
          <div className="relative z-10 mx-auto flex flex-col md:flex-row gap-[21px] max-w-[1022px]">

            {/* TECH SUPPORT */}
            <div
              className="w-full rounded-[24px] p-[18px] sm:p-[18px] flex items-center justify-center"
              style={{ background: 'linear-gradient(180deg, #C2CEFF 0%, #96AAFB 100%)' }}
            >
              <div className="bg-white rounded-[12px] w-full max-w-[611px] px-6 sm:px-10 lg:px-20 py-7 text-center space-y-5">
                <h2 className="font-['Inter'] font-semibold text-[20px] sm:text-[22px] xl:text-[26px] text-[#132436] font-medium">
                  Technical Support
                </h2>

                <p className="font-['Manrope'] text-[15px] sm:text-[16px] xl:text-[18px] text-[#585D71] font-medium">
                  For Product integration or technical support, please write at
                </p>

                <div className="relative h-[52px] rounded-[74px] flex items-center justify-center overflow-hidden">
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(180deg, #C2CEFF 0%, #96AAFB 100%)',
                      opacity: 0.2,
                    }}
                  />
                  <a
                    href="mailto:support@zupitu.com"
                    className="relative z-10 font-['Manrope'] text-[16px] sm:text-[18px] xl:text-[20px] font-bold text-black"
                  >
                    support@zupitu.com
                  </a>
                </div>
              </div>
            </div>

            {/* SALES */}
            <div
              className="w-full rounded-[24px] p-[18px] sm:p-[18px] flex flex-col items-center mb-0!"
              style={{ background: 'linear-gradient(180deg, #EEE9FF 0%, #CABCFF 100%)' }}
            >
              <h2 className="font-['Inter'] font-semibold text-[20px] sm:text-[18px] xl:text-[26px] text-[#132436] mb-[18px]">
                Contact Sales
              </h2>
              <div className="bg-white rounded-[16px] w-full max-w-[623px] px-6 sm:px-10 lg:px-20 py-7 text-center">
                <p className="font-['Manrope'] text-[15px] sm:text-[16px] xl:text-[18px]  text-[#585D71] font-medium">
                  Looking for a custom quote?
                </p>

                <p className="font-['Manrope'] text-[15px] sm:text-[16px] xl:text-[18px]  text-[#585D71] mb-5.5  font-medium">
                  Drop us a line at client -
                </p>

                <div className="relative h-[52px] rounded-[64px] flex items-center justify-center overflow-hidden">
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(180deg, #E9EBFF 0%, #CABCFF 100%)',
                      opacity: 0.2,
                    }}
                  />
                  <a
                    href="mailto:success@zupitu.com"
                    className="relative z-10 font-['Manrope'] text-[16px] sm:text-[18px] xl:text-[20px] font-bold text-[#132436]"
                  >
                    success@zupitu.com
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
