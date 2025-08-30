import Button from "./Button";

export default function Features({type}) {

    switch (type) {
        case 'split-right':
            return <SplitRight/>
        case 'split-left':
            return <SplitLeft/>
        default:
            return <Light/>
    }
}

function Light () {
    return (
        <section className='light-features container'>
            <h3>What makes our brand different</h3>
            <div className='light-features-list'>
                <FeaturesItem
                    imgUrl='img/icon/Delivery.svg'
                    title='Next day as standard'
                    subtitle='Order before 3pm and get your order the next day as standard'
                />
                <FeaturesItem
                    imgUrl='img/icon/Checkmark--outline.svg'
                    title='Made by true artisans'
                    subtitle='Handmade crafted goods made with real passion and craftmanship'
                />
                <FeaturesItem
                    imgUrl='img/icon/Purchase.svg'
                    title='Unbeatable prices'
                    subtitle='For our materials and quality you won’t find better prices anywhere'
                />
                <FeaturesItem
                    imgUrl='img/icon/Sprout.svg'
                    title='Recycled packaging'
                    subtitle='We use 100% recycled packaging to ensure our footprint is manageable'
                />
            </div>
        </section>
    )
}

function FeaturesItem ({imgUrl, title, subtitle}) {
    return (
        <div className='light-features-item'>
            <img src={imgUrl} alt="Features-icon.svg"/>
            <h4>{title}</h4>
            <p className='body-medium-txt'>{subtitle}</p>
        </div>
    );
}

function SplitRight () {
    return (
        <section className='splitRight-features'>
            <div className="split-features-info">
                <div>
                    <h3>From a studio in London to a global brand with over 400 outlets</h3>
                    <p className="boody-normal-txt">
                        When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
                    </p>
                    <p className="boody-normal-txt">
                        Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
                    </p>
                </div>
                <Button type='secondary' name='Get in touch'/>
            </div>
            <img 
                src="img/split-right-features.jpg"
                alt="features.jpg"
            />
        </section>
    );
}

function SplitLeft () {
    return (
        <section className='splitRight-features'>
            <img 
                src="img/split-left-features.jpg"
                alt="features.jpg"
            />
            <div className="split-features-info">
                <div>
                    <h3>Our service isn’t just personal, it’s actually hyper personally exquisite</h3>
                    <p className="boody-normal-txt">
                        When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
                    </p>
                    <p className="boody-normal-txt">
                        Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
                    </p>
                </div>
                <Button type='secondary' name='Get in touch'/>
            </div>
        </section>
    );
}