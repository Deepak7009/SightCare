import React, { useState } from 'react';
import facts from './images/supplementFacts1.webp';
import bottle1 from './images/1-Bottle-SightCare.webp'
import bottle2 from './images/3-Bottles-SightCare_BonusBook.webp'
import bottle3 from './images/6-Bottles-SightCare_Bonuses.webp'

import card1 from './images/card_1.webp'
import card2 from './images/card_2.webp'
import card3 from './images/card_3.webp'
import card4 from './images/card_4.webp'
import card5 from './images/card_12.webp'
import card6 from './images/card_22.webp'
import card7 from './images/card_32.webp'
import card8 from './images/card_42.webp'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './Faq.css'

const FAQSection = () => {

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  return (

    <div className="w-full mb-4 overflow-hidden " style={{ background: "bg-black" }}>



      <div className="my-8 pb-10" style={{ background: "rgb(8 84 132)" }}>
        <h2 className="text-center text-5xl pt-4 font-bold mb-4 text-white">Frequently Asked Questions</h2>
        <div className='flexx' style={{ width: "100vw", display: "flex" }}>
          <ul className="space-y-2 w-3/4">
            <li className="border-2 p-4 bg-white my-2 rounded-lg">
              <button
                onClick={() => toggleFaq(0)}
                className="w-full fw-bolder text-left text-2xl font-semibold flex justify-between items-center flxjsb"
              >
                <p>Is SightCare Right For Me?</p>
                <span>{openFaq === 0 ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronRight} />}</span>
              </button>
              {openFaq === 0 && (
                <p className="mt-2 text-black">
                  If you have any type of vision problems or your vision is getting worse, then Sightcare is for you. Sightcare is designed to rapidly improve your eyesight even in the worst cases and has changed the lives of thousands of men and women aged 18 to 95.
                </p>
              )}
            </li>
            <li className="border-gray-300 p-4 bg-white my-2 rounded-lg">
              <button
                onClick={() => toggleFaq(1)}
                className="w-full fw-bolder text-left text-2xl font-semibold flex justify-between items-center flxjsb"
              >
                Is SightCare Safe?
                <span>{openFaq === 1 ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronRight} />}</span>
              </button>
              {openFaq === 1 && (
                <p className="mt-2 text-black">
                  Sightcare is a proprietary, natural formula manufactured in the USA at our FDA registered and GMP certified facility. We only use state of the art, precision engineered machinery under the strictest manufacturing standards.
                </p>
              )}
            </li>
            <li className="border-gray-300 p-4 bg-white my-2 rounded-lg">
              <button
                onClick={() => toggleFaq(2)}
                className="w-full fw-bolder text-left text-2xl font-semibold flex justify-between items-center flxjsb"
              >
                How Many Bottles Should I Order?
                <span>{openFaq === 2 ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronRight} />}</span>
              </button>
              {openFaq === 2 && (
                <p className="mt-2 text-black">
                  We recommend taking Sightcare for at least 3 to 6 months to improve your vision and lock in perfect eyesight for years to come. We offer a 6-bottle package that comes with 2 free bonus books and a 7th free bottle. This is the most popular package, which also comes with free shipping.

                </p>
              )}
            </li>
            <li className="border-gray-300 p-4 bg-white my-2 rounded-lg">
              <button
                onClick={() => toggleFaq(3)}
                className="w-full fw-bolder text-left text-2xl font-semibold flex justify-between items-center flxjsb"
              >
                What's in a bottle of SightCare?
                <span>{openFaq === 3 ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronRight} />}</span>
              </button>
              {openFaq === 3 && (
                <img src={facts} alt="" />
              )}
            </li>
            <li className="border-gray-300 p-4 bg-white my-2 rounded-lg">
              <button
                onClick={() => toggleFaq(4)}
                className="w-full fw-bolder text-left text-2xl font-semibold flex justify-between items-center flxjsb"
              >
                What's The Best Way To Take SightCare?
                <span>{openFaq === 4 ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronRight} />}</span>
              </button>
              {openFaq === 4 && (
                <p className="mt-2 text-black">
                  Take 2 capsules with a big glass of cold water once a day, preferably on an empty stomach to improve absorption. The proprietary blend of natural ingredients work quickly to improve your vision.
                </p>
              )}
            </li>
            <li className="border-gray-300 p-4 bg-white my-2 rounded-lg">
              <button
                onClick={() => toggleFaq(5)}
                className="w-full fw-bolder text-left text-2xl font-semibold flex justify-between items-center flxjsb"
              >
                Is This a One Time Payment?
                <span>{openFaq === 5 ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronRight} />}</span>
              </button>
              {openFaq === 5 && (
                <p className="mt-2 text-black">
                  Yes, your order today is a one-time payment with no auto-ship, subscriptions, or hidden charges.
                </p>
              )}
            </li>
            <li className="border-gray-300 p-4 bg-white my-2 rounded-lg">
              <button
                onClick={() => toggleFaq(6)}
                className="w-full fw-bolder text-left text-2xl font-semibold flex justify-between items-center flxjsb"
              >
                What If SightCare Doesn't Work For Me?
                <span>{openFaq === 6 ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronRight} />}</span>
              </button>
              {openFaq === 6 && (
                <p className="mt-2 text-black">
                  Every single bottle of Sightcare comes with our personal, 180-day, 100% money-back guarantee! If for any reason you're unsatisfied with your results, just return all the bottles (even if empty) for a full, no questions asked refund.
                </p>
              )}
            </li>
            <li className="border-gray-300 p-4 bg-white my-2 rounded-lg">
              <button
                onClick={() => toggleFaq(7)}
                className="w-full fw-bolder text-left text-2xl font-semibold flex justify-between items-center flxjsb"
              >
                What Do I Do Now?
                <span>{openFaq === 7 ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronRight} />}</span>
              </button>
              {openFaq === 7 && (
                <p className="mt-2 text-black">
                  Click on one of the package options below, enter your order details on our secure checkout page, and we'll ship your SightCare to you right away. Remember, when you order our 6-bottle package, you'll get 2 free bonus books, a free extra bottle, and free shipping as well.
                </p>
              )}
            </li>
          </ul>
        </div>
      </div>




      <div className='bg-white pt-4 flexx w-11/12'>
        <div className="productss productss2 bg-white">
          <div className="border rounded-xl shadow-lg w-full mb-6 ml-3 gry ert">
            <h3 className="text-center text-xl font-bold rounded-t-md bg-slate-400  text-white h-10">BASIC</h3>
            <div className="text-center text-lg mb-4">
              <div className='text-4xl font-black uppercase mt-4' style={{ color: "rgb(8 84 132)" }}>1 bottle</div><div className="text-center text-black mb-2"><b>30 Day Supply</b></div>
              <img src={bottle1} alt="" style={{ height: "290px" }} className='qq' />
            </div>
            <div className="text-center text-2xl font-bold mb-2">
              <div className='text-6xl text-purple-500 ' style={{ color: "rgb(8 84 132)" }}><sup className='text-2xl'>$</sup>69 <span className='text-xl'>/ bottle</span></div>
            </div>
            <div className="text-center text-gray-500 mb-4" style={{ color: "rgb(8 84 132)" }}>+ $9.99 Shipping</div><br /><br />
            <div className='w-full flexx'>
              <button className=" text-white w-3/4 py-2 rounded-full font-bold h-14 text-2xl" style={{ background: "linear-gradient(1turn, #ffb301, #ffde00)" }}>Add To Cart <FontAwesomeIcon icon={faCartPlus} /></button>
            </div>
            <div className='w-full flexx overflow-hidden mt-2'>
              <img src={card1} alt="" className='qwe' />
              <img src={card2} alt="" className='qwe' />
              <img src={card3} alt="" className='qwe' />
              <img src={card4} alt="" className='qwe' />
            </div>
            <div className="text-center text-xs text-gray-500 mt-2" style={{ color: "rgb(8 84 132)" }}><span><s className='mr-2'>$149.00</s></span>$78.99</div>
          </div>

          <div className="border rounded-xl shadow-lg w-full mb-6 prp" style={{ background: "linear-gradient(180deg, #fffabe, #fff)" }}>
            <h3 className="text-center text-xl font-bold rounded-t-md text-white h-10" style={{ background: "rgb(8 84 132)" }}>MOST POPULAR</h3>
            <div className="text-center text-lg mb-4">
              <div className='text-4xl font-black uppercase mt-4' style={{ color: "rgb(8 84 132)" }}>6 bottles</div><div className="text-center text-black mb-2"><b>180 Day Supply</b></div>
              <img src={bottle3} alt="" style={{ height: "290px" }} />
            </div>
            <div className="text-center text-2xl font-bold mb-2">
              <div className='text-6xl' style={{ color: "rgb(8 84 132)" }}><sup className='text-2xl'>$</sup>49 <span className='text-xl'>/ bottle</span></div>
            </div>
            <div className="text-center text-green-500 mb-2 flexx">
              <div>
                <div className='w-full flexx text-nowrap pqr  text-white' style={{ background: "#cb5055" }}><FontAwesomeIcon icon={faCheckCircle} className='mt-1 mr-1' /><b>FREE Bonus Bottle!</b></div>
                <div className='w-full flexx text-nowrap pqr bg-purple-700  text-white' style={{ background: "rgb(8 84 132)" }}><FontAwesomeIcon icon={faCheckCircle} className='mt-1 mr-1' /><b>2 FREE Bonus Books</b></div>
                <div className='w-full flexx text-nowrap pqr bg-green-600  text-white' style={{ background: "#4c8c6f" }}><FontAwesomeIcon icon={faCheckCircle} className='mt-1 mr-1' /><b>FREE Fast Shipping</b></div>
              </div>
            </div>

            <div className='w-full flexx'>
              <button className="bg-yellow-500 text-white  w-3/4 py-2 rounded-full  font-bold h-14 text-2xl">Add To Cart <FontAwesomeIcon icon={faCartPlus} /></button>
            </div>
            <div className='w-full flexx overflow-hidden mt-2'>
              <img src={card5} alt="" className='qwe' />
              <img src={card6} alt="" className='qwe' />
              <img src={card7} alt="" className='qwe' />
              <img src={card8} alt="" className='qwe' />
            </div>
            <div className="text-center text-xs text-gray-500 mt-2" style={{ color: "rgb(8 84 132)" }}><span><s className='mr-2'>$894.00</s></span>$294.00</div>
          </div>


          <div className="border rounded-xl shadow-lg w-full mb-6 gry ert">
            <h3 className="text-center text-xl font-bold rounded-t-md bg-slate-400 text-white h-10">BUNDLE</h3>
            <div className="text-center text-lg mb-4">
              <div className='text-4xl font-black uppercase mt-4' style={{ color: "rgb(8 84 132)" }}>3 bottles</div><div className="text-center text-black mb-2"><b>90 Day Supply</b></div>
              <img src={bottle2} alt="" style={{ height: "290px" }} className="qqq" />
            </div>
            <div className="text-center text-2xl font-bold mb-2">
              <div className='text-6xl ' style={{ color: "rgb(8 84 132)" }}><sup className='text-2xl'>$</sup>59 <span className='text-xl'>/ bottle</span></div>
            </div>
            <div className="text-center text-green-500 mb-2 flexx">
              <div>
                <div className='w-full flexx text-nowrap pqr bg-purple-700  text-white' style={{ background: "rgb(8 84 132)" }}><FontAwesomeIcon icon={faCheckCircle} className='mt-1' />FREE Bonus Books</div>
              </div>
              <br />
              <br />
            </div>
            <div className="text-center text-gray-500 mb-4">FREE US Shipping</div>
            <div className='w-full flexx'>
              <button className="bg-yellow-500 text-white  w-3/4 py-2 rounded-full font-bold h-14 text-2xl">Add To Cart <FontAwesomeIcon icon={faCartPlus} /></button>
            </div>
            <div className='w-full flexx overflow-hidden mt-2'>
              <img src={card1} alt="" className='qwe' />
              <img src={card2} alt="" className='qwe' />
              <img src={card3} alt="" className='qwe' />
              <img src={card4} alt="" className='qwe' />
            </div>
            <div className="text-center text-xs text-gray-500 mt-2" style={{ color: "rgb(8 84 132)" }}><span><s className='mr-2'>$447.00</s></span>$177.00</div>
          </div>
        </div>
      </div>

      <div className="text-center pt-4 mt-36 bg-white">
        <div className="text-2xl font-bold">Our Customers Say</div>
        <div className="text-lg text-yellow-500 flexx gap-2">
          <div className="flexx gap-1 ">
          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="30" fill="currentColor" viewBox="0 0 33 30">
