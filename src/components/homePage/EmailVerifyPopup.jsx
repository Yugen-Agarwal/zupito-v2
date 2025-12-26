import React, { useEffect } from "react";

const StatusItem = ({ label, value }) => (
    <div className="flex items-center gap-2 sm:gap-3">
        <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-[10px] sm:text-xs">
            ✓
        </span>
        <span className="text-[#A9B3C1] text-[13px] sm:text-[14px] leading-[1.5]">
            {label}{" "}
            <span className="text-white font-semibold text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]">{value}</span>
        </span>
    </div>
);

const EmailVerifyPopup = ({ onClose }) => {
    useEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = originalStyle;
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 sm:px-6">

            {/* Modal Card */}
            <div className="w-full max-w-[510px] max-h-[411px] rounded-2xl bg-[#12263A] p-4 sm:p-5 md:p-6 relative pointer-events-auto">

                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute top-3 sm:top-4 right-3 sm:right-4 text-white/60 hover:text-white text-xl sm:text-2xl"
                >
                    ✕
                </button>

                {/* Header */}
                <div className="flex items-center gap-3 sm:gap-4 py-3 sm:py-4">
                    <div className="w-[48px] h-[48px] sm:w-[52px] sm:h-[52px] rounded-full bg-white relative">
                        <img
                            src="/images/email-icon.svg"
                            alt=""
                            className="w-6 h-6 sm:w-7 sm:h-7 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        />
                    </div>


                    <h3 className="text-white text-base sm:text-lg md:text-[22px] font-semibold break-all leading-[1.3]">
                        sample@maildomain.com
                    </h3>
                </div>

                {/* Content */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                    <div className="space-y-3 sm:space-y-4">
                        <StatusItem label="Account" value="Sample" />
                        <StatusItem label="Status" value="Valid" />
                        <StatusItem label="Status" value="Valid" />
                        <StatusItem label="Status" value="Valid" />
                        <StatusItem label="Status" value="Valid" />
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                        <StatusItem label="Domain" value="maildomain" />
                        <StatusItem label="Status" value="Valid" />
                        <StatusItem label="Status" value="Valid" />
                        <StatusItem label="Status" value="Valid" />
                        <StatusItem label="Status" value="Valid" />
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-6 sm:mt-8 md:mt-10 text-center">
                    <button className="text-[#EB3609] font-semibold hover:underline inline-flex items-center gap-2 text-[14px] sm:text-[15px] md:text-[16px] leading-[1.5]">
                        Verify Another Email →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EmailVerifyPopup;
