import { createContext, useCallback, useMemo, useState } from "react"

export const BusketsContext = createContext({
    busketList: [],
    updateBusketList: () => {}
})

function BusketsProvider ({ children }) {

    const [busketsList, setBusketsList] = useState([

    ])

    const updateBusketList = useCallback((value, quantity) => {

        const newList = busketsList.map(item => {
            if(item.id === value.id) {
                return {...item, quantity: (item.quantity + quantity)}
            } else {
                return item;
            }
        })

        if(!busketsList.some(item => item.id === value.id)) {
            newList.push({...value, quantity: quantity})
        }

        return setBusketsList(newList)

    }, [busketsList])

    const updateProdBusketsQuantity = useCallback((product, value) => {

        const newlist = busketsList.map(prod => {
            if(prod.id === product.id) {
                return {...prod, quantity: value}
            } else {
                return prod
            }
        })

        const result = newlist.filter((item) => item.quantity > 0)

        setBusketsList(result)
    }, [busketsList])

    const contextValue = useMemo(() => ({
        busketsList,
        updateBusketList,
        updateProdBusketsQuantity,
    }), [busketsList, updateBusketList, updateProdBusketsQuantity])

    return (
        <BusketsContext.Provider value={contextValue}>
            {children}
        </BusketsContext.Provider>
    )
}

export default BusketsProvider;