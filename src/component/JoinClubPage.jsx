import Input from "./Input";

export default function JoinClubPage ({type}) {
    switch (type) {
        case 'split':
            return <SplitPage/>
        case 'image':
            return <ImagePage/>
        default:
            return <SilplePage/>
    }


}

function SilplePage () {
    return (
        <section className='join-club'>

            <div>
                <h1>Join the club and get the benefits</h1>
                <p className="body-medium-txt">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
                <Input type='primary'/>
            </div>
       </section>
    );
}

function SplitPage () {
    return (
        <section className='join-club join-club-split'>
            <img 
                src="img/split-left-features.jpg"
                alt="features.jpg"
            />
            <div className="join-club-split-info">
                <div>
                    <h1>Join the club and get the benefits</h1>
                    <p className="body-medium-txt">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
                </div>
                <Input type='primary' maxWidth={472}/>
            </div>
       </section>
    );
}

function ImagePage () {
    return (
        <section className='join-club join-club-image'>
            <div>
                <h1>Join the club and get the benefits</h1>
                <p className="body-medium-txt">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
                <ul className="join-club-benefits body-medium-txt">
                    <li>
                        <img src='img/icon/Checkmark--filled.svg' alt="check-icon.svg"/>
                        <span>Exclusive offers</span>
                    </li>
                    <li>
                        <img src='img/icon/Checkmark--filled.svg' alt="check-icon.svg"/>
                        <span>Free events</span>
                    </li>
                    <li>
                        <img src='img/icon/Checkmark--filled.svg' alt="check-icon.svg"/>
                        <span>Large discounts</span>
                    </li>
                </ul>
                <Input type='primary'/>
            </div>
       </section>
    );
}


