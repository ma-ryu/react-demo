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

      {/* コンポーネントの練習 */}
      <div className="text-center">
        <Clock />
      </div>
    </div>
  );
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.now = new Date();
    this.Hours = this.now.getHours();
    this.Min = this.now.getMinutes();
    this.Sec = this.now.getSeconds();
    this.time = `${this.Hours}:${this.Min}:${this.Sec}`
    this.state = {
      time: this.time
    }
    
    this.refresh = this.refresh.bind(this);
  }

  refresh() {
    this.now = new Date();
    this.Hours = this.now.getHours();
    this.Min = this.now.getMinutes();
    this.Sec = this.now.getSeconds();
    this.time = `${this.Hours}:${this.Min}:${this.Sec}`
    
    this.setState((state) => ({
      time: this.time
    }))

  }

  render() {
    
    return (
    <div>
      <p>現在の時刻を表示します。</p>
      <p onClick={this.refresh}>{ this.state.time }</p>
      <button className="btn btn-primary" onClick={this.refresh}>更新</button>
    </div>

    )
  }
}

export default App;
