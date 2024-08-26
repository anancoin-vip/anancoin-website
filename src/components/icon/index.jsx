import { useMemo } from 'react'

export default function Icon (props = {}) {
  
  return useMemo(() => {
    const { type, className } = props
    switch (type) {
      case 'warning':
        return <svg {...props} className={`stroke-current ${className}`} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
      case 'error':
        return <svg {...props} className={`stroke-current ${className}`} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      case 'success':
        return <svg {...props} className={`stroke-current ${className}`} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      case 'raydium':
        return <svg className="market-btn-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M34.3297 15.8661V28.7492L20 37.021L5.66234 28.7492V12.1978L20 3.91808L31.013 10.2797L32.6753 9.32068L20 2L4 11.2388V29.7083L20 38.947L36 29.7083V14.9071L34.3297 15.8661Z" fill="url(#a)"></path><path d="M15.988 28.7572H13.5904V20.7173H21.5824C22.3385 20.7089 23.061 20.4031 23.5934 19.8662C24.1259 19.3293 24.4255 18.6043 24.4276 17.8481C24.4319 17.4742 24.3597 17.1034 24.2154 16.7584C24.0711 16.4134 23.8577 16.1016 23.5884 15.8421C23.3278 15.5743 23.0158 15.362 22.6711 15.2178C22.3264 15.0736 21.9561 15.0005 21.5824 15.003H13.5904V12.5574H21.5904C22.991 12.5658 24.3319 13.1259 25.3222 14.1163C26.3126 15.1067 26.8727 16.4475 26.8811 17.8481C26.8897 18.9202 26.5627 19.9681 25.9461 20.8451C25.3785 21.6842 24.5786 22.3397 23.6444 22.7313C22.7193 23.0246 21.7537 23.1703 20.7832 23.1628H15.988V28.7572Z" fill="url(#b)"></path><path d="M26.8252 28.5574H24.028L21.8701 24.7932C22.7238 24.741 23.5659 24.5688 24.3716 24.2817L26.8252 28.5574Z" fill="url(#c)"></path><path d="M32.6593 13.1888L34.3137 14.1079L35.968 13.1888V11.2467L34.3137 10.2877L32.6593 11.2467V13.1888Z" fill="url(#d)"></path><defs><linearGradient id="a" x1="35.9717" y1="11.2489" x2="2.04291" y2="24.817" gradientUnits="userSpaceOnUse"><stop stopColor="#C200FB"></stop><stop offset="0.489658" stopColor="#3772FF"></stop><stop offset="1" stopColor="#5AC4BE"></stop></linearGradient><linearGradient id="b" x1="35.9717" y1="11.2489" x2="2.04291" y2="24.817" gradientUnits="userSpaceOnUse"><stop stopColor="#C200FB"></stop><stop offset="0.489658" stopColor="#3772FF"></stop><stop offset="1" stopColor="#5AC4BE"></stop></linearGradient><linearGradient id="c" x1="35.9717" y1="11.2489" x2="2.04291" y2="24.817" gradientUnits="userSpaceOnUse"><stop stopColor="#C200FB"></stop><stop offset="0.489658" stopColor="#3772FF"></stop><stop offset="1" stopColor="#5AC4BE"></stop></linearGradient><linearGradient id="d" x1="35.9717" y1="11.2489" x2="2.04291" y2="24.817" gradientUnits="userSpaceOnUse"><stop stopColor="#C200FB"></stop><stop offset="0.489658" stopColor="#3772FF"></stop><stop offset="1" stopColor="#5AC4BE"></stop></linearGradient></defs></svg>
      case 'jup':
        return <svg className="market-btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 32" fill="none">
        <g clipPath="url(#clip0_11565_169621)">
        <g filter="url(#filter0_d_11565_169621)">
        <path d="M3.09074 25.1666C4.44267 27.0471 6.17683 28.6205 8.1795 29.7838C10.1822 30.947 12.4081 31.6738 14.7114 31.9165C13.5264 30.1333 11.8039 28.4928 9.65354 27.2438C7.50318 25.9948 5.22592 25.3125 3.09074 25.1666Z" fill="url(#paint0_linear_11565_169621)"/>
        <path d="M12.543 22.2705C8.40015 19.8636 3.91612 19.2502 0.707663 20.3338C1.0174 21.3575 1.42589 22.3487 1.92738 23.2934C4.71498 23.2288 7.75856 23.9859 10.5906 25.6308C13.4227 27.2757 15.5888 29.5459 16.9143 32C17.9839 31.9672 19.0479 31.8309 20.0913 31.5932C19.4426 28.2698 16.6849 24.6779 12.543 22.2705Z" fill="url(#paint1_linear_11565_169621)"/>
        <path d="M32.2852 12.5009C31.7585 10.3584 30.8054 8.34403 29.4829 6.57804C28.1604 4.81205 26.4956 3.33067 24.5879 2.22235C22.6802 1.11403 20.5687 0.401504 18.3796 0.127309C16.1904 -0.146885 13.9684 0.0228794 11.8463 0.626465C15.3915 1.06033 19.3267 2.39122 23.1859 4.63324C27.0452 6.87525 30.1533 9.63411 32.2852 12.5009Z" fill="url(#paint2_linear_11565_169621)"/>
        <path d="M27.1271 20.3583C25.3124 17.3446 22.2038 14.4588 18.3743 12.2342C14.5449 10.0095 10.4991 8.7388 6.98531 8.65474C3.894 8.58152 1.57389 9.48017 0.621548 11.1197C0.616125 11.1294 0.608532 11.1386 0.602566 11.1484C0.516877 11.4559 0.44312 11.7639 0.37587 12.0731C1.70568 11.5481 3.24645 11.2558 4.95969 11.2232C8.76959 11.1517 13.0334 12.3703 16.9681 14.6562C20.9027 16.9422 24.0759 20.0438 25.9003 23.3878C26.7182 24.8944 27.2285 26.3777 27.4308 27.7948C27.6662 27.5844 27.8972 27.3669 28.1212 27.1408C28.1272 27.1305 28.131 27.1196 28.1369 27.1088C29.0893 25.4677 28.721 23.0076 27.1271 20.3583Z" fill="url(#paint3_linear_11565_169621)"/>
        <path d="M15.4609 17.2485C9.59662 13.8416 3.11626 13.3079 0 15.6855C0.00612096 16.4297 0.0630166 17.1726 0.170292 17.9091C1.08699 17.6312 2.03177 17.4562 2.98718 17.3874C6.46952 17.1254 10.3087 18.0957 13.7927 20.1207C17.2766 22.1458 20.023 25.0018 21.5209 28.1543C21.935 29.018 22.2508 29.9254 22.4624 30.8595C23.1555 30.5878 23.8294 30.2694 24.4794 29.9066C25.0011 26.0213 21.3268 20.656 15.4609 17.2485Z" fill="url(#paint4_linear_11565_169621)"/>
        <path d="M30.1434 15.3141C28.3082 12.3036 25.1724 9.40969 21.3158 7.17039C17.4593 4.93109 13.3977 3.64033 9.87257 3.53674C7.1853 3.45919 5.10382 4.11053 4.02457 5.34109C8.50588 4.58182 14.4168 5.85794 20.146 9.18625C25.8753 12.5146 29.9135 17.0181 31.4722 21.2868C32.0064 19.7406 31.5416 17.6098 30.1434 15.3141Z" fill="url(#paint5_linear_11565_169621)"/>
        </g>
        </g>
        <defs>
        <filter id="filter0_d_11565_169621" x="-22.7449" y="-20.4704" width="77.7749" height="77.4898" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="2.27449"/>
        <feGaussianBlur stdDeviation="11.3724"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_11565_169621"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_11565_169621" result="shape"/>
        </filter>
        <linearGradient id="paint0_linear_11565_169621" x1="21.5" y1="6.5" x2="6.66667" y2="32" gradientUnits="userSpaceOnUse">
        <stop offset="0.0001" stopColor="#C7F284"/>
        <stop offset="1" stopColor="#00BEF0"/>
        </linearGradient>
        <linearGradient id="paint1_linear_11565_169621" x1="21.5" y1="6.5" x2="6.66667" y2="32" gradientUnits="userSpaceOnUse">
        <stop offset="0.0001" stopColor="#C7F284"/>
        <stop offset="1" stopColor="#00BEF0"/>
        </linearGradient>
        <linearGradient id="paint2_linear_11565_169621" x1="21.5" y1="6.5" x2="6.66667" y2="32" gradientUnits="userSpaceOnUse">
        <stop offset="0.0001" stopColor="#C7F284"/>
        <stop offset="1" stopColor="#00BEF0"/>
        </linearGradient>
        <linearGradient id="paint3_linear_11565_169621" x1="21.5" y1="6.5" x2="6.66667" y2="32" gradientUnits="userSpaceOnUse">
        <stop offset="0.0001" stopColor="#C7F284"/>
        <stop offset="1" stopColor="#00BEF0"/>
        </linearGradient>
        <linearGradient id="paint4_linear_11565_169621" x1="21.5" y1="6.5" x2="6.66667" y2="32" gradientUnits="userSpaceOnUse">
        <stop offset="0.0001" stopColor="#C7F284"/>
        <stop offset="1" stopColor="#00BEF0"/>
        </linearGradient>
        <linearGradient id="paint5_linear_11565_169621" x1="21.5" y1="6.5" x2="6.66667" y2="32" gradientUnits="userSpaceOnUse">
        <stop offset="0.0001" stopColor="#C7F284"/>
        <stop offset="1" stopColor="#00BEF0"/>
        </linearGradient>
        <clipPath id="clip0_11565_169621">
        <rect width="32.2852" height="32" fill="white"/>
        </clipPath>
        </defs>
        </svg>
      case 'okx':
        return <img className="market-btn-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAABICAQAAADSOpYzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAHdElNRQfmBwMNKhI4Vg/yAAABMklEQVR42u3aQW6DMBBAUZyT5eSFE/RInS5psOKx8Scq0n9ZNXjA+VE3VpZFkiRJkiShYo0rrYPPWyf3+3VYXZL138nTuudLxLVfVCmHrcXY+uqjteejPF7/XH5G1teXe+ebt1E/Q0IMCTEkxJAQQ0IMCTEkxJAQQ0IMCTEkxJCQ+4XcBq+Orj87n54oPlv3iWc2Xk3A55tzZs8rd+l55OT54PB5ZLrhMjd/2M3keeXufv/a/5QhIYaEGBJiSIghIYaEGBJiSIghIYaEGBJiSEgaMjtG+/B+tw/f8eVqlPq1X7xYlX5wfTXfPj/095Hv1tdfRPLJ/X3kvRkSYkiIISGGhBgSYkiIISGGhBgSYkiIISGGhDwuOOH7a+t4p//qmflticYrf946OS9JkiRJkk75BUgSur6QrNyYAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTA3LTAzVDEzOjQyOjE4KzAwOjAwKpbwNQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wNy0wM1QxMzo0MjoxOCswMDowMFvLSIkAAAAASUVORK5CYII=" alt="" />
    }
  }, [props])
}
