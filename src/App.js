import { useState } from 'react';
import './App.css';
import Data from "./Data"
function App() {
  const[search,setsearch]=useState('')
 
  return (
    <div className="App">
      <div>Contact Checker</div>
      <input placeholder='Search Contacts' onChange={(e)=>setsearch(e.target.value)}></input>
      <table>
        <tr>
        <th>id</th>
        <th>first_name</th>
        <th>last_name</th>
        <th>email</th>
        <th>gender</th>
        <th>phone</th>
        </tr>
       {Data.filter((item)=>{
        return search.toLowerCase()===' ' ? item : item.first_name.toLowerCase().includes(search)
       }).map((items)=>{
        return  <tr>
        <td>{items.id}</td>
        <td>{items.first_name}</td>
        <td>{items.last_name}</td>
        <td>{items.email}</td>
        <td>{items.gender}</td>
        <td>{items.phone}</td>
        </tr> 
       })}
      </table>
    </div>
  );
}

export default App
