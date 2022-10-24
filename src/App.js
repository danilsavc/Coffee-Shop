import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';

const App = () => {
    return (
      <div className="App">
          <div className="body">
            <Header />
            <Main />
          </div>
          <Footer />
      </div>
    );
}

export default App;
