import React, { useState } from 'react'
import { createContext } from 'react'
export const DataContext=createContext();
function DataProvider({children}) {
    const [html,setHtml]=useState('');
    const [css,setCss]=useState('');
    const [js,setJs]=useState('');
  return (
    <div>
      <DataContext.Provider value={{
        html,
        setHtml,
        css,
        setCss,
        js,
        setJs
      }}>
        {children}
      </DataContext.Provider>
    </div>
  )
}

export default DataProvider
