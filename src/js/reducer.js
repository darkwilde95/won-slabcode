const userReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('token', action.token)
      return { ...state, user: true }

    case 'LOGOUT':
      localStorage.removeItem('token')
      return { ...state, user: false }
  
    default:
      return state
  }
}

export { userReducer }