import Dropdown from "../Dropdown/Dropdown"
import CheckBox from "../../ui/CheckBox/CheckBox"

import "./styles.css"

export default function MobFilter () {
    return (
        <section className="mobile-product-filter">
                <Dropdown 
                    name='Filters'
                    menu={[
                        <CheckBox name={'Furniture'}/>,
                        <CheckBox name={'Homeware'}/>,
                        <CheckBox name={'Sofas'}/>,
                        <CheckBox name={'Light fittings'}/>,
                        <CheckBox name={'Accessories'}/>,
                    ]}
                />
                <Dropdown 
                    type='single'
                    name='Sorting'
                    menu={[
                        'By popularity',
                        'By rating',
                        'By newest',
                        'By price (low-hight)',
                        'By price (hight-low)',
                    ]}
                />
        </section>
    )
}