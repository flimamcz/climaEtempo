import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalData = ({children}) => {

    const [input, setInput] = useState('Brasilia')

    return (
        <GlobalContext.Provider value={{input, setInput}}>
            {children}
        </GlobalContext.Provider>
    )
}

