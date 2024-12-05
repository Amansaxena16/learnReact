import ThemeContextProvider from "../../../context/ThemeContextProvider"
import Login from "../login/Login"
import Profile from "../profile/Profile"
import ThemeBtn from "../themeBtn/ThemeBtn"
import ThemeCard from "../themeCard/ThemeCard"

function Fun(){
    return(
        <div>
            <Profile/>
            <Login/>
            <ThemeContextProvider>
                <ThemeCard/>
                <ThemeBtn/>
            </ThemeContextProvider>
        </div>
    )
}

export default Fun