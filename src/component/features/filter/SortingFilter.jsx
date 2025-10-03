import { useContext, useState } from "react";

import { FilterContext } from "../../context/FilterContext";

import Dropdown from "../Dropdown";

function SortingFilter () {

    const {filters} = useContext(FilterContext)

    const [selectedSort, setSelectedSort] = useState(filters.sort[0])

    function SortingFilterChange (itemId) {
        filters.sort.forEach((item) => {
            if(item.id === itemId) {
                return setSelectedSort(item)
            }
        })
    }

    return (
        <>
            <span className="body-small-txt">Sorting by:</span>
            <Dropdown type='single' selectedSort={selectedSort.name}>
                {filters.sort.map((item) => (
                    <span key={item.id} name={item.name} onClick={()=>{SortingFilterChange(item.id)}}>
                        {item.name}
                    </span>
                ))}
            </Dropdown>
        </>
    )
}

export default SortingFilter;