<path d="M15.549.927c.3-.921 1.603-.921 1.902 0l2.978 9.165a1 1 0 0 0 .951.691h9.637c.969 0 1.371 1.24.588 1.81l-7.797 5.664a1 1 0 0 0-.363 1.118l2.978 9.165c.3.921-.755 1.687-1.539 1.118l-7.796-5.665a1 1 0 0 0-1.176 0l-7.796 5.665c-.784.57-1.838-.197-1.539-1.118l2.978-9.165a1 1 0 0 0-.363-1.118l-7.797-5.665c-.783-.57-.38-1.809.588-1.809h9.637a1 1 0 0 0 .951-.69L15.549.926Z">
</path>
</svg><svg xmlns="http://www.w3.org/2000/svg" width="33" height="30" fill="currentColor" viewBox="0 0 33 30">
<path d="M15.549.927c.3-.921 1.603-.921 1.902 0l2.978 9.165a1 1 0 0 0 .951.691h9.637c.969 0 1.371 1.24.588 1.81l-7.797 5.664a1 1 0 0 0-.363 1.118l2.978 9.165c.3.921-.755 1.687-1.539 1.118l-7.796-5.665a1 1 0 0 0-1.176 0l-7.796 5.665c-.784.57-1.838-.197-1.539-1.118l2.978-9.165a1 1 0 0 0-.363-1.118l-7.797-5.665c-.783-.57-.38-1.809.588-1.809h9.637a1 1 0 0 0 .951-.69L15.549.926Z">
</path>
</svg><svg xmlns="http://www.w3.org/2000/svg" width="33" height="30" fill="currentColor" viewBox="0 0 33 30">
<path d="M15.549.927c.3-.921 1.603-.921 1.902 0l2.978 9.165a1 1 0 0 0 .951.691h9.637c.969 0 1.371 1.24.588 1.81l-7.797 5.664a1 1 0 0 0-.363 1.118l2.978 9.165c.3.921-.755 1.687-1.539 1.118l-7.796-5.665a1 1 0 0 0-1.176 0l-7.796 5.665c-.784.57-1.838-.197-1.539-1.118l2.978-9.165a1 1 0 0 0-.363-1.118l-7.797-5.665c-.783-.57-.38-1.809.588-1.809h9.637a1 1 0 0 0 .951-.69L15.549.926Z">
</path>
</svg><svg xmlns="http://www.w3.org/2000/svg" width="33" height="30" fill="currentColor" viewBox="0 0 33 30">
<path d="M15.549.927c.3-.921 1.603-.921 1.902 0l2.978 9.165a1 1 0 0 0 .951.691h9.637c.969 0 1.371 1.24.588 1.81l-7.797 5.664a1 1 0 0 0-.363 1.118l2.978 9.165c.3.921-.755 1.687-1.539 1.118l-7.796-5.665a1 1 0 0 0-1.176 0l-7.796 5.665c-.784.57-1.838-.197-1.539-1.118l2.978-9.165a1 1 0 0 0-.363-1.118l-7.797-5.665c-.783-.57-.38-1.809.588-1.809h9.637a1 1 0 0 0 .951-.69L15.549.926Z">
</path>
</svg><svg xmlns="http://www.w3.org/2000/svg" width="33" height="30" fill="currentColor" viewBox="0 0 33 30">
<path d="M15.549.927c.3-.921 1.603-.921 1.902 0l2.978 9.165a1 1 0 0 0 .951.691h9.637c.969 0 1.371 1.24.588 1.81l-7.797 5.664a1 1 0 0 0-.363 1.118l2.978 9.165c.3.921-.755 1.687-1.539 1.118l-7.796-5.665a1 1 0 0 0-1.176 0l-7.796 5.665c-.784.57-1.838-.197-1.539-1.118l2.978-9.165a1 1 0 0 0-.363-1.118l-7.797-5.665c-.783-.57-.38-1.809.588-1.809h9.637a1 1 0 0 0 .951-.69L15.549.926Z">
</path>
</svg>
</div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-6 h-6 mx-2" style={{color:"rgb(8 84 132)"}}>
<path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm131.3 170.4l-159 204c-1.3 1.3-3.3 4-5.8 4-2.6 0-4.3-1.8-5.8-3.3s-90.2-86.7-90.2-86.7l-1.7-1.7c-.7-1-1.3-2.3-1.3-3.7s.6-2.6 1.3-3.7c.5-.5.8-.8 1.3-1.4 8.8-9.3 26.6-28 27.8-29.1 1.5-1.5 2.7-3.4 5.5-3.4 2.9 0 4.7 2.4 6.1 3.8 1.4 1.4 51.4 49.5 51.4 49.5L344 135.2c1.1-.9 2.5-1.6 4-1.6s2.9.6 4 1.5l35 27.5c.9 1.1 1.5 2.5 1.5 4 .1 1.5-.5 2.8-1.2 3.8z" fill="currentColor"/></svg>  <span style={{color:"rgb(8 84 132)"}}>4.91/5</span></div>
        <div className="text-sm text-gray-500">Based on 72,500+ reviews!</div>
      </div>
    </div>
  );
};

export default FAQSection;