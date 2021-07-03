import React from 'react';
import CrudApp from './components/CrudApp';
import CrudApi from './components/CrudApi';
import SongSearch from './components/SongSearch';
import SelectAnidados from './components/SelectsAnidados';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <>
      <h1>Ejercicios con React</h1>
      <hr />
      <ContactForm />
      <hr />
      <SelectAnidados />
      <hr />
      <SongSearch />
      <hr />
      <CrudApi />
      <hr />
      <CrudApp />
      <hr />
    </>
  );
}

export default App;
