import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import Home from './Pages/Home/Home';
import Services from './Pages/Home/Services/Services';
import Experts from './Pages/Home/Experts/Experts';
import Login from './Pages/Login/Login/Login';
import About from './Pages/Home/About/About';
import Signup from './Pages/Login/Signup/Signup';
import NotFound from './Pages/NotFound/NotFound';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import ExpertsDetails from './Pages/ExpertsDetails/ExpertsDetails';
import Blogs from './Blogs/Blogs';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/service' element={<Services></Services>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/experts' element={<Experts></Experts>}></Route>
        <Route path='/experts/:expertsId' element={<ExpertsDetails></ExpertsDetails>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
