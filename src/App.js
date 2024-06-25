import './App.css';
import {  Route, Routes } from 'react-router-dom';
import List from './List';
import Form from './Form';
import NavBar from './NavBar';
import { useState } from "react";

function App() {
 
  let [contribution, setContribution] = useState([
    { id: 1, name: "משה כהן", sum: 500, delection: " להצלחת הפרויקט", date: new Date(2023, 12, 15) },
    { id: 2, name: "אנונימי", sum: 450, delection: " להצלת עם ישראל ולהחזרת החטופים", date: new Date(2023, 12, 17) }
  ])

  const add = (newDonate) => {
    let id = contribution[contribution.length - 1].id + 1;
    newDonate.id = id;
    newDonate.date = new Date()
    let copy = [...contribution, newDonate];
    setContribution(copy);
  }

  return (
    <>
      <h1>ברוכים הבאים לאתר התרומות של עזר מציון</h1>
      <h1>ימים נוראים תשפ"ד, 2023</h1>
      <NavBar />
      <Routes>
        <Route path='all' element={<List arr={contribution} />} />
        <Route path='add' element={<Form add={add} />} />
        <Route path='sort' element={<List arr={contribution} />} />
      </Routes>

    </>
  );
}

export default App;