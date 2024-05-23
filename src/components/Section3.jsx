import React from 'react';

function Section3() {
    return (
        <div>
            <section className="section__reviews mt-12 bg-white">
                <div className="container px-4">
                    <h2 className="reviews__title font-black text-center text-primary">Real FitSpresso<small><sup>®</sup></small> Users</h2>
                    <div className="flex justify-center">
                        <p className="mt-4 i-b rounded-2xl bg-primary text-white px-16 py-4 text-5xl text-center font-bold">Life Changing Results</p>
                    </div>
                    <div className="flex justify-center my-8">
                        <picture>
                            <source media="(max-width: 768px)" srcSet="https://tryfitspresso.org/l/lib/img/media/user-photosm1.webp" width="658" />
                            <img src="https://getsightcarefast.org/l/lib/img/media/user-photos1.webp" width="690" height="266" alt="User Photos" loading="lazy" className="mx-auto max-h-[500px] w-auto" />
                        </picture>
                    </div>
                    <div className="mx-auto reviews-list max-w-3xl">
                        <div className="border-b-4 py-6 sm:py-10 px-2 sm:px-6 md:px-12 border-primary-dark/10 last:border-none">
                            <div className="flex items-center gap-2">
                                <div className="w-12 h-12 flex-none">
                                    <img className="object-cover w-full h-full rounded-xl" loading="lazy" src="https://getsightcarefast.org/l/lib/img/media/review1.webp" alt="Shannon Curry - Denver, Colorado" />
                                </div>
                                <div className="flex items-center flex-wrap gap-1">
                                    <div className="review__stars flex">
                                        <img className="w-3 mx-px h-auto" src="https://tryfitspresso.org/l/lib/img/media/star.svg" alt="Star Icon" height="12" width="12" />
                                        <img className="w-3 mx-px h-auto" src="https://tryfitspresso.org/l/lib/img/media/star.svg" alt="Star Icon" height="12" width="12" />
                                        <img className="w-3 mx-px h-auto" src="https://tryfitspresso.org/l/lib/img/media/star.svg" alt="Star Icon" height="12" width="12" />
                                        <img className="w-3 mx-px h-auto" src="https://tryfitspresso.org/l/lib/img/media/star.svg" alt="Star Icon" height="12" width="12" />
                                        <img className="w-3 mx-px h-auto" src="https://tryfitspresso.org/l/lib/img/media/star.svg" alt="Star Icon" height="12" width="12" />
                                    </div>
                                    <div className="bg-[#75b843] text-white font-black py-px px-1 rounded-md text-xs">5 Stars</div>
                                    <div className="verified flex items-center text-xs">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="fill-primary w-4 h-4 mr-2">
                                            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm131.3 170.4l-159 204c-1.3 1.3-3.3 4-5.8 4-2.6 0-4.3-1.8-5.8-3.3s-90.2-86.7-90.2-86.7l-1.7-1.7c-.7-1-1.3-2.3-1.3-3.7s.6-2.6 1.3-3.7c.5-.5.8-.8 1.3-1.4 8.8-9.3 26.6-28 27.8-29.1 1.5-1.5 2.7-3.4 5.5-3.4 2.9 0 4.7 2.4 6.1 3.8 1.4 1.4 51.4 49.5 51.4 49.5L344 135.2c1.1-.9 2.5-1.6 4-1.6s2.9.6 4 1.5l35 27.5c.9 1.1 1.5 2.5 1.5 4 .1 1.5-.5 2.8-1.2 3.8z" />
                                        </svg>
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-primary w-4 h-4 mr-2">
                                            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm131.3 170.4l-159 204c-1.3 1.3-3.3 4-5.8 4-2.6 0-4.3-1.8-5.8-3.3s-90.2-86.7-90.2-86.7l-1.7-1.7c-.7-1-1.3-2.3-1.3-3.7s.6-2.6 1.3-3.7c.5-.5.8-.8 1.3-1.4 8.8-9.3 26.6-28 27.8-29.1 1.5-1.5 2.7-3.4 5.5-3.4 2.9 0 4.7 2.4 6.1 3.8 1.4 1.4 51.4 49.5 51.4 49.5L344 135.2c1.1-.9 2.5-1.6 4-1.6s2.9.6 4 1.5l35 27.5c.9 1.1 1.5 2.5 1.5 4 .1 1.5-.5 2.8-1.2 3.8z" />
                                        </svg> */}
                                        <b>Verified Purchase (6 Bottles)</b>
                                    </div>
                                </div>
                            </div>
                            <p className="text-base lg:text-lg font-light italic my-4">This is literally the simplest thing you can do for your health and your metabolism. I lost 34lbs. I have more energy than I’ve ever had in my life. And it’s literally just from making this change. I really do feel great.</p>
                            <div className="div"><b>John B. Thomas </b> - Fort Gibson, OK</div>
                        </div>
                        <div className="border-b-4 py-6 sm:py-10 px-2 sm:px-6 md:px-12 border-primary-dark/10 last:border-none">
                            <div className="flex items-center gap-2">
                                <div className="w-12 h-12 flex-none">
                                    <img className="object-cover w-full h-full rounded-xl" loading="lazy" src="	https://getsightcarefast.org/l/lib/img/media/review2.webp" alt="Donna Angelman" />
                                </div>
                                <div className="flex items-center flex-wrap gap-1">
                                    <div className="review__stars flex">
                                        <img className="w-3 mx-px h-auto" src="https://tryfitspresso.org/l/lib/img/media/star.svg" alt="Star Icon" height="12" width="12" />
                                        <img className="w-3 mx-px h-auto" src="https://tryfitspresso.org/l/lib/img/media/star.svg" alt="Star Icon" height="12" width="12" />
                                        <img className="w-3 mx-px h-auto" src="https://tryfitspresso.org/l/lib/img/media/star.svg" alt="Star Icon" height="12" width="12" />
                                        <img className="w-3 mx-px h-auto" src="https://tryfitspresso.org/l/lib/img/media/star.svg" alt="Star Icon" height="12" width="12" />
                                        <img className="w-3 mx-px h-auto" src="https://tryfitspresso.org/l/lib/img/media/star.svg" alt="Star Icon" height="12" width="12" />
                                    </div>
                                    <div className="bg-[#75b843] text-white font-black py-px px-1 rounded-md text-xs">5 Stars</div>
                                    <div className="verified flex items-center text-xs">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-primary w-4 h-4 mr-2">
                                            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm131.3 170.4l-159 204c-1.3 1.3-3.3 4-5.8 4-2.6 0-4.3-1.8-5.8-3.3s-90.2-86.7-90.2-86.7l-1.7-1.7c-.7-1-1.3-2.3-1.3-3.7s.6-2.6 1.3-3.7c.5-.5.8-.8 1.3-1.4 8.8-9.3 26.6-28 27.8-29.1 1.5-1.5 2.7-3.4 5.5-3.4 2.9 0 4.7 2.4 6.1 3.8 1.4 1.4 51.4 49.5 51.4 49.5L344 135.2c1.1-.9 2.5-1.6 4-1.6s2.9.6 4 1.5l35 27.5c.9 1.1 1.5 2.5 1.5 4 .1 1.5-.5 2.8-1.2 3.8z" />
                                        </svg>
                                        <b>Verified Purchase (6 Bottles)</b>
                                    </div>
                                </div>
                            </div>
                            <p className="text-base lg:text-lg font-light italic my-4">Wow! Who would have thought this simple technique would help me lose so much weight and so easily. I can't thank you enough</p>
                            <div className="div"><b>Marla Holloway </b> - Lubbock, TX</div>
                        </div>
                        <div className="border-b-4 py-6 sm:py-10 px-2 sm:px-6 md:px-12 border-primary-dark/10 last:border-none">
                            <div className="flex items-center gap-2">
                                <div className="w-12 h-12 flex-none">
                                    <img className="object-cover w-full h-full rounded-xl" loading="lazy" src="https://getsightcarefast.org/l/lib/img/media/review3.webp" alt="Roberta S" />
                                </div>
                                <div className="flex items-center flex-wrap gap-1">
                                    <div className="review__stars flex">
                                        <img className="w-3 mx-px h-auto" src="https://tryfitspresso.org/l/lib/img/media/star.svg" alt="Star Icon" height="12" width="12" />
                                        <img className="w-3 mx-px h-auto" src="https://tryfitspresso.org/l/lib/img/media/star.svg" alt="Star Icon" height="12" width="12" />
                                        <img className="w-3 mx-px h-auto" src="https://tryfitspresso.org/l/lib/img/media/star.svg" alt="Star Icon" height="12" width="12" />
                                        <img className="w-3 mx-px h-auto" src="https://tryfitspresso.org/l/lib/img/media/star.svg" alt="Star Icon" height="12" width="12" />
                                        <img className="w-3 mx-px h-auto" src="https://tryfitspresso.org/l/lib/img/media/star.svg" alt="Star Icon" height="12" width="12" />
                                    </div>
                                    <div className="bg-[#75b843] text-white font-black py-px px-1 rounded-md text-xs">5 Stars</div>
                                    <div className="verified flex items-center text-xs">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-primary w-4 h-4 mr-2">
                                            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm131.3 170.4l-159 204c-1.3 1.3-3.3 4-5.8 4-2.6 0-4.3-1.8-5.8-3.3s-90.2-86.7-90.2-86.7l-1.7-1.7c-.7-1-1.3-2.3-1.3-3.7s.6-2.6 1.3-3.7c.5-.5.8-.8 1.3-1.4 8.8-9.3 26.6-28 27.8-29.1 1.5-1.5 2.7-3.4 5.5-3.4 2.9 0 4.7 2.4 6.1 3.8 1.4 1.4 51.4 49.5 51.4 49.5L344 135.2c1.1-.9 2.5-1.6 4-1.6s2.9.6 4 1.5l35 27.5c.9 1.1 1.5 2.5 1.5 4 .1 1.5-.5 2.8-1.2 3.8z" />
                                        </svg>
                                        <b>Verified Purchase (6 Bottles)</b>
                                    </div>
                                </div>
                            </div>
                            <p className="text-base lg:text-lg font-light italic my-4">I'm just writing to tell you how grateful I am for finding you. I've shared this secret with all my friends that struggled with weight. Thank you!</p>
                            <div className="div"><b>Greg Stevenson</b> - Altoona, PA</div>
                        </div>
                    </div>
                    <div className="flex justify-center my-8">
                        <picture>
                            <source media="(max-width: 768px)" srcSet="https://tryfitspresso.org/l/lib/img/media/user-photosm2.webp" width="658" />
                            <source media="(max-width: 768px)" srcSet="lib/img/media/user-photosm2.webp" width="658" />
                            <img src="https://getsightcarefast.org/l/lib/img/media/user-photos2.webp" width="667" height="772" alt="User Photos" loading="lazy" className="mx-auto max-h-[500px] w-auto" />
                        </picture>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Section3;
