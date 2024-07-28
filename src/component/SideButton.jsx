import React from 'react'

function SideButton() {
    return (
        <span className="flex items-center ">
            <div>
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_11_73)">
                        <rect x="11" y="7" width="30" height="30" rx="6" fill="#FFF3F5" />
                    </g>
                    <path d="M28.375 26.25L24.625 22.5L28.375 18.75" stroke="#E71D36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                        <filter id="filter0_d_11_73" x="0" y="0" width="52" height="52" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="5.5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_11_73" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_11_73" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </div>

            <div>
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_11_74)">
                        <rect x="6" y="2" width="30" height="30" rx="6" fill="#E71D36" />
                    </g>
                    <path d="M19.625 21.25L23.375 17.5L19.625 13.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                        <filter id="filter0_d_11_74" x="0" y="0" width="42" height="42" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="3" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.905882 0 0 0 0 0.113725 0 0 0 0 0.211765 0 0 0 0.2 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_11_74" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_11_74" result="shape" />
                        </filter>
                    </defs>
                </svg>

            </div>
        </span>
    )
}

export default SideButton
