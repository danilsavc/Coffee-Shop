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
              <Route path='/'>
                <Route element={<Main />}/>
                <Route element={<Header title="Power up with coffee" subtitle="Nikmati hari - hari anda dengan secangkir kopi." img="img/bcg_header.png"/>}/>
              </Route>
              <Route path='/Ngopi-Bung'>
                <Route element={<Header title="Power up with coffee" img="img/bcg_header.png"/>}/>
                <Route path='/Ngopi-Bung' element={<Ngopi />} />
              </Route>
              
            </Routes>
            
          </div>
          
            <Footer />
        </div>
      </BrowserRouter>
      
    );
}

export default App;
