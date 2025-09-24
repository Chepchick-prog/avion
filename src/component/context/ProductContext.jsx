import { createContext, useCallback, useContext, useState } from "react";
import { productData } from "../product-data";

export const ProductContext = createContext({
    prodData: productData.products
})

export const AvionUrlContext = createContext({
    avionUrl: '/avion'
})

function ProductProvider ({children}) {

    const [prodData, setProdData] = useState(productData.products)

    const avionUrl = useContext(AvionUrlContext)

    const updateProductData = useCallback((value) => {
        setProdData(value)
    }, [])

    return (
        <ProductContext.Provider value={{prodData, updateProductData}}>
            <AvionUrlContext value={avionUrl} >
                {children}
            </AvionUrlContext>
        </ProductContext.Provider>
    )
}

export default ProductProvider;