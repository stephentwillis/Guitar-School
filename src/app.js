import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './pages/Layout';
import Home from './pages/Home';
import Introduction from './pages/Introduction'
import A from './pages/A';
import CD from './pages/CD';
import E from './pages/E';
import G from './pages/G';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="Introduction" element={<Introduction/>} />
                    <Route path="C" element={<CD/>} />
                    <Route path="A" element={<A/>} />
                    <Route path="G" element={<G/>} />
                    <Route path="E" element={<E/>} />
                    <Route path="D" element={<CD/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const container = document.getElementById('app');
const root = createRoot(container); 
root.render(<App tab="home" />);