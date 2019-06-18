import React, { Component } from 'react';
import './Order.css';
import axios from 'axios';

export default class Order extends Component {
  Close = false;
  ClosePopup = ()=>{
   this.props.Close = true;
  }

    createOrder = ()=>{
        const data={
          "itemDesc":document.getElementById('itemDesc').value,
           "itemPrice":document.getElementById('totalPrice').value,
           "itemImage":document.getElementById('itemImage').value,
      
          };
        axios.post('http://94.127.209.194:3333/AudioGramServices/webapi/myresource/postmenu', data)
        .then(response=>{
            
         console.log(response)  
         })
    }
    
  render() {

    return (<div >
      <div class="row">
        <div class="col-md-6">
                <form class="form-area" onSubmit={this.createOrder} >
                  <h3>Creat your Order</h3>
                  <div class="form-group">
                    <input type="text" class="form-control" id="itemprice" placeholder="itemPrice"/>
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" id="itemdesc" placeholder="itenDesc"/>
                  </div>
                  <div class="form-group">
                    <input type="url" class="form-control" id="itemimage" placeholder="itemImage"/>
                  </div>
                  <button id="submit" name="singlebutton" class="btn btn-primary"onClick={this.createOrder}>OK</button>
                 
                </form>
              </div>
              
                    
                  </div>
             
 
      <ul>
          {this.props.items.map(item=>{
              const img =item.itemImage!=null? {backgroundimage:'url(${item.itemImage})'}:{}
              return(
                  <li key={item.itemId} style={img}><div className="title">
                  Price {item.itemPrice} JD
                  
                  </div>
                 
                  </li>
          )})}
       
        
      </ul>
              
     

        

<aside className="profile-card"><h1 class="n">Your order total price :</h1>
<h2 class="Tprice">{this.props.totalPrice} </h2>
</aside>



</div>




    )
  }
}