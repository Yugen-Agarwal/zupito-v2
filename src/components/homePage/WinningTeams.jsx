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
      <div className="home-container flex justify-center py-6">
        <div
          className="w-full max-w-full mx-auto rounded-2xl bg-no-repeat
           bg-cover bg-center px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-14 md:py-16
           bg-[url('/images/footer-plain-bg.png')] xl:bg-[url('/images/winning-teams-bg.png')]
          "
        >
          {/* Header */}
          <div className="text-center flex flex-col items-center gap-3">
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
                leading-tight
                max-w-4xl
              "
            >
              <span className="text-white">Winning </span>
              <span className="text-[#717680]">Teams </span>
              <span className="text-white">Trust Zupitu </span>
              <span className="text-[#717680]">to Crush</span>
              <span className="inline-flex items-center mx-2">
                <img
                  src="/images/Commitment.svg"
                  alt=""
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                />
              </span>
              <span className="text-[#717680]">Their Targets</span>
            </h2>

            <p
              data-animate-item
              className="
                max-w-3xl 
                text-white/70 
                font-['Manrope'] 
                text-sm sm:text-base md:text-lg
              "
            >
              Zupitu simplifies prospecting with intuitive tools for high-quality
              data generation, seamless collaboration, and effortless scaling.
            </p>
          </div>

          {/* Cards */}
          <div
            className="mt-4 xl:mt-40 grid 
              grid-cols-1 
              sm:grid-cols-2 
              xl:grid-cols-4
              gap-6 lg:gap-8
              justify-items-center
            "
          >
            {cards.map((card, idx) => (
              <div
                key={idx}
                data-animate-item
                className="
                  w-full 
                  max-w-[18rem]
                  bg-[#FAFBFF]
                  rounded-xl
                  px-6 py-8
                  shadow-md
                  text-center
                  flex flex-col items-center gap-3
                  transition-transform hover:-translate-y-1
                "
              >
                <div className="text-[#132436] font-bold font-['Inter'] text-3xl">
                  {card.title}
                </div>

                <p className="text-sm sm:text-base text-[#546779] whitespace-pre-line font-['Manrope']">
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
