import { createContext, useState } from "react";
import { productData } from "../product-data";

export const ProductContext = createContext({
    prodData: productData.products
})

function ProductProvider ({children}) {

    const [prodData, setProdData] = useState(productData.products)


    return (
        <ProductContext.Provider value={{prodData, setProdData}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider;