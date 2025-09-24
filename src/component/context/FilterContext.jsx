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
    brand: {
        robertSmith: false,
        liamGallagher: false,
        biggieSmalls: false,
        thomYorke: false,
    },
    updateBrandFilter: null,
})

export const PriceContext = createContext ({
    price: {
        min: 0,
        max: 1000,
    },
    updatePriceFilter: null,
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

    const [brandList, setBrandList] = useState({

        robertSmith: false,
        liamGallagher: false,
        biggieSmalls: false,
        thomYorke: false,

    })

    const updateCategoryFilter = useCallback((value) => {
        setCategoryList(value)
    }, [])

    const updatePriceFilter = useCallback((value) => {
        setPrice(value)
    }, [])

    const updateBrandFilter = useCallback((value) => {
        setBrandList(value)
    }, [])

    return (
        <CategoryContext.Provider value={{categoryList, updateCategoryFilter}}>
            <PriceContext.Provider value={{price, updatePriceFilter}}>
                <BrandContext.Provider value={{brandList, updateBrandFilter}}>
                    {children}
                </BrandContext.Provider>
            </PriceContext.Provider>
        </CategoryContext.Provider>
    )
}

export default FilterProvider;