import React, { createContext, useState } from 'react'
export const addEventResponseContext=createContext()
export const editEventResponseContext=createContext()
export const deleteEventResponseContext=createContext()


function ContextShare({children}) {
    const[addEventRes,setAddEventRes]=useState("")
    const [editEventRes,setEditEventRes]=useState("")
    const [deleteEventRes,setDeleteEventRes]=useState("")


  return (
    <>
    <addEventResponseContext.Provider value={{addEventRes,setAddEventRes  }}>
        <editEventResponseContext.Provider value={{editEventRes,setEditEventRes}}>
          <deleteEventResponseContext.Provider value={{deleteEventRes,setDeleteEventRes}}>
            

          


        
        {children}
     
        </deleteEventResponseContext.Provider>
        </editEventResponseContext.Provider>
    
    </addEventResponseContext.Provider>
    
    </>
  )
}

export default ContextShare