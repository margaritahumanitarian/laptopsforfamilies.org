import React from 'react';

export default function SignUpSection() {
    return (<section className="bg-gray-100 py-8">
        <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
            <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                Electronics Donations
            </h1>
            <div className="w-full mb-4">
                <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
                <div
                    className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
                    <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                        <div className="p-8 text-3xl font-bold text-center border-b-4">
                            Electronic Device
                        </div>
                        <ul className="w-full text-center text-sm">
                            <li className="border-b py-4">Smartphone</li>
                            <li className="border-b py-4">iPad or Android Tablet</li>
                            <li className="border-b py-4">VR Headset</li>
                        </ul>
                    </div>
                    <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                        <div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                            1
                            <span className="text-base">device for one person</span>
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10">
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                        <div className="w-full p-8 text-3xl font-bold text-center">Laptop</div>
                        <div className="h-1 w-full gradient my-0 py-0 rounded-t"></div>
                        <ul className="w-full text-center text-base font-bold">
                            <li className="border-b py-4">Up to 10 years old</li>
                            <li className="border-b py-4">Fresh Ubuntu install (optional)</li>
                            <li className="border-b py-4">Clean</li>
                            <li className="border-b py-4">Provide original receipt if possible</li>
                        </ul>
                    </div>
                    <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                        <div className="w-full pt-6 text-4xl font-bold text-center">
                            1
                            <span className="text-base">laptop for 1 person</span>
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
                    <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                        <div className="p-8 text-3xl font-bold text-center border-b-4">
                            Bulk Electronic Devices
                        </div>
                        <ul className="w-full text-center text-sm">
                            <li className="border-b py-4">Help many families</li>
                            <li className="border-b py-4">Clear out your office</li>
                            <li className="border-b py-4">Optional recognition for your company</li>
                        </ul>
                    </div>
                    <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                        <div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                            500+
                            <span className="text-base">devices for each school</span>
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>)
};
