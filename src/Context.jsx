/* eslint-disable react/prop-types */
import { createContext, useState } from "react"


const DataContext = createContext()

export const DataProvider = ({ children }) => {

    const [personalData, setPersonalData] = useState({
        fullName: '',
        email: '',
        number: '',
        address: '',
        title: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPersonalData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        
      };

    return(
        <DataContext.Provider value={{ 
            personalData, 
            setPersonalData, 
            handleInputChange, 
        }}>{children}</DataContext.Provider>
    )
}

export default DataContext