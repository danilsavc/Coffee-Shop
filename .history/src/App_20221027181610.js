import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import {Route, Routes} from 'react-router-dom'
import Ngopi from './Ngopi/Ngopi';
import Home from './Layout/Home';



const App = () => {
    return (
      <div className="App">
        <div className="body">
          
        <Routes>
          <Route path='/' element={<Home/>}>
            <Route index element={<Main />}/>
            <Route path='/Ngopi-Bung' element={<Header title="Power up with coffee" img="img/bcg_header.png"/>} />
            <Route path='/Ngopi-Bung' element={<Ngopi />} />
          </Route>
        </Routes>
        </div>

      </div>
    );
}

export default App;
