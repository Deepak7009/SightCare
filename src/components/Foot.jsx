import React from 'react';

function Foot() {
    return (
        <div className=' bg-gray-100'>
            <div className=''>
                <div className="flex justify-center">
                    <footer className="py-12">
                        <div className="container max-w-4xl text-xs text-[#b0b0b0]">
                            <ul className="footer__nav flex flex-col gap-4 items-center sm:flex-row justify-between px-8">
                                <li><a href="https://getfitspresso.com/info/privacy" rel="noopener" target="_blank">Privacy</a></li>
                                <li><a href="https://getfitspresso.com/info/terms" rel="noopener" target="_blank">Terms &amp; Conditions</a></li>
                                <li id="disclaimer-link"><a href="https://getfitspresso.com/info/disclaimer" rel="noopener" target="_blank">Disclaimer</a></li>
                                <li><a href="https://getfitspresso.com/info/contact-cb" rel="noopener" target="_blank">Contact</a></li>
                            </ul>
                            <div className="flex flex-col justify-center items-center md:flex-row gap-3 bg-[#eaeaea] rounded-2xl py-2 px-4 mt-8 mb-5">
                                <img alt="Clickbank Logo" loading="lazy" src="https://getsightcarefast.org/l/lib/img/media/logo-buygoods.svg" width="212" height="28" />
                                <p>ClickBank is the retailer of this product. CLICKBANK® is a registered trademark of Click Sales, Inc., a Delaware corporation located at 1444 S. Entertainment Ave., Suite 410 Boise, ID 83709, USA and used by permission. ClickBank's role as retailer does not constitute an endorsement, approval or review of this product or any claim, statement or opinion used in promotion of this product.</p>
                            </div>
                            <div className="footer__disc text-center">
                                <p>All statements and results presented on this website are for informational purposes only. They are not specific medical advice for any individual. Neither the website, nor product should substitute medical advice given by a certified health professional. If you have a health problem, or you have sensible allergies, are pregnant or diagnosed with chronic conditions, it is strongly recommended that you consult your doctor immediately and before taking any pills or supplements. Individual results may vary depending on the case. Copyright © 2023. All Rights Reserved.</p>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default Foot;
