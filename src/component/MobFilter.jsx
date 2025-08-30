import CheckBox from "./CheckBox"
import Dropdown from "./Dropdown"

export default function MobFilter () {
    return (
        <section className="mobile-product-filter">
            <div>
                <Dropdown 
                    name='Filters'
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
                    type='single'
                    name='Sorting'
                    menu={[
                        <>
                            <span className="body-medium-txt">Furniture</span>
                        </>,
                        <>
                            <span className="body-medium-txt">Homeware</span>
                        </>,
                        <>
                            <span className="body-medium-txt">Sofas</span>
                        </>,
                        <>
                            <span className="body-medium-txt">Light fittings</span>
                        </>,
                        <>
                            <span className="body-medium-txt">Accessories</span>
                        </>,
                    ]}
                />
            </div>
        </section>
    )
}