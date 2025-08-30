import Button from "./Button";

export default function Listings ({children, title}) {
    return (
        <section className='listings container'>
            <h2>{title}</h2>
            <div className='listings-list'>
                {children}
            </div>
            <Button type='secondary' name='View collection'/>
        </section>
    );
}