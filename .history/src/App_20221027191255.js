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
          </Route>

          <Route path='Ngopi-Bung' element={<Explore_Ngopi/>}>
              <Route index element={<Ngopi/>} />
          </Route>

          <Route path='*' element={<Explore_Ngopi/>}>
              <Route element={<div>Error</div>} />
          </Route>

        </Routes>
        </div>

          <Footer />
      </div>
    );
}

export default App;
