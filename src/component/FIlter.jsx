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
                        <>
                            <CheckBox/>
                            <span className="body-medium-txt">Furniture</span>
                        </>,
                        <>
                            <CheckBox/>
                            <span className="body-medium-txt">Homeware</span>
                        </>,
                        <>
                            <CheckBox/>
                            <span className="body-medium-txt">Sofas</span>
                        </>,
                        <>
                            <CheckBox/>
                            <span className="body-medium-txt">Light fittings</span>
                        </>,
                        <>
                            <CheckBox/>
                            <span className="body-medium-txt">Accessories</span>
                        </>,
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
                        <>
                            <CheckBox/>
                            <span className="body-medium-txt">Robert Smith</span>
                        </>,
                        <>
                            <CheckBox/>
                            <span className="body-medium-txt">Liam Gallagher</span>
                        </>,
                        <>
                            <CheckBox/>
                            <span className="body-medium-txt">Biggie Smalls</span>
                        </>,
                        <>
                            <CheckBox/>
                            <span className="body-medium-txt">Thom Yorke</span>
                        </>,
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
                name='Brand'
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