import React from 'react';
import './App.css';

function App() {
  let title ="ReactとJSX。"

  let items = [
    {"name": "イチゴ", "price": "100"},
    {"name": "バナナ", "price": "200"},
    {"name": "リンゴ", "price": "150"},
  ]
  return (
    <div className="App container">
      <h1 className="">{ title }</h1>

      <table className="table table-striped">
        <tbody>
          {items.map((value) => (
            <tr>
              <th scope="row">{ value.name }</th>
              <td>{ value.price }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
