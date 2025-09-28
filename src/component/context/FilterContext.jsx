import { createContext, useCallback, useContext, useState } from "react";
import { ProductContext } from "./ProductContext";

export const CategoryContext = createContext ({
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
    updateCategoryFilter: null,
})

export const BrandContext = createContext ({
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
    updateBrandFilter: null,
})

export const PriceContext = createContext ({
    price: {
        min: 0,
        max: 1000,
    },
    updatePriceFilter: null,
})


export const SortingContext = createContext ({
    sortList: [
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
    updateSortFilter: null,
})

function FilterProvider ({children}) {

    const {prodData} = useContext(ProductContext)

    const priceList = prodData.map((prod) => prod.price)

    const getMinPrice = (value) => {
        return value.reduce((x, y) => Math.min(x, y));
    }

    const getMaxPrice = (value) => {
        return value.reduce((x, y) => Math.max(x, y));
    }

    const [price, setPrice] = useState({min: getMinPrice(priceList), max: getMaxPrice(priceList)})

    const [categoryList, setCategoryList] = useState([
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
    ])

    const [brandList, setBrandList] = useState([
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
    ])

    const [sortList, setSortList] = useState([
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
    ])

    const updateCategoryFilter = useCallback((value) => {
        setCategoryList(value)
    }, [])

    const updatePriceFilter = useCallback((value) => {
        setPrice(value)
    }, [])

    const updateBrandFilter = useCallback((value) => {
        setBrandList(value)
    }, [])

    const updateSortFilter = useCallback((value) => {
        setSortList(value)
    }, [])

    return (
        <CategoryContext.Provider value={{categoryList, updateCategoryFilter}}>
            <PriceContext.Provider value={{price, updatePriceFilter}}>
                <BrandContext.Provider value={{brandList, updateBrandFilter}}>
                    <SortingContext.Provider value={{sortList, updateSortFilter}}>
                        {children}
                    </SortingContext.Provider>
                </BrandContext.Provider>
            </PriceContext.Provider>
        </CategoryContext.Provider>
    )
}

export default FilterProvider;