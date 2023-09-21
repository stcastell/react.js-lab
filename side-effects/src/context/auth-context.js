import React from 'react'

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => { }
})
//Donde el parametro es un state

export default AuthContext