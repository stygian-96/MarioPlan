const initState = {
    authError: null
}

const authReducer = (state = initState,action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log("Login failed")
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log("Login success")
            return {
                ...state,
                authError: null
            }    
        case 'SIGNOUT_SUCCESS':
            console.log("Signout success")
            return state
        case 'SIGNUP_SUCCESS':
            console.log("Signup success")
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log("Signup error" + action.err.message)
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state
    }
}

export default authReducer;