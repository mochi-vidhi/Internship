import React, { useState, useEffect } from 'react'
import './FakeStore.css'

export default function FakeStore() {
    const [users, setUsers] = useState([]);
    const product = { id: '21', title: 'Pizza', price: 199, description: 'This is Pizza', category: 'fast food' }
    const updateProduct = {title:'Panipuri',price:200,description:'This is Panipuri',category:'Homemad'}
    const handleAddProduct = ()=>{
        fetch('https://fakestoreapi.com/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        })
            .then(response => response.json())
            .then(json => setUsers(json))

    }
   const handleDeleteProduct = ()=>{
        fetch(`https://fakestoreapi.com/products/${users.id}`, {
            method: 'DELETE'
         })
         .then(response => response.json())
         .then((json) => {console.log('Delete Response',json);setUsers(null)})
   }
   const handlePut = ()=>{
      fetch(`https://fakestoreapi.com/products/${users.id}`,{
          method:'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updateProduct)
      })
      .then(response => response.json())
      .then((json)=>{console.log('Update successfully');setUsers(json)})
   }

    return (
        <div>
           <h1>Fake Store Products</h1>
           <button onClick={handleAddProduct}>Add Product</button>
           <button onClick={handleDeleteProduct}>Delete Product</button>
           <button onClick={handlePut}>Update Product</button>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>category</th>

                    </tr>

                </thead>
                <tbody>
                    {
                       users &&  (
                            <tr>
                                <td>{users.id}</td>
                                <td>{users.title}</td>
                                <td>{users.price}</td>
                                <td>{users.description}</td>
                                <td>{users.category}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    )
}
