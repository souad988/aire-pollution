import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { setCountries } from './redux/reducer';
import Home from './components/Home';
import Header from './components/Header';
import Regions from './components/Regions';
import { setHeader } from './redux/headerReducer';

function App() {
  const dispatch = useDispatch();
  const countriesState = useSelector((state) => state.countries);
  useEffect(() => {
    dispatch(setCountries());
  },[]);
  useEffect(() => {
    dispatch(setHeader({ global_cases: countriesState.global_cases, img: 'https://mapsvg.com/maps/world.svg' }));
  }, [countriesState]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/:Regions" element={<Regions />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
