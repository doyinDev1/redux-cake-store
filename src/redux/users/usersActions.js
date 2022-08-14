// import axios from "axios"
// import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes"

// export const fetchUsersRequest = () => {
//     return {
//         type: FETCH_USERS_REQUEST
//     }
// }

// export const fetchUsersSuccess = users => {
//     return {
//         type: FETCH_USERS_SUCCESS,
//         payload: users
//     }
// }

// export const fetchUsersFailure = error => {
//     return {
//         type: FETCH_USERS_FAILURE,
//         payload: error
//     }
// }


// export const fetchUsers = () => {
//     return (dispatch) => {
//         dispatch(fetchUsersRequest)
//         axios.get('https://jsonplaceholder.typicode.com/users')
//             .then(response => {
//                 console.log(response)
//                 const users = response.data
//                 dispatch(fetchUsersSuccess(users))
//             })
//             .catch(error => {
//                 const errMsg = error.message
//                 dispatch(fetchUsersFailure(errMsg))
//             })
//     }
// }



import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const initialState = []

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    try {
const response = await axios.get('https://jsonplaceholder.typicode.com/users')
return response.data
    }
    catch (err) {
return err.message
    }
})

const userActions = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state, action) =>{
            return action.payload
        })
    }
})
export const selectUsers = (state) => state.users
export default userActions.reducer