import { createContext, useContext, useState } from "react";
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

    return (
        <ProductContext.Provider value={{prodData, setProdData}}>
            <AvionUrlContext value={avionUrl} >
                {children}
            </AvionUrlContext>
        </ProductContext.Provider>
    )
}

export default ProductProvider;