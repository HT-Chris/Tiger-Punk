import { createContext, ReactNode } from 'react'



type TigerPunkProps ={
    test:string

}

type TigerPunkProviderProps = {children:ReactNode}
export const TigerPunkContext = createContext({} as TigerPunkProps)

export const TigerPunkContextProvider = ({children} : TigerPunkProviderProps) => {





const tigerPunkValues = {}

    return (
        <TigerPunkContext.Provider value={tigerPunkValues}>
                {children}
        </TigerPunkContext.Provider>
    )
}