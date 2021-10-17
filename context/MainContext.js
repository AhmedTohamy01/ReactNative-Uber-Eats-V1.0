import React, { createContext, useState, useEffect } from 'react'

export const MainContext = createContext({})

export const MainContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [showCartModal, setShowCartModal] = useState(false)

	return (
    <MainContext.Provider
      value={{ cartItems, setCartItems, showCartModal, setShowCartModal }}
    >
      {children}
    </MainContext.Provider>
  )
}
