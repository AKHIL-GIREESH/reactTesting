import { User } from "../types/User"

export const UserAccount = ({user}:{user:User}) => {
    return(
        <>
            <h1>User Profile</h1>
            {user.isAdmin && <button>edit</button>}
            <div>
                Name: {user.name}
            </div>
        </>
    )
}