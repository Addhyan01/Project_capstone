import { createContext, useState, useEffect, Children } from "react";

export const AppContext = createContext();

export const AppProvider = ({ Children }) => {

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );
    const [selectedGenres,setSelectedGenres] = useState(
        JSON.parse(localStorage.getItem("selectedGenres")) || []
    );
    
    return(
        <AppContext.Provider
                value={{
                    user,
                    setUser,
                    selectedGenres,
                    setSelectedGenres
                }}
            >
                {Children}
            </AppContext.Provider>
    ) 
};
