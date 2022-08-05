import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../redux'
function UserContainer() {
    const usersMain = useSelector(state => state.usersReducer)

    const users = useSelector(state => state.usersReducer.users)
    const loading = useSelector(state => state.usersReducer.loading)
    const error = useSelector(state => state.usersReducer.error)

    
    useEffect(() => {
        fetchUsers()
        console.log(usersMain, "us")
    }, [])
    console.log(usersMain, "usd")

    return loading? (
        <div>UserContainer</div>
    ) : error ? (
        <h1>
            {usersMain.error}
        </h1>
    ): 
    (
        <div>
            <h1> Users List</h1>

{
    usersMain &&
    usersMain.users &&
    users.map(user => 
    <h1>
        {user}
    </h1>)
}
        </div>
    
    
    )
}

export default UserContainer