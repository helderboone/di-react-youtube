import React, { useContext } from 'react'
import { AlertLogger, ConsoleLogger } from '../Dependencies/Logger';

const DependencyContext = React.createContext();

const loggerImplementations = {
    'console': ConsoleLogger,
    'alert': AlertLogger
}

export function useDependency() {
    return useContext(DependencyContext)
}

export function DependencyProvider({myService, children}) {
    const loggerImplementation = loggerImplementations['console']
    const logger = new loggerImplementation();
    return (
        <DependencyContext.Provider value={{myService, logger}}>
            { children }
        </DependencyContext.Provider>
    )
}