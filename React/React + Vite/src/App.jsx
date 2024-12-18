import { useState } from "react";
import Decrement from "./components/Decrement";
import ImageManipulation from "./components/ImageManipulation";
import Login from "./components/Login";
import Registration from "./components/Registration";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import MainLayout from "./components/MainLayout";
import Dashboard from "./components/Dashboard";
function App() {
  const [rdata, setrdata] = useState();
	return (
		<>
			{/* <Decrement /> */}
			{/* <ImageManipulation /> */}

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<MainLayout />} >
          <Route path="/login" element={<Login logindata={rdata}/>}/>
          <Route path="/reg" element={<Registration regdata={setrdata}/>}/>
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      {/* <div>
        At app: {JSON.stringify(rdata)}
      </div>
			<div>
				<h1>Login Form</h1>
				<Login logindata={rdata}/>
			</div>

			<div>
				<h1>Registration Form</h1>
				<Registration regdata={setrdata}/>
			</div> */}
		</>
	);
}

export default App;
