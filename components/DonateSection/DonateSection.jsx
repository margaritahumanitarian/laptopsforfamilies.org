import React from 'react';

import DonateCard from '../DonateCard/DonateCard';
export default function DonateSection() {
    return (<section className="bg-white border-b py-8">
        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
            <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                We Accept
            </h1>
            <div className="w-full mb-4">
                <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <DonateCard subtitle={'LAPTOP DONATIONS'}
                        title={'Used Laptops'}
                        description={'Drop off your old laptops at a location near you. Requirements vary by location, but typically laptops under 10 years old are accepted.'}
                        ctaTitle={'Donate Laptops'} />
            <DonateCard subtitle={'OTHER DEVICES'}
                        title={'Other Electronics Donations'}
                        description={'Some locations also accept iPad and Android tablets, smartphones, virtual reality headsets, and other electronic devices.'}
                        ctaTitle={'Donate Devices'} />
            <DonateCard subtitle={'FINANCIAL SUPPORT'}
                        title={'Help Us Run This Program'}
                        description={'We need your help to get this program fully off the ground and keep it running. Your financial support goes towards our costs and expenses.'}
                        ctaTitle={'Donate Funds'} />
        </div>
    </section>)
};
