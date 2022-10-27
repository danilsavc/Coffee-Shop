import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import {Route, Routes} from 'react-router-dom'
import Ngopi from './Ngopi/Ngopi';
import Home from './Layout/Home';
import Explore_Ngopi from './Layout/Explore_Ngopi';



const App = () => {
    return (
      <div className="App">
        <div className="body">
          
        <Routes>
          <Route path='/' element={<Home/>}>
            <Route index element={<Main />}/>
            <Route path='Ngopi-Bung' element={<Ngopi/>} />
          </Route>
        </Routes>
        </div>

          <Footer />
      </div>
    );
}

export default App;
