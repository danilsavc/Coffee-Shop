import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Ngopi from './Ngopi/Ngopi';



const App = () => {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="body">
            <Routes>
              <Route path='/' element={<Header title="Power up with coffee"  subtitle="Nikmati hari - hari anda dengan secangkir kopi."/>}/>
              <Route path='/' element={<Main />} />
              
            </Routes>
            <Routes>
              <Route path='/Ngopi-Bung' element={<Header title="Explore"/>}/>
              <Route path='/Ngopi-Bung' element={<Ngopi />} />
            </Routes>
          </div>
          
            <Footer />
        </div>
      </BrowserRouter>
      
    );
}

export default App;