import useScrollReveal from '../../hooks/useScrollReveal'

const WinningTeams = () => {
  const sectionRef = useScrollReveal()

  const cards = [
    { title: '15+', desc: 'Reduce bounces and protect sender reputation' },
    { title: '300%', desc: 'Lower Cost Per Lead\nCut costs with verified leads' },
    { title: '250+', desc: 'Lower Cost Per Lead\nCut costs with verified leads' },
    { title: '450%', desc: 'Boost Team Performance\nSave time, skip manual work.' },
  ]

  return (
    <section
      ref={sectionRef}
      data-animate="fade-up"
      className="relative w-full bg-transparent"
    >
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 lg:py-16 flex justify-center">
        <div
          className="w-full max-w-full mx-auto rounded-2xl bg-no-repeat
           bg-cover bg-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-4 2xl:px-2 py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20
            bg-[url('/images/footer-plain-bg.png')] xl:bg-[url('/images/winning-teams-bg.png')]
          "
        >
          {/* Header */}
          <div className="text-center flex flex-col items-center gap-3 sm:gap-4 md:gap-5">
            <div
              data-animate-item
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#6EA8FF]" />
              <span className="text-white text-xs font-bold font-['Manrope']">
                Commitment
              </span>
            </div>

            <h2
              data-animate-item
              className="
                text-white 
                font-bold 
                font-['Inter'] 
                text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                leading-[1.2] sm:leading-[1.15]
                max-w-4xl
              "
            >
              <span className="text-white">Winning Teams Trust Zupitu to </span>
              <br className="hidden md:block" />
              <span className="text-white">Crush </span>
              <span className="inline-flex items-center mx-2">
                <img
                  src="/images/Commitment.svg"
                  alt=""
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                />
              </span>
              <span className="text-white">Their Targets</span>
            </h2>

            <p
              data-animate-item
              className="
                max-w-3xl 
                text-white/70 
                font-['Manrope'] 
                text-sm sm:text-base md:text-lg
                leading-[1.6]
              "
            >
              Zupitu simplifies prospecting with intuitive tools for high-quality
              data generation. It supports seamless team collaboration, easily handles large data volumes.
            </p>
          </div>

          {/* Cards */}
          <div
            className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-16 2xl:mt-20 grid grid-cols-2 max-[450px]:grid-cols-1 w-full max-w-[95%] sm:max-w-[92%] md:max-w-[90%] lg:max-w-[88%] xl:max-w-[85%] 2xl:max-w-[82%] xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mx-auto justify-items-stretch"
          >

            {cards.map((card, idx) => (
              <div
                key={idx}
                data-animate-item
                className="
                  w-full 
                  min-w-0
                  h-full
                  bg-[#1F2F44]
                  border border-white/10
                  rounded-2xl
                  px-4 sm:px-5 md:px-6 py-6 sm:py-7 md:py-8
                  text-center
                  flex flex-col items-center justify-center gap-3 sm:gap-4
                  transition-transform hover:-translate-y-1
                "
              >
                <div className="text-[#EDFF67] font-bold font-['Inter'] text-2xl sm:text-3xl md:text-4xl leading-[1.2]">
                  {card.title}
                </div>

                <p className="text-sm sm:text-base text-white/80 whitespace-pre-line font-['Manrope'] leading-[1.6]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WinningTeams
