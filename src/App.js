import React from 'react';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import {Route, Routes} from 'react-router-dom'
import Ngopi from './Ngopi/Ngopi';
import Home from './Layout/Home';
import ExploreNgopi from './Layout/ExploreNgopi';
import NgopiMenu from './Ngopi/NgopiMenu/NgopiMenu';



const App = () => {
    return (
      <div className="App">
        <div className="body">
          
        <Routes>
          <Route path='/' element={<Home/>}>
            <Route index element={<Main />}/>
          </Route>

          <Route path='Ngopi-Bung' element={<ExploreNgopi/>}>
              <Route index element={<Ngopi/>} />
              <Route path='Menu' element={<NgopiMenu/>}/>
          </Route>

        </Routes>
        </div>

          <Footer />
      </div>
    );
}

export default App;
