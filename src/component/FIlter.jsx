import CheckBox from "./CheckBox";
import Dropdown from "./Dropdown";
import Button from "./Button";
import Input from "./Input";

export default function Filter() {
    return (
        <section className="dectop-product-filter ">
            <div className="left">
                <Dropdown 
                    name='Product type'
                    menu={[
                        <CheckBox name={'Furniture'}/>,
                        <CheckBox name={'Homeware'}/>,
                        <CheckBox name={'Sofas'}/>,
                        <CheckBox name={'Light fittings'}/>,
                        <CheckBox name={'Accessories'}/>,
                    ]}
                />
                <Dropdown 
                    name='Price'
                    menu={[
                        <FilterPrice/>
                    ]}
                />
                <Dropdown 
                    name='Brand'
                    menu={[
                        <CheckBox name={'Robert Smith'}/>,
                        <CheckBox name={'Liam Gallagher'}/>,
                        <CheckBox name={'Biggie Smalls'}/>,
                        <CheckBox name={'Thom Yorke'}/>,
                    ]}
                />        
            </div>
            <div className="right">
                <FilterSorting/>
            </div>

        </section>
);
}

function FilterSorting () {
    return (
        <>
            <span className="body-small-txt">Sorting by:</span>
            <Dropdown 
                type='single'
                menu={[
                    'By popularity',
                    'By rating',
                    'By newest',
                    'By price (low-hight)',
                    'By price (hight-low)',
                ]}
            />
        </>
    )
}

function FilterPrice () {
    return (
        <div className="price-filter">
            <div className="price-filter-content">
                <div>
                    <span className="body-small-txt">From</span>
                    <Input type='number' />
                </div>
                <div>
                    <span className="body-small-txt">Before</span>
                    <Input type='number' />
                </div>
            </div>
            <div className="price-filter-content">
                <Button name='Cancel' />
                <Button type='primary' name='Done' />
            </div>
        </div>
    )
}