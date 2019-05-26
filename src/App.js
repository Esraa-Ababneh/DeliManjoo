import React, { Component } from 'react';
import './App.css';
import Menu from './Componant/Menu/Menu';
import Order from './Componant/Order/Order';
// //class ControlledPopup extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       isOpen: false
//     };   }

//     handleOpen = () => {
//       this.setState({ isOpen: true });
//     }
  
//     handleClose = () => {
//       this.setState({ isOpen: false });
//     }
//   }
export default class App extends Component {

state = {
  home:true,
  orderItems:[],
  totalPrice:0
}

addItem = (item)=> {
  const orderItems = [...this.state.orderItems]
  orderItems.push(item)

  this.setState({
    orderItems:orderItems,
totalPrice: this.state.totalPrice + item.itemPrice
  })
  console.log(item, this.state.orderItems)
}
clearOrder=()=>{
  this.setState({
    orderItems:[],
    totalPrice:0,
    home:true
  })
}
  render() {

    return (
      
      <div className="container">
        <div>
          <button className="homebtn" onClick={()=>this.setState({
            home:true
          })}>Home</button>
          <button className="orderbtn" onClick={()=>this.setState({
            home:false
          })}>order </button>
           <div>
      </div>
        </div>
        <main role="main">
  <div aria-busy="true"  aria-label="Coffee." data-text="Delimanjoo" role="progressbar" >
    <p> Coffee</p>
  </div>
</main>
{this.state.home?<Menu addItem={this.addItem}/>:<Order items={this.state.orderItems}
 totalPrice={this.state.totalPrice} clearOrder={this.clearOrder}/> }
     
      
  </div>



    )
  }
}