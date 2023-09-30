/* eslint-disable react/prop-types */
import { createContext, useState } from "react"


const DataContext = createContext()

export const DataProvider = ({ children }) => {
    return(
        <DataContext.Provider value={{ data: 1 }}>{children}</DataContext.Provider>
    )
}

export default DataContext