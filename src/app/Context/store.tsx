
import { ReactNode } from "react";

'use client';

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

type DataType = {
    firstName: string
}

interface ContextProps {
    apiDomain: string, 
    userId: string,
    setUserId: Dispatch<SetStateAction<string>>,
    data: DataType[],
    setData: Dispatch<SetStateAction<DataType[]>>
}

const GlobalContext = createContext<ContextProps>({
    apiDomain: 'http://localhost:8080',
    userId: '',
    setUserId: (): string => '',
    data: [],
    setData: (): DataType[] => [] 
})

export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const apiDomain = 'http://localhost:8080';
  const [userId, setUserId] = useState('');
  const [data, setData] = useState<DataType[]>([]);
    
  return (
    <GlobalContext.Provider value={{ apiDomain, userId, setUserId, data, setData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalContextProvider');
  }
  return context;
};