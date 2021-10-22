import axios from "axios";

export const RegisterUser = (userName, email, password) => async (dispatch) => {
    const registerUser = await axios.post(`http://localhost:5000/auth`, { userName, email, password })
    console.log(registerUser)
}

export const LoginUser = (email, password) => async (dispatch, getState) => {
    try {
        dispatch({
            type:"LOGIN-REQUEST"
        })
        const { data } = await axios.post(`/auth/login`, { email, password })
        console.log("data",data)
        dispatch({
            type:"LOGIN-SUCCESSFUL",
            payLoad:data.user
        })
        localStorage.setItem("EcommUser", JSON.stringify(getState().user.EcommUser))
    } catch (error) {
        dispatch({
            type:"LOGIN-FAIL",
            payLoad:error.message
        })
    }
}

export const LogoutUser=()=>(dispatch)=>{
    dispatch({
       type:"LOGOUT-USER"   
    })
}
