import React from 'react'

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-r from-[#fffbfb] via-[#f4fffc] to-[#fffbfb] px-[10rem]">
      <div className="mt-[3rem] mb-5 w-[100%]">
        <svg width="205" height="73" viewBox="0 0 205 73" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.8665 63H4.10866V15.7273H21.005C25.7599 15.7273 29.8532 16.6736 33.2848 18.5664C36.7164 20.4438 39.3555 23.1444 41.2021 26.6683C43.064 30.1922 43.995 34.4086 43.995 39.3175C43.995 44.2417 43.064 48.4735 41.2021 52.0128C39.3555 55.5521 36.701 58.2681 33.2386 60.1609C29.7917 62.0536 25.6676 63 20.8665 63ZM14.1033 54.4364H20.451C23.4055 54.4364 25.8907 53.9132 27.9066 52.8668C29.9379 51.805 31.4613 50.1662 32.4769 47.9503C33.5079 45.719 34.0234 42.8414 34.0234 39.3175C34.0234 35.8243 33.5079 32.9698 32.4769 30.7539C31.4613 28.538 29.9456 26.9068 27.9297 25.8604C25.9138 24.814 23.4286 24.2908 20.4741 24.2908H14.1033V54.4364ZM67.3717 63.6925C63.7247 63.6925 60.5855 62.9538 57.9541 61.4766C55.3381 59.9839 53.3222 57.8757 51.9065 55.152C50.4908 52.4129 49.7829 49.1736 49.7829 45.4343C49.7829 41.7873 50.4908 38.5865 51.9065 35.832C53.3222 33.0775 55.315 30.9309 57.8849 29.392C60.4701 27.8532 63.5016 27.0838 66.9793 27.0838C69.3183 27.0838 71.4958 27.4608 73.5116 28.2148C75.5429 28.9535 77.3125 30.0691 78.8206 31.5618C80.344 33.0545 81.5289 34.9318 82.3753 37.1939C83.2216 39.4406 83.6448 42.072 83.6448 45.0881V47.7887H53.7069V41.695H74.3888C74.3888 40.2792 74.081 39.0251 73.4655 37.9325C72.8499 36.84 71.9959 35.9859 70.9033 35.3704C69.8261 34.7395 68.572 34.424 67.1409 34.424C65.6482 34.424 64.3248 34.7702 63.1707 35.4627C62.032 36.1398 61.1395 37.0554 60.4932 38.2095C59.8469 39.3482 59.516 40.6178 59.5006 42.0181V47.8118C59.5006 49.5661 59.8238 51.0818 60.4701 52.359C61.1318 53.6362 62.0628 54.6211 63.2631 55.3136C64.4633 56.006 65.8867 56.3523 67.5333 56.3523C68.6259 56.3523 69.6261 56.1984 70.534 55.8906C71.4419 55.5829 72.219 55.1212 72.8653 54.5057C73.5116 53.8902 74.0041 53.1361 74.3426 52.2436L83.4371 52.8438C82.9754 55.0289 82.029 56.937 80.5979 58.5682C79.1822 60.1839 77.351 61.4458 75.1043 62.3537C72.873 63.2462 70.2955 63.6925 67.3717 63.6925ZM90.2464 15.7273H102.572L115.591 47.4886H116.145L129.163 15.7273H141.489V63H131.795V32.2312H131.402L119.169 62.7692H112.567L100.333 32.1158H99.941V63H90.2464V15.7273ZM165.558 63.6925C161.973 63.6925 158.872 62.9308 156.256 61.4073C153.656 59.8685 151.647 57.7295 150.232 54.9904C148.816 52.2359 148.108 49.0428 148.108 45.4112C148.108 41.7488 148.816 38.5481 150.232 35.8089C151.647 33.0544 153.656 30.9155 156.256 29.392C158.872 27.8532 161.973 27.0838 165.558 27.0838C169.144 27.0838 172.237 27.8532 174.838 29.392C177.454 30.9155 179.469 33.0544 180.885 35.8089C182.301 38.5481 183.009 41.7488 183.009 45.4112C183.009 49.0428 182.301 52.2359 180.885 54.9904C179.469 57.7295 177.454 59.8685 174.838 61.4073C172.237 62.9308 169.144 63.6925 165.558 63.6925ZM165.605 56.0753C167.236 56.0753 168.598 55.6136 169.69 54.6903C170.783 53.7517 171.606 52.4744 172.16 50.8587C172.729 49.2429 173.014 47.404 173.014 45.342C173.014 43.2799 172.729 41.4411 172.16 39.8253C171.606 38.2095 170.783 36.9323 169.69 35.9936C168.598 35.0549 167.236 34.5856 165.605 34.5856C163.958 34.5856 162.573 35.0549 161.45 35.9936C160.342 36.9323 159.503 38.2095 158.934 39.8253C158.38 41.4411 158.103 43.2799 158.103 45.342C158.103 47.404 158.38 49.2429 158.934 50.8587C159.503 52.4744 160.342 53.7517 161.45 54.6903C162.573 55.6136 163.958 56.0753 165.605 56.0753ZM195.15 63.6001C193.627 63.6001 192.319 63.0616 191.226 61.9844C190.149 60.8918 189.61 59.5838 189.61 58.0604C189.61 56.5523 190.149 55.2597 191.226 54.1825C192.319 53.1053 193.627 52.5668 195.15 52.5668C196.627 52.5668 197.92 53.1053 199.028 54.1825C200.136 55.2597 200.69 56.5523 200.69 58.0604C200.69 59.076 200.428 60.007 199.905 60.8533C199.397 61.6843 198.728 62.3537 197.897 62.8615C197.066 63.3539 196.15 63.6001 195.15 63.6001Z"
            fill="#E71D36" />
        </svg>
      </div>
      <div className="flex justify-between w-full">
        <div className="mr-[8rem]">
          <p className="mb-[2.5rem] w-[max-content] text-[20px]">FindBestSEO has ranked PageTraffic <br /> among the top 10 SEO companies for <br /> 2020.</p>
          <div className='flex'>
            <a href="https://www.facebook.com/learnbuildteach/">
            <img src="images/fb.png" alt=""
              className="mr-[4rem] transition duration-300 ease-in-out hover:scale-110" />
            </a>
            <a href="https://in.linkedin.com/">
            <img src="images/in.png" alt=""
              className="mr-[4rem] transition duration-300 ease-in-out hover:scale-110" />
            </a>
            <a href="https://wwww.twitter.com">
            <img src="images/tw.png" alt=""
              className="mr-[4rem] transition duration-300 ease-in-out hover:scale-110" />
            </a>
            <a href="https://www.youtube.com/c/jamesqquick">
            <img src="images/Youtube.png" alt=""
              className="transition duration-300 ease-in-out hover:scale-110" />
            </a>
          </div>
        </div>
        <div className="mr-[8rem]">
          <h1 className="text-[#2EC4B6] text-[28px] font-semibold mb-5 uppercase">Company</h1>
          <div className="flex flex-col">
            <span className="mb-2">About</span>
            <span className="mb-2">Services</span>
            <span className="mb-2">Press</span>
            <span className="mb-2">Resources</span>
            <span className="mb-2">Blog</span>
          </div>
        </div>
        <div>
          <h1 className="text-[#2EC4B6] text-[28px] font-semibold mb-[2rem] uppercase">Latest news</h1>
          <div className='flex mb-4'>
            <div className='mr-[1.5rem] w-[6rem] w-[fit-content]'>
              <img className='transition duration-300 ease-in-out hover:scale-110' src="images/img1.png" alt="" />
            </div>
            <div>
              <h1 className='text-[#2EC4B6] text-[20px] font-medium w-[max-content]'>Per Click Management</h1>
              <p className='my-2 text-[12px] w-[max-content]'>PageTraffic is a premier Search<br />Engine Marketing ( SEM).</p>
              <span className='flex items-center'>
                <svg className='mr-3' width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="3" cy="3" r="3" fill="#E71D36" />
                </svg>
                <p className='text-[#E71D36] text-[10px]'>15 April 2021</p>
              </span>
            </div>
          </div>

          <div className='flex'>
            <div className='mr-[1.5rem] w-[6rem] w-[fit-content]'>
              <img className='transition duration-300 ease-in-out hover:scale-110' src="images/img2.png" alt="" />
            </div>
            <div>
              <h1 className='text-[#2EC4B6] text-[20px] font-medium w-[max-content]'>Per Click Management</h1>
              <p className='my-2 text-[12px] w-[max-content]'>PageTraffic is a premier Search<br />Engine Marketing ( SEM).</p>
              <span className='flex items-center'>
                <svg className='mr-3' width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="3" cy="3" r="3" fill="#E71D36" />
                </svg>
                <p className='text-[#E71D36] text-[10px]'>15 April 2021</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="my-[3rem] flex justify-between w-full text-[20px]">
        <p>© 2021 DeMO Insurance Inc. Patent Pending. All Rights Reserved.</p>
        <span className='flex'>
          <p className='text-[#2EC4B6]'>Privacy</p> <p className='mx-3'>|</p> <p>Terms of Service</p>
        </span>
      </div>
    </div>
  )
}

export default Footer
