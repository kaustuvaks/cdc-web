import { createContext, useState } from "react";
export const UserContext = createContext(null);

export default ({children}) => {
    const [user, setUser] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);
    const [token, setToken] = useState('');

    return(
        <UserContext.Provider
            value = {{
                user,setUser,
                authenticated,setAuthenticated,
                token,setToken,
            }}>

                {children}
        </UserContext.Provider>
    );
};