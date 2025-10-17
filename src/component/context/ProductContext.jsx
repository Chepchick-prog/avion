import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { productData } from "../product-data";

export const OriginalProductContext = createContext()

export const ProductContext = createContext({
    prodData: productData.products,
    updateProductData: null,
    resetProductData: null
})

export const AvionUrlContext = createContext({
    avionUrl: '/avion'
})

export const ProductCardContext = createContext()

function ProductProvider ({children}) {

    const [prodData, setProdData] = useState(productData)

    const [originalProduct] = useState(productData);
    
    const avionUrl = useContext(AvionUrlContext)

    const updateProductData = useCallback((value) => {
        setProdData(value)
    }, [])

    const resetProductData = useCallback(() => {
        setProdData(productData)
    }, [])

    const prodValue = useMemo(() => ({
    }), [])

    return (
        <ProductContext.Provider value={{prodData, updateProductData, resetProductData}}>
            <OriginalProductContext.Provider value={{ originalProduct }}>
                <AvionUrlContext.Provider value={avionUrl} >
                    {children}
                </AvionUrlContext.Provider>
            </OriginalProductContext.Provider>
        </ProductContext.Provider>
    )
}

export default ProductProvider;