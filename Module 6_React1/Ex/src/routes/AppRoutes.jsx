// special component containing all the possible routes for this app
// any props passed into AppRoutes will also be passed onto
import { Routes, Route } from "react-router-dom"
import Bitcoinpage from "../pages/Bitcoinpage";
import Homepage from "../pages/HomePage";
import LoginPage from "../pages/Loginpage";


// child components using {...props}
function AppRoutes(props) {
    return (
        <Routes>
            {/* index matches on default/home URL: / */}
            <Route index element={<Homepage {...props} />} />

            <Route path="login" element={<LoginPage {...props} />} />
            <Route path='bitcoin' element={<Bitcoinpage {...props} />} />
        </Routes>
    )
}
   export default AppRoutes;
   // Name this file AppRoutes.jsx and store in new folder 'routes'