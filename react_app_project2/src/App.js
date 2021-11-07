import logo from './logo.svg';
import './App.css';
import './styles.css'
import React from 'react';
import Slider from '../src/home/Slider';
import Service from '../src/home/Service';
import Sections from '../src/home/Sections'
import Masks from '../src/home/Masks'
import Dance from '../src/home/Dance'
function App() {
  return (

  <>
  <Sections/>
  <Masks />
  <Dance />
  <Slider />
  <br/><Service />
  <br/>
  </>
  );
}

export default App;
