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
            <Header title="Power up with coffee"  subtitle="Nikmati hari - hari anda dengan secangkir kopi." img="img/bcg_header.png"/>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/Ngopi-Bung' element={<Ngopi />} />
            </Routes>
            
          </div>
          
            <Footer />
        </div>
      </BrowserRouter>
      
    );
}

export default App;
