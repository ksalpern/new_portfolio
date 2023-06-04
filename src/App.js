import { useEffect, useState } from 'react';
// import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Projects from './components/Projects/Projects';
import Quote from './components/Quote/Quote';
import Footer from './components/Footer/Footer';

const App = () => {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    fetch("/resumeData.json")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
      });
  }, []);

  return (
    <div className="app">
      <Header />
      <Banner />
      {/* <Routes>
          <Route path="/" element={<Home />} />
      </Routes>*/}
      <Projects data={resumeData.portfolio} />
      <Quote />

      <Footer data={resumeData.main} />

    </div>
  );
}

export default App;
