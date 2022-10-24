import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';


const App = () => {
    return (
      <div className="App">
          <div className="body">
            <Header title="Power up with coffee"  subtitle="Nikmati hari - hari anda dengan secangkir kopi." img="img/bcg_header.png"/>
            <Main />
          </div>
          
            <Footer />
      </div>
    );
}

export default App;
