import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { ProductContext, OriginalProductContext } from "./ProductContext";

export const FilterContext = createContext( {

    filter:{},

    updateFilter: () => {},

    resetFilter: () => {},
    resetAll: () => {},

    filterListChange: () => {},
    filterProductData: () => {},
})

const INITIAL_FILTERS = {
    category: [
        {
            name: 'Furniture',
            isActive: false,
        },
        {
            name: 'Crockery',
            isActive: false,
        },
        {
            name: 'Homeware',
            isActive: false,
        },
        {
            name: 'Plant pots',
            isActive: false,
        },
        {
            name: 'Chairs',
            isActive: false,
        },
        {
            name: 'Sofas',
            isActive: false,
        },
        {
            name: 'Light fittings',
            isActive: false,
        },
        {
            name: 'Accessories',
            isActive: false,
        },
    ],
    brand: [
        {
            name: 'Robert Smith',
            isActive: false,
        },        
        {
            name: 'Liam Gallagher',
            isActive: false,
        },
        {
            name: 'Biggie Smalls',
            isActive: false,
        },
        {
            name: 'Thom Yorke',
            isActive: false,
        },
    ],
    price: {min: 0, max: 1000},
    sort: [
        {
            id: 'popular',
            name: 'By popularity'
        },
        {
            id: 'rating',
            name: 'By rating'
        },
        {
            id: 'newest',
            name: 'By newest'
        },
        {
            id: 'price-low',
            name: 'By price (low-hight)'
        },
        {
            id: 'price-hight',
            name: 'By price (hight-low)'
        },
    ],
}

function FilterProvider ({children}) {

    const { prodData, updateProductData } = useContext(ProductContext)
    const { originalProduct } = useContext(OriginalProductContext)

    const availablePriceRange = useMemo(() => ({
        min: Math.min(...prodData.map(p => p.price)),
        max: Math.max(...prodData.map(p => p.price)),
    }), [prodData])

    const [filters, setFilters] = useState({...INITIAL_FILTERS, price: {...availablePriceRange}})

    const updateFilter = useCallback((filterType, value) => {

        setFilters(prev => ({
            ...prev,
            [filterType]: value,
        }));

    }, [])

    const resetFilter = useCallback ((filterType) => {
        if(filterType === 'price') {
            setFilters(prev => ({
                ...prev,
                price: {...availablePriceRange},
            }));
        } else {
            setFilters(prev => ({
                ...prev,
                [filterType]:INITIAL_FILTERS[filterType],
            }))
        }

        // filterProductData(filterType, filters)

    }, [availablePriceRange])

    const resetAll = useCallback(() => {
        setFilters({
            ...INITIAL_FILTERS,
            price: {...availablePriceRange}
        })
    }, [availablePriceRange])

    const filterListChange = useCallback((filterType, value, itemIndex) => {

        if(filterType === 'price') {
            updateFilter(filterType, value)
        } else {
            const newFilterList = value.map((item, index) => {
                if(index === itemIndex) {
                    return ({...item, isActive: !item.isActive});
                } else {
                    return item;
                }
            })

            updateFilter(filterType, newFilterList);
        }
        
    }, [updateFilter])



    const filterProductData = useCallback(( filterList ) => {

        const applyFilter = (products, type, filterConfig) => {

            if (type === 'brand' || type === 'category') {
                const activeItem = filterConfig[type].filter(item => item.isActive)
                if(activeItem.length === 0) return products

                return products.filter(product => 
                    activeItem.some(item => product[type] === item.name)
                );
            }

            if (type === 'price') {
                return products.filter(product => 
                    product.price >= filterConfig.price.min &&
                    product.price <= filterConfig.price.max
                );
            }

            return products;
        }        
        
        let filteredData = [...originalProduct];

        const filterTypes = ['category', 'brand', 'price']

        filterTypes.forEach(type => {
            filteredData = applyFilter(filteredData, type, filterList)
        })

        updateProductData(filteredData)


    }, [resetFilter, originalProduct, updateProductData])

    const contextValue = useMemo (() => ({
        filters,
        updateFilter,
        resetFilter,
        resetAll,
        filterListChange,
        filterProductData,

        availablePriceRange,

    }), [filters, availablePriceRange, updateFilter, resetFilter, resetAll, filterListChange, filterProductData]);

    return (
        <FilterContext.Provider value={contextValue}>
            {children}
        </FilterContext.Provider>
 
    )
}

export default FilterProvider;