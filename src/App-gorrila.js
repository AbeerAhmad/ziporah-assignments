import React, { Component } from 'react';
import './App.css';
import { receipt1, receipt2, receipt3 } from './dimidata/dimidata';
// import Home from './home';

class App extends Component {


  state = {
    recipts: [receipt1, receipt2, receipt3]
  }

  updatelist = (i) => {
    console.log('click')
    let list = [...this.state.recipts]
    list[i].paid = true
    this.setState({ recipts: list })

  }
  render() {

    console.log(this.state.recipts)
    return (
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
        {
          this.state.recipts.map((item, i) => {
            if (item.paid == false) {
              return (

                <div key={i} onClick={() => { this.updatelist(i) }} style={{ border: 'chocolate 1px solid ', padding: '10px' }} >
                  <ul style={{ listStyle: 'none', paddingLeft: '0px' }}>
                    <li>
                      <h1>{item.person}</h1>
                    </li>
                    <li>
                      <ul>
                        <li>
                          main : {item.order.main}
                        </li>
                        <li>
                          rice : {item.order.rice}
                        </li>
                        <li>
                          Sauce: {item.order.sauce}
                        </li>
                        <li>
                          drink : {item.order.drink}
                        </li>
                        <li>
                          cost : {item.order.cost}
                        </li>
                      </ul>
                    </li>

                  </ul>
Hungry for More

                </div>

              )
            }


          })
        }


      </div>
    )
  }
}


// function App() {
//   return (<div><Home /></div>)
// }
export default App;
