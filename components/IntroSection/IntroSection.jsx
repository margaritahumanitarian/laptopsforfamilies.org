import React from 'react';

import WaveSeparator from '../WaveSeparator/WaveSeparator';

export default function IntroSection() {
    return (
        <>
            {/* <!--Hero--> */}
            <div className="pt-24">
                <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                    {/* <!--Left Col--> */}
                    <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                        <p className="uppercase tracking-loose w-full">
                            Get a 501(c)(3) tax-deductible receipt
                        </p>
                        <h1 className="my-4 text-5xl font-bold leading-tight">
                            We're collecting used laptops for 1000+ families in need.
                        </h1>
                        <p className="leading-normal text-2xl mb-8">
                            Kids and teens around the world are struggling with their homework because they don't have access to computers.
                        </p>
                        <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                            Learn More
                        </button>
                    </div>
                    {/* <!--Right Col--> */}
                    <div className="w-full md:w-3/5 py-6 text-center">
                        <img className="w-full md:w-4/5 z-50" src="/images/hero.png" />
                    </div>
                </div>
            </div>
            <div className="relative -mt-12 lg:-mt-24">
                <WaveSeparator />
            </div>
        </>
    );
};
