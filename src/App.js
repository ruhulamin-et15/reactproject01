import React from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';
import Home from './Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Sponsor from './Pages/Sponsor';
import  Contact from './Pages/Contact';
import Error from './Pages/Error';
import Navbar from './Pages/Navbar';
import Sidebar from './Pages/Sidebar';
import DashBoard from './Pages/DashBoard';
import Products from './Pages/Products';
import Order from './Pages/Order';
import Support from './Pages/Support';
import ReactBootsrap from './Pages/ReactBootsrap';
import SetState from './Pages/SetState';
import CONDITIONAL_RENDERING from './CONDITIONAL_RENDERING/index';
import EVENT_HANDLER_CLASS from './EVENT_HANDLER_CLASS/index';
import EVENT_BINDING from './EVENT_BINDING/index';
import HOOKS_USESTATE from './HOOKS_USESTATE/index2';
import EVENT_BUBLING from './EVENT_BUBLING/index';
import FORM_CODE from './FORM_CODE/form';
import Lifting from './STATE_LIFTING/Lifting';
import App3 from './STATE/App3';
import Hometodo from './Todo_App/Hometodo';


function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>

          <Route path='/bubling' element={<EVENT_BUBLING/>}> </Route>

          <Route path='/' element={<Hometodo/>}> </Route>

          <Route path='/lifting' element={<Lifting />}> </Route>

          <Route path='/app3' element={<App3 />}> </Route>

          <Route path='/formcode' element={<FORM_CODE/>}> </Route>

          <Route path='/reactbootstrap' element={<ReactBootsrap/>}> </Route>

          <Route path='/hooks' element= {<HOOKS_USESTATE/>}> </Route>

          <Route path='/binding' element={<EVENT_BINDING/>}></Route>

          <Route path='/handler' element={<EVENT_HANDLER_CLASS/>}></Route>

          <Route path='/render' element={<CONDITIONAL_RENDERING/>}></Route>

          <Route path='/setstate' element= {<SetState count="0"/>}></Route>

          <Route path='/home' element={<Home/>}> </Route>

          <Route path='/about' element={<About/>}> </Route> 

          <Route path='/blog' element={<Blog/>}> </Route>

          <Route path='/sponsor' element={<Sponsor/>}> </Route>

          <Route path='/contact' element={<Contact/>}> </Route>

          <Route path='/navbar' element={<Navbar/>}> </Route>

          <Route path='/sidebar' element={<Sidebar/>}> </Route>

          <Route path='/dashboard' element={<DashBoard/>}> </Route>

          <Route path='/products' element={<Products/>}> </Route>

          <Route path='/order' element={<Order/>}> </Route>

          <Route path='/support' element={<Support/>}> </Route>

          <Route path='*' element={<Error/>}> </Route>

        </Routes>
      </BrowserRouter>
      

    </>
  );
}

export default App;