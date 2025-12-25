const DocumentationPage = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="w-full">
        <div
          className="
            relative
            w-full
            rounded-[32px]
            px-6 sm:px-8 md:px-12 lg:px-16 xl:px-[120px]
            py-[64px] sm:py-[72px] md:py-[88px]
            overflow-hidden
          "
          style={{
            background: "linear-gradient(180deg, #F4F7FA 0%, #EAF4FF 100%)",
          }}
        >
          {/* TOP LEFT CORNER DECOR */}
          <img
            src="/images/pin.png"
            alt=""
            className="absolute  top-0 left-0 pointer-events-none z-0 opacity-70 hidden sm:block w-[90px] md:w-[115px] lg:w-[135px] -translate-x-[15%] -translate-y-[15%]"
          />

          <img
            src="/images/Pin-right.png"
            alt=""
            className="absolute top-0 right-0 pointer-events-none z-0 opacity-70 hidden sm:block w-[100px] md:w-[130px] lg:w-[160px] translate-x-[15%] -translate-y-[15%]"
          />

          {/* CONTENT */}
          <div
            className="
              relative
              z-10
              mx-auto
              flex
              flex-col
              sm:flex-row
              items-center
              justify-between
              gap-10
            "
            style={{ maxWidth: "1022px" }}
          >
            {/* LEFT */}
            <div className="w-full sm:max-w-[620px] flex flex-col gap-5">
              <h2
                className="
                  font-['Inter']
                  font-semibold
                  text-[#132436]
                  tracking-[-0.04em]
                  leading-[1.15]
                  text-[28px]
                  sm:text-[32px]
                  md:text-[36px]
                  xl:text-[40px]
                "
              >
                <span className="flex items-center gap-3 flex-wrap">
                  <span>Can't</span>

                  <span className="inline-flex items-center justify-center">
                    <img
                      src="/images/Commitment-1.svg"
                      alt=""
                      className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px]"
                    />
                  </span>

                  <span>find what you're</span>
                </span>
                <span className="block mt-2">looking for?</span>
              </h2>

              <p
                className="
                  font-['Manrope']
                  font-medium
                  text-[#546779]
                  text-[16px]
                  sm:text-[17px]
                  md:text-[18px]
                "
              >
                Check out our full documentation.
              </p>
            </div>

            {/* RIGHT BUTTON */}
            <div className="w-full sm:w-auto shrink-0">
              <button
                className="
                  w-full
                  sm:w-auto
                  min-w-[220px] flex
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#EB3609]
                  hover:bg-[#D32F08]
                  transition-colors
                  duration-200
                  px-8
                  h-[56px]
                "
              >
                <span
                  className="
                    font-['Inter']
                    font-semibold
                    text-white
                    text-[15px]
                    sm:text-[16px]
                    whitespace-nowrap
                  "
                >
                  Visit Documentation
                </span>

                <img
                  src="/images/right-arrow.svg"
                  alt=""
                  className="w-[18px] h-[18px]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentationPage;
