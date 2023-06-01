import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';

const App = () => {
  return (
    <div className="app">
      <Header />
      {/* <Routes>
          <Route path="/" element={<Home />} />
      </Routes>*/}
     <Banner/>
    </div>
  );
}

export default App;
