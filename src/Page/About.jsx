import Features from "../component/features/Features";
import JoinClubPage from "../component/features/JoinClubPage";
import Footer from "../component/features/Footer";

export default function AboutPage () {
    return (
        <>
            <MainContent/>
            <Footer/>
        </>
    );
}

function MainContent () {
    return (
        <main>
            <Hero/>
            <Features type='split-right'/>
            <Features type='split-left'/>
            <Features/>
            <JoinClubPage type='image'/>
        </main>
    )
}

function Hero() {
    return (
        <section className='about-headers'>
            <h1>A brand built on the love of craftmanship, quality and outstanding customer service</h1>
        </section>
    )
}