import React from 'react';

function ProductInfo() {
   return (
      <>
         <header class="py-2 shadow-md">
            <div class="container"><a class="text-3xl uppercase font-bold text-primary tracking-tight i-b align-middle" href="/">
               SIGHTCARE</a></div>
         </header>
         <section className="product-info md:pt-5">
            <div className="container p-0 md:rounded-t-2xl overflow-hidden bg-white">
               <div className="md:grid grid-cols-3">
                  <div className="main-title-wrapper-bg">
                     <div className="main-title-wrapper px-5 text-center block md:hidden pt-8 sm:pt-12">
                        <h2 className="main-title font-black text-white text-center">Could SightCare be the Easiest Way to Achieve Eye Health?</h2>
                        <p className="product-rating">
                           <span className="product-rating__stars text-yellow-500 text-xl">★★★★★</span>&nbsp;
                           <span className="product-rating__mark text-sm text-white"> (4.9 out of 5)</span></p>
                     </div>
                     <div className="product-info__bottles px-5">
                        <img className="-mt-4 md:mt-0 max-w-md mx-auto w-full" width="1000" height="1000" alt="Product 6 Bottles"
                           src="https://getsightcarefast.org/l/lib/img/media/6-Bottle-SightCare@1280.webp" loading="eager"
                           sizes="94vw, (min-width:507px) 448px, (min-width: 768px) 25.7vw, (min-width:1135px) 320px" />
                     </div>
                     <div className="solution px-4 my-4">
                        <h3 className="text-center text-primary grid grid-cols-[1fr,auto,1fr] gap-4 items-center before:h-0.5 before:w-full before:bg-primary/20 after:h-0.5 after:w-full after:bg-primary/20 text-2xl font-bold">
                           <span className="leading-6">Support Healthy<span className='block'>Eye Sight Naturally!</span></span></h3>
                        <ul className="solution__list mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-4 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-5 text-sm text-primary-dark">
                           <li className="flex flex-col items-center text-center text-primary">
                              <img className="w-10 h-10 mb-3" src="https://getsightcarefast.org/l/lib/img/media/icons/eye-health.svg" alt="Supports &lt;br&gt; Healthy Blood Sugar" />
                              <p className="leading-tight">Supports Eye<span className='block'>Health  <span className='block'>Erections</span></span></p>
                           </li>
                           <li className="flex flex-col items-center text-center text-primary">
                              <img className="w-10 h-10 mb-3" src="	https://getsightcarefast.org/l/lib/img/media/icons/healthy-lens.svg" alt="Supports &lt;br&gt; Healthy Energy Usage" />
                              <p className="leading-tight">Supports <span className='block'>Healthy Lens &</span> <span className='block'>Retina</span></p>
                           </li>
                           <li className="flex flex-col items-center text-center text-primary">
                              <img className="w-10 h-10 mb-3" src="https://getsightcarefast.org/l/lib/img/media/icons/visual-acuity.svg" alt="Supports &lt;br&gt; Healthy Gut" />
                              <p className="leading-tight">Enhances <span className='block'>Visual Acuity</span></p>
                           </li>
                           <li className="flex flex-col items-center text-center text-primary">
                              <img className="w-10 h-10 mb-3" src="https://getsightcarefast.org/l/lib/img/media/icons/lens-clarity.svg" alt="Increases &lt;br&gt; Energy Levels" />
                              <p className="leading-tight">Supports Lens<span className='block'>Clarity</span></p>
                           </li>
                           <li className="flex flex-col items-center text-center text-primary">
                              <img className="w-10 h-10 mb-3" src="	https://getsightcarefast.org/l/lib/img/media/icons/confidence.svg" alt="Supports &lt;br&gt; Healthy Digestion" />
                              <p className="leading-tight">Supports<span className='block'>Visual Focus</span></p>
                           </li>
                           <li className="flex flex-col items-center text-center text-primary">
                              <img className="w-10 h-10 mb-3" src="https://getsightcarefast.org/l/lib/img/media/icons/drop.svg" alt="Supports &lt;br&gt; Healthy Weight" />
                              <p className="leading-tight">Combats Dry<span className='block'>Eyes</span></p>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="p-3 col-span-2">
                     <div className="main-title-wrapper hidden md:block">
                        <h2 className="main-title text-primary font-black mt-1">Could SightCare be the Easiest Way to Achieve Eye Health?</h2>
                        <p className="product-rating"><span className="product-rating__text opacity-60 text-base">Formulated By Experts To Support visual acuity</span>
                         <span className="product-rating__stars text-yellow-500 text-xl">★★★★★</span>&nbsp;<span className="product-rating__mark text-sm whitespace-nowrap">(4.9 out of 5)</span></p>
                        <div className="bg-primary/20 w-1/3 h-0.5 my-5"></div>
                     </div>
                     <p className="text-sm my-0 text-center font-medium max-w-[70ch] mx-auto">
                        This Unique Supplement Has A Vison Supporting Superblend. Plus A Combination of Scientifically-Backed Ingredients That Supports Lens, Retina and Macula Eye Health.                     </p>
                     <div className="facts mt-4 grid sm:grid-cols-2 gap-5">
                        <div className="col-auto">
                           <h3 className="font-bold text-primary text-xl mb-4 flex items-center leading-tight">
                              <svg xmlns="http://www.w3.org/2000/svg" width="103" height="92" fill="currentColor" viewBox="0 0 103 92" class="w-8 h-8 mr-3">
                                 <path d="M36.7 84.9H8.3c-.8 0-1.5-.7-1.5-1.5V13.6c0-.8.7-1.5 1.5-1.5h56.9c.8 0 1.5.7 1.5 1.5v9.6c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5v-8H9.8V82h26.9c.8 0 1.5.7 1.5 1.5s-.7 1.4-1.5 1.4Z"></path>
                                 <path d="M49.1 91.4H1.5c-.8 0-1.5-.7-1.5-1.5V7.1c0-.8.7-1.5 1.5-1.5h10.7c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5H3v79.8h46.1c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5Zm22.8-61.1c-.8 0-1.5-.7-1.5-1.5V8.6h-9.2c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h10.7c.8 0 1.5.7 1.5 1.5v21.7c.1.8-.6 1.5-1.5 1.5Zm-17-19.8c-.8 0-1.5-.7-1.5-1.5V3.6H20V9c0 .8-.7 1.5-1.5 1.5S17 9.8 17 9V2.1c0-.8.7-1.5 1.5-1.5H55c.8 0 1.5.7 1.5 1.5V9c-.1.8-.7 1.5-1.6 1.5Z"></path>
                                 <path d="M21.9 32.9c-.4 0-.8-.2-1.1-.5l-3-3.3c-.6-.6-.5-1.6.1-2.1.6-.6 1.6-.5 2.1.1l1.8 2 3.6-3.9c.6-.6 1.5-.7 2.1-.1.6.6.7 1.5.1 2.1l-4.7 5.2c-.1.3-.5.5-1 .5Zm33-1.2H33.3c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h21.6c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5Zm-33 14.8c-.4 0-.8-.2-1.1-.5l-3-3.3c-.6-.6-.5-1.6.1-2.1.6-.6 1.6-.5 2.1.1l1.8 2 3.6-3.9c.6-.6 1.5-.7 2.1-.1.6.6.7 1.5.1 2.1L22.9 46c-.1.3-.5.5-1 .5Zm31.2-1.2H33.3c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h19.8c.8 0 1.5.7 1.5 1.5s-.6 1.5-1.5 1.5ZM21.9 60.1c-.4 0-.8-.2-1.1-.5l-3-3.3c-.6-.6-.5-1.6.1-2.1s1.6-.5 2.1.1l1.8 2 3.6-3.9c.6-.6 1.5-.7 2.1-.1.6.6.7 1.5.1 2.1l-4.7 5.2c-.1.3-.5.5-1 .5Zm20.5-1.2h-9c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h9c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5Zm42.1 32.5c-1 0-2-.1-3.1-.4-3.5-.9-7.1-.9-10.5 0-3.7.9-7.4.2-10.8-2-5-3.2-8.7-9-10.1-16-2.5-12.1 2.8-23.6 11.8-25.8 3.8-.9 7.9 0 11.5 2.5 1.7 1.2 4 1.2 5.7 0 3.6-2.6 7.7-3.5 11.5-2.5 8.9 2.2 14.2 13.8 11.8 25.8-1.4 7-5.1 12.8-10.1 16-2.5 1.6-5.1 2.4-7.7 2.4ZM64.8 49.9c-.8 0-1.6.1-2.3.3C55.1 52 50.8 62 53 72.5c1.2 6.1 4.5 11.3 8.8 14 2.7 1.7 5.6 2.3 8.4 1.6 4-1 8.1-1 12 0 2.8.7 5.7.1 8.4-1.6 4.2-2.7 7.5-7.9 8.8-14 2.1-10.5-2.1-20.5-9.5-22.3-3-.7-6.1 0-9 2.1-2.8 2-6.4 2-9.2 0-2.3-1.6-4.6-2.4-6.9-2.4Z"></path>
                                 <path d="M76.1 53.7c-.7 0-1.4-.6-1.5-1.3 0-.4-1.1-8.7 6.9-15.8.6-.6 1.6-.5 2.1.1.6.6.5 1.6-.1 2.1-6.7 6.1-6 12.9-5.9 13.2.1.8-.5 1.6-1.3 1.7h-.2Z"></path>
                                 <path d="M72.5 46.5c-7.4 0-11.2-4.8-11.4-5.1-.5-.7-.4-1.6.2-2.1 4.4-3.6 8.7-5.1 12.7-4.6 4.8.6 7.4 4.2 7.5 4.3.5.7.3 1.6-.3 2.1-.7.5-1.6.3-2.1-.3 0 0-2-2.6-5.5-3.1-2.7-.3-5.8.6-9 2.9 1.4 1.1 4 2.8 7.9 2.8.8 0 1.5.7 1.5 1.5s-.6 1.6-1.5 1.6Z"></path>
                              </svg>
                              <span>What You Need To&nbsp;Know</span></h3>
                           <ul className="facts__list font-medium opacity-80">
                              <li className="flex items-baseline leading-tight mb-4">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="81" height="68" fill="currentColor" viewBox="0 0 81 68" className="w-8 h-4 stroke-0 fill-primary/40 mr-3 flex-none">
                                    <path fill-rule="evenodd" d="M69.964.585a3.948 3.948 0 0 1 2.958-.483 4.009 4.009 0 0 1 2.461 1.74L79.351 8a4.136 4.136 0 0 1-.621 5.222l-.013.016-.284.27-.902.876a339.426 339.426 0 0 0-14.508 15.24c-8.805 9.854-19.262 22.752-26.3 35.266-1.963 3.492-6.76 4.243-9.606 1.228L1.126 38.634a4.089 4.089 0 0 1-.855-1.371 4.145 4.145 0 0 1 .11-3.18c.228-.496.55-.94.95-1.307l7.855-7.211a3.97 3.97 0 0 1 2.504-1.046 3.96 3.96 0 0 1 2.586.813l13.262 10.12C48.25 14.662 60 6.682 69.964.585Z" clip-rule="evenodd" /></svg>
                                 <span>No Fillers</span></li>
                              <li className="flex items-baseline leading-tight mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="81" height="68" fill="currentColor" viewBox="0 0 81 68" className="w-8 h-4 stroke-0 fill-primary/40 mr-3 flex-none">

                                 <path fill-rule="evenodd" d="M69.964.585a3.948 3.948 0 0 1 2.958-.483 4.009 4.009 0 0 1 2.461 1.74L79.351 8a4.136 4.136 0 0 1-.621 5.222l-.013.016-.284.27-.902.876a339.426 339.426 0 0 0-14.508 15.24c-8.805 9.854-19.262 22.752-26.3 35.266-1.963 3.492-6.76 4.243-9.606 1.228L1.126 38.634a4.089 4.089 0 0 1-.855-1.371 4.145 4.145 0 0 1 .11-3.18c.228-.496.55-.94.95-1.307l7.855-7.211a3.97 3.97 0 0 1 2.504-1.046 3.96 3.96 0 0 1 2.586.813l13.262 10.12C48.25 14.662 60 6.682 69.964.585Z" clip-rule="evenodd" /></svg>
                                 <span>Has 7 Powerful Ingredients</span></li>
                              <li className="flex items-baseline leading-tight mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="81" height="68" fill="currentColor" viewBox="0 0 81 68" className="w-8 h-4 stroke-0 fill-primary/40 mr-3 flex-none">
                                 <path fill-rule="evenodd" d="M69.964.585a3.948 3.948 0 0 1 2.958-.483 4.009 4.009 0 0 1 2.461 1.74L79.351 8a4.136 4.136 0 0 1-.621 5.222l-.013.016-.284.27-.902.876a339.426 339.426 0 0 0-14.508 15.24c-8.805 9.854-19.262 22.752-26.3 35.266-1.963 3.492-6.76 4.243-9.606 1.228L1.126 38.634a4.089 4.089 0 0 1-.855-1.371 4.145 4.145 0 0 1 .11-3.18c.228-.496.55-.94.95-1.307l7.855-7.211a3.97 3.97 0 0 1 2.504-1.046 3.96 3.96 0 0 1 2.586.813l13.262 10.12C48.25 14.662 60 6.682 69.964.585Z" clip-rule="evenodd" /></svg>
                                 <span>Rigorously Tested Ingredients That You &nbsp; CanTrust</span></li>
                           </ul>
                        </div>
                        <div className="col-auto">
                           <h3 className="flex items-center font-bold text-primary text-xl mb-4">
                              <svg xmlns="http://www.w3.org/2000/svg" width="99" height="90" fill="currentColor" viewBox="0 0 99 90" className="fill-current w-8 h-8 mr-3">
                                 <path d="M84.41 80.587c-.2 0-.4 0-.6-.1-.8-.4-1.1-1.3-.7-2l10.7-22.8c1.6-3.3 2-7.2 1.1-10.7l-4.6-18.7c-.3-1.1-1.3-1.8-2.4-1.6-1 .2-1.7 1.1-1.6 2.2l1.9 16c.1.8-.5 1.6-1.3 1.7-.8.1-1.6-.5-1.7-1.3l-1.9-16c-.3-2.6 1.5-5 4.1-5.5 2.7-.5 5.3 1.2 6 3.8l4.6 18.7c1 4.3.6 8.8-1.3 12.8l-10.7 22.8c-.5.3-1.1.7-1.6.7Z" />
                                 <path d="M66.71 74.287c-.8 0-1.4-.6-1.5-1.4-.2-2.1.3-4.2 1.4-6l11.1-18.8c1.4-2.4 4.6-3.3 7.1-2 1.3.7 2.2 1.8 2.7 3.1.4 1.4.3 2.8-.3 4.1l-6.7 13c-.4.7-1.3 1-2 .7-.7-.4-1-1.3-.7-2l6.7-13c.3-.6.3-1.2.1-1.8-.2-.6-.6-1.1-1.2-1.4-1.1-.6-2.4-.2-3.1.9l-11.1 18.8c-.7 1.3-1.1 2.7-1 4.2.1.8-.5 1.6-1.4 1.6h-.1Zm19 15.2h-19.9c-1.9 0-3.4-1.5-3.4-3.4v-5.2c0-1.9 1.5-3.4 3.4-3.4h19.9c1.9 0 3.4 1.5 3.4 3.4v5.2c0 1.9-1.5 3.4-3.4 3.4Zm-19.9-8.9c-.2 0-.4.2-.4.4v5.2c0 .2.2.4.4.4h19.9c.2 0 .4-.2.4-.4v-5.2c0-.2-.2-.4-.4-.4h-19.9Zm-51 0c-.6 0-1.1-.3-1.4-.9l-10.7-22.8c-1.9-4-2.3-8.5-1.3-12.8l4.6-18.7c.7-2.7 3.3-4.3 6-3.8 2.6.5 4.4 2.9 4.1 5.5l-1.9 16c-.1.8-.9 1.4-1.7 1.3-.8-.1-1.4-.9-1.3-1.7l1.9-16c.1-1-.6-2-1.6-2.2-1.1-.2-2.2.5-2.4 1.6l-4.6 18.7c-.9 3.6-.5 7.4 1.1 10.7l10.7 22.8c.4.8 0 1.7-.7 2-.3.2-.6.3-.8.3Z" />
                                 <path d="M32.509 74.287h-.1c-.8-.1-1.5-.8-1.4-1.6.1-1.5-.2-2.9-1-4.2l-11.1-18.8c-.6-1.1-2-1.5-3.1-.9s-1.6 2-1 3.1l6.7 13c.4.7.1 1.7-.7 2-.7.4-1.7.1-2-.7l-6.7-13c-1.4-2.6-.3-5.9 2.3-7.2 2.5-1.3 5.6-.4 7.1 2l11.1 18.8c1.1 1.8 1.5 3.9 1.4 6-.1.9-.8 1.5-1.5 1.5Zm.901 15.2h-19.9c-1.9 0-3.4-1.5-3.4-3.4v-5.2c0-1.9 1.5-3.4 3.4-3.4h19.9c1.9 0 3.4 1.5 3.4 3.4v5.2c0 1.9-1.5 3.4-3.4 3.4Zm-19.9-8.9c-.2 0-.4.2-.4.4v5.2c0 .2.2.4.4.4h19.9c.2 0 .4-.2.4-.4v-5.2c0-.2-.2-.4-.4-.4h-19.9Zm36.1-41.1c-.4 0-.7-.1-1-.4-5.7-5.1-8.8-11.9-8.8-19.1 0-7.2 3.1-14 8.8-19.1.6-.5 1.5-.5 2 0 5.7 5.1 8.8 11.9 8.8 19.1 0 7.2-3.1 14-8.8 19.1-.3.3-.7.4-1 .4Zm0-35.5c-4.4 4.4-6.8 10-6.8 15.9s2.4 11.5 6.8 15.9c4.4-4.4 6.8-10 6.8-15.9s-2.4-11.5-6.8-15.9Z" />
                                 <path d="M58.51 41.287c-3.1 0-6.4-.6-9.5-1.9-.8-.3-1.2-1.2-.8-2 .3-.8 1.2-1.2 2-.8 5.9 2.4 12.3 2.2 17-.5 3.6-2.1 6.1-5.4 7-9.7-.3-.1-.5-.2-.8-.2-.8-.2-1.3-1-1.2-1.8.2-.8 1-1.3 1.8-1.2.8.2 1.6.4 2.5.8.7.3 1 .9.9 1.6-.9 5.9-3.9 10.4-8.8 13.1-2.9 1.7-6.4 2.6-10.1 2.6Z" />
                                 <path d="M49.61 39.487c-.7 0-1.4-.5-1.5-1.2-.2-.8.4-1.6 1.2-1.8 7.2-1.3 13.1-4.9 16-9.9 2.3-3.9 2.7-8.5 1.4-13.5-1 .2-2.1.6-3.1.9-.8.3-1.7-.1-1.9-.9-.3-.8.1-1.7.9-1.9 1.6-.6 3.6-1.1 4.8-1.4.7-.1 1.5.3 1.7 1 2.2 6.3 1.7 12.3-1.2 17.3-3.4 5.7-9.9 9.9-18 11.4h-.3Z" />
                                 <path d="M40.61 41.287c-3.7 0-7.2-.9-10.2-2.5-4.8-2.7-7.8-7.3-8.8-13.1-.1-.7.3-1.4.9-1.6.9-.4 1.7-.6 2.5-.8.8-.2 1.6.3 1.8 1.2.2.8-.3 1.6-1.2 1.8-.3.1-.5.1-.8.2 1 4.3 3.4 7.7 7 9.7 4.8 2.7 11.1 2.9 17 .5.8-.3 1.7.1 2 .8.3.8-.1 1.7-.8 2-3 1.1-6.2 1.8-9.4 1.8Z" />
                                 <path d="M49.61 39.487h-.3c-8.1-1.5-14.7-5.6-18-11.4-2.9-5-3.4-11-1.2-17.3.2-.7 1-1.1 1.7-1 1.7.3 3.4.8 5 1.5.8.3 1.1 1.2.8 2-.3.8-1.2 1.1-2 .8-1-.4-2.1-.8-3.1-1-1.4 4.9-.9 9.6 1.4 13.5 2.9 5 8.7 8.6 16 9.9.8.2 1.4.9 1.2 1.8-.2.7-.8 1.2-1.5 1.2Z" />
                              </svg>
                              <span>Helps With</span></h3>
                           <ul className="facts__list font-medium opacity-80">
                              <li className="flex items-baseline leading-tight mb-4">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="81" height="68" fill="currentColor" viewBox="0 0 81 68" className="w-8 h-4 stroke-0 fill-primary/40 mr-3 flex-none">
                                    <path fill-rule="evenodd" d="M69.964.585a3.948 3.948 0 0 1 2.958-.483 4.009 4.009 0 0 1 2.461 1.74L79.351 8a4.136 4.136 0 0 1-.621 5.222l-.013.016-.284.27-.902.876a339.426 339.426 0 0 0-14.508 15.24c-8.805 9.854-19.262 22.752-26.3 35.266-1.963 3.492-6.76 4.243-9.606 1.228L1.126 38.634a4.089 4.089 0 0 1-.855-1.371 4.145 4.145 0 0 1 .11-3.18c.228-.496.55-.94.95-1.307l7.855-7.211a3.97 3.97 0 0 1 2.504-1.046 3.96 3.96 0 0 1 2.586.813l13.262 10.12C48.25 14.662 60 6.682 69.964.585Z" clip-rule="evenodd" /></svg>
                                 <span>Supporting Blood Circulation and Combating Dry Eyes</span></li>
                              <li className="flex items-baseline leading-tight mb-4">

                                 <svg xmlns="http://www.w3.org/2000/svg" width="81" height="68" fill="currentColor" viewBox="0 0 81 68" className="w-8 h-4 stroke-0 fill-primary/40 mr-3 flex-none">
                                    <path fill-rule="evenodd" d="M69.964.585a3.948 3.948 0 0 1 2.958-.483 4.009 4.009 0 0 1 2.461 1.74L79.351 8a4.136 4.136 0 0 1-.621 5.222l-.013.016-.284.27-.902.876a339.426 339.426 0 0 0-14.508 15.24c-8.805 9.854-19.262 22.752-26.3 35.266-1.963 3.492-6.76 4.243-9.606 1.228L1.126 38.634a4.089 4.089 0 0 1-.855-1.371 4.145 4.145 0 0 1 .11-3.18c.228-.496.55-.94.95-1.307l7.855-7.211a3.97 3.97 0 0 1 2.504-1.046 3.96 3.96 0 0 1 2.586.813l13.262 10.12C48.25 14.662 60 6.682 69.964.585Z" clip-rule="evenodd" /></svg>
                                 <span>Supporting Lens, Retina, and Macula of the Eye</span>
                              </li>
                              <li className="flex items-baseline leading-tight mb-4">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="81" height="68" fill="currentColor" viewBox="0 0 81 68" className="w-8 h-4 stroke-0 fill-primary/40 mr-3 flex-none">
                                    <path fill-rule="evenodd" d="M69.964.585a3.948 3.948 0 0 1 2.958-.483 4.009 4.009 0 0 1 2.461 1.74L79.351 8a4.136 4.136 0 0 1-.621 5.222l-.013.016-.284.27-.902.876a339.426 339.426 0 0 0-14.508 15.24c-8.805 9.854-19.262 22.752-26.3 35.266-1.963 3.492-6.76 4.243-9.606 1.228L1.126 38.634a4.089 4.089 0 0 1-.855-1.371 4.145 4.145 0 0 1 .11-3.18c.228-.496.55-.94.95-1.307l7.855-7.211a3.97 3.97 0 0 1 2.504-1.046 3.96 3.96 0 0 1 2.586.813l13.262 10.12C48.25 14.662 60 6.682 69.964.585Z" clip-rule="evenodd" /></svg>
                                 <span>Supporting Clarity of the Lens</span></li>
                           </ul>
                        </div>
                     </div>


                     <div className="offers">
                        <h3 className="offers__title text-primary text-center text-3xl font-medium">Choose Your Package
                           <div className="common-separator h-1 bg-amber-500 w-24 mx-auto my-2"></div>
                        </h3>
                        <div className="offers__container flex flex-wrap justify-center gap-4 mt-6">
                           <div className="offer-card relative flex flex-col items-center featured">
                              <h4 className="offer-card__title bg-primary text-white self-stretch p-1 text-center font-bold text-lg">
                                 6 Bottles
                              </h4>
                              <div className="offer-card__body flex-1 flex flex-col items-center border-l-2 border-r-2 border-b-2 border-amber-500 rounded-b-lg w-full p-3">
                                 <div className="offer-card__retail text-red-600 font-medium"><small>Retail
                                    <s>&nbsp;$894&nbsp;</s></small></div>
                                 <div className="offer-card__per-bottle flex items-center flex-1">
                                    <div className="font-black text-5xl">$49</div><span className="leading-tight ml-1">per <span className='block'>bottle</span>       </span>
                                 </div>
                                 <div className="offer-card__savings text-red-600 flex-1">You Save - $600</div>
                                 <div className="offer-card__savings offer-card__fullprice font-bold text-sm empty:hidden flex-1">
                                    Total - $294</div>
                                 <p className="offer-card__disclaimer text-xs uppercase leading-none my-2 text-center mt-auto">
                                    THIS IS ONE TIME PAYMENT <span className='block'>        THERE ARE NO MONTHLY CHARGES </span></p>
                                 <a className="order-link-6-bottle" href="https://tntmedia23_fitspresso.pay.clickbank.net/?cbitems=1-FS7-234&cbskin=44186&cbfid=55692&cbexit=3245">
                                    <button className="offer-card__cta max-w-sm rounded-md uppercase tracking-wide text-white font-black text-lg px-2 py-1 mt-3 w-full">
                                       Add to Cart</button></a>
                              </div>
                           </div>
                           <div className="offer-card relative flex flex-col items-center">
                              <h4 className="offer-card__title bg-primary text-white self-stretch p-1 text-center font-bold text-lg">
                                 3 Bottles</h4>
                              <div className="offer-card__body flex-1 flex flex-col items-center border-l-2 border-r-2 border-b-2 border-amber-500 rounded-b-lg w-full p-3">
                                 <div className="offer-card__retail text-red-600 font-medium"><small>Retail
                                    <s>&nbsp;$447&nbsp;</s></small></div>
                                 <div className="offer-card__per-bottle flex items-center flex-1">
                                    <div className="font-black text-5xl">$59</div><span className="leading-tight ml-1">per  <span className='block'>bottle</span></span>
                                 </div>
                                 <div className="offer-card__savings text-red-600 flex-1">You Save - $270</div>
                                 <div className="offer-card__savings offer-card__fullprice font-bold text-sm empty:hidden flex-1">
                                    Total - $294</div>
                                 <p className="offer-card__disclaimer text-xs uppercase leading-none my-2 text-center mt-auto">
                                    THIS IS ONE TIME PAYMENT  <span className='block'>    THERE ARE NO MONTHLY CHARGES </span> </p>
                                 <a className="order-link-3-bottle" href="https://tntmedia23_fitspresso.pay.clickbank.net/?cbitems=1-FS7-234&cbskin=44186&cbfid=55692&cbexit=3245">
                                    <button className="offer-card__cta max-w-sm rounded-md uppercase tracking-wide text-white font-black text-lg px-2 py-1 mt-3 w-full">Add to Cart</button></a>
                              </div>
                           </div>
                           <div className="offer-card relative flex flex-col items-center">
                              <h4 className="offer-card__title bg-primary text-white self-stretch p-1 text-center font-bold text-lg">
                                 1 Bottle</h4>
                              <div className="offer-card__body flex-1 flex flex-col items-center border-l-2 border-r-2 border-b-2 border-amber-500 rounded-b-lg w-full p-3">
                                 <div className="offer-card__retail text-red-600 font-medium"><small>Retail
                                    <s>&nbsp;$149&nbsp;</s></small></div>
                                 <div className="offer-card__per-bottle flex items-center flex-1">
                                    <div className="font-black text-5xl">$69</div><span className="leading-tight ml-1">per
                                       <span className='block'>bottle</span></span>
                                 </div>
                                 <div className="offer-card__savings text-red-600 flex-1">You Save - $80</div>
                                 <p className="offer-card__disclaimer text-xs uppercase leading-none my-2 text-center mt-auto">
                                    THIS IS ONE TIME PAYMENT <span className='block'>
                                       THERE ARE NO MONTHLY CHARGES</span></p>
                                 <a className="order-link-1-bottle" href="https://tntmedia23_fitspresso.pay.clickbank.net/?cbitems=1-FS1-059&cbskin=44184&cbfid=55690&cbexit=3245">
                                    <button className="offer-card__cta max-w-sm rounded-md uppercase tracking-wide text-white font-black text-lg px-2 py-1 mt-3 w-full">Add to Cart</button></a>
                              </div>
                           </div>
                        </div>
                     </div>

                  </div>
               </div>
            </div>
         </section>
      </>
   );
}

export default ProductInfo;