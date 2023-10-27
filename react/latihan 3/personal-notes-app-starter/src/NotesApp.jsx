import React from 'react';
import {Link, Routes, Route} from 'react-router-dom'
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage';

function NotesApp() {
  return (
    <div className='app-container'>
      <header>
        <h1><Link to="/">Aplikasi Catatan</Link></h1>
        <Navigation></Navigation>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/notes/:id' element={<DetailPage />}></Route>
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
}

export default NotesApp;
