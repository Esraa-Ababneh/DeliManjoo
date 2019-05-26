import React, { Component } from 'react';
// import './Menu.css';
import axios from 'axios';
export default class Menu extends Component {

        state = {
            items:[]
        }
 componentDidMount(){
     axios.get('http://94.127.209.194:3333/AudioGramServices/webapi/myresource/menu')
     .then(response=>{
         this.setState({
             items: response.data
         })
         console.log('redponse',response)
     })
     .catch(error=>{
         console.log('error', error)
     })
 }
 handleAddItem = (item)=>{
     console.log({item})
     alert('Thank you ')
 }
  render() {

    return (

      <ul>
          {this.state.items.map(item=>{
              const img =item.itemImage!= null? {backgroundimage:`url(${item.itemImage})`}:{}
              return(
              <li key={item.itemId} style={img}><div className="title">
                  Price {item.itemPrice} JD
                  <button onClick={()=>this.props.addItem(item)}>
                      +
                  </button>
                  </div>
                 
                  </li>
          )})}
       
        
      </ul>



    )
  }
}