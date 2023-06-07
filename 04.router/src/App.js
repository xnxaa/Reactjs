// import logo from './logo.svg';
// import komponen
import LuasSegitiga from './components/LuasSegitiga'
import LuasLingkaran from './components/LuasLingkaran'
import './App.css';
import { useState } from 'react';
import { Counter } from './components/Counter';
import { CounterProvider } from './context/CounterProvider';
import { CounterTwoNum } from './components/CounterTwoNum';
import { FormText } from './components/FormText';
import { Nilai } from './components/Nilai';
import { Route, Routes }  from 'react-router-dom';
import { NotFound } from './components/notfound';
import { Layout } from './layout/Layout';
import { FormLogin } from './components/FormLogin';

function App() {
  return (
    <div className="App">
      <CounterProvider>
      <Routes>
        <Route path="/" element= {
          <Layout> 
          <Nilai/> 
          </Layout>
        }/>
        <Route path="/luas-segitiga" element={
          <Layout>
          <LuasSegitiga/>
          </Layout>
        }/>
        <Route path="/luas-lingkaran" element={
          <Layout>
          <LuasLingkaran/>
          </Layout>
        }/>
        <Route path="/counter" element={
        <Layout>
        <Counter/>
        </Layout>
        }/>
        <Route path="/counter-two-num" element={
        <Layout>
        <CounterTwoNum/>
        </Layout>
        }/>
        <Route path="/form-text" element={
        <Layout>
        <FormText/>
        </Layout>
        }/>
        <Route path="/login" element={
          <FormLogin/>
        }/>


        {/* not found harus selalu ditaruh bawah */}
        <Route path="*"element={<NotFound/>}/>
      </Routes>
      </CounterProvider>
    </div>
  );
}

export default App;
