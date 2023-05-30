import { createContext } from 'react'

// criando o contexto
export const SomeContext = createContext()

// o que engloba o conteudo para utilização do contexto
export const HookUseContext = ({children}) => {

    const contextValue = 'testing content'

    return (
        <SomeContext.Provider value={{contextValue}}>
            {children}
        </SomeContext.Provider>
    )
}
