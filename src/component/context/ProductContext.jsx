import { createContext, useCallback, useContext, useState } from "react";
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

    return (
        <ProductContext.Provider value={{prodData, updateProductData, resetProductData}}>
            <OriginalProductContext value={{ originalProduct }}>
                <AvionUrlContext value={avionUrl} >
                    {children}
                </AvionUrlContext>
            </OriginalProductContext>
        </ProductContext.Provider>
    )
}

export default ProductProvider;