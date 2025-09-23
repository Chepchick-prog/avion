import CheckBox from "./CheckBox"
import Dropdown from "./Dropdown"

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