import React from 'react';
import CrudApp from './components/CrudApp';
import CrudApi from './components/CrudApi';
import SongSearch from './components/SongSearch';
import SelectAnidados from './components/SelectsAnidados';
import ContactForm from './components/ContactForm';
import Modals from './components/Modals';

function App() {
  return (
    <>
      <h1>Ejercicios con React</h1>
      <hr />
      <Modals />
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
