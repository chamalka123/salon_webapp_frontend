import react from "react";
import Header from "./Header";
import Footer from "./Footer";
import WelcomeScreen from "./WelcomeScreen";
import WelcomePicture from "./WelcomePicture";

function App(){
    return(
        <div>
            < Header />
            < WelcomeScreen />
            < WelcomePicture />
            < Footer />  
        </div>);
}
export default App;