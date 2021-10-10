import React from 'react';

import IntroSection from '../components/IntroSection/IntroSection';
import OpportunitySection from '../components/OpportunitySection/OpportunitySection';
import DonateSection from '../components/DonateSection/DonateSection';
import DropOffSection from '../components/DropOffSection/DropOffSection';
import SignUpSection from '../components/SignUpSection/SignUpSection';
import RedWaveSeparator from '../components/RedWaveSeparator/RedWaveSeparator';
import Footer from '../components/Footer/Footer';

export default function Home() {
    return (
        <main className="leading-normal tracking-normal text-white gradient">
            <IntroSection />
            <OpportunitySection />
            <DonateSection />
            <SignUpSection />
            <RedWaveSeparator />
            <DropOffSection/>
            <Footer/>
        </main>
    )
};
