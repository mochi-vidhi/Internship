import React, { useEffect, useState } from 'react'
import './CustomForm.css'
export default function CustomForm() {
    const [product,setProducts] = useState({
        id:'',
        title:'',
        price:'',
        description:'',
        category:''
    });
    const [productList,setProductList] = useState([]);
    const [addAllProduct,setAllProduct] = useState(null);
    
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setProducts({...product,[name]:value});
    }

    useEffect(()=>{
          fetch('https://fakestoreapi.com/products')
          .then(response => response.json())
          .then(data => setProductList(data))
    },[])

    const handleAdd = (e)=>{
        e.preventDefault();
         const { id, ...productWithoutId } = product;
        
         fetch('https://fakestoreapi.com/products',{
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productWithoutId)
        })
        .then(response => response.json())
        .then(json => {
        setAllProduct(json); 
        alert('Added Successfully'); 
        setProductList(prev => [...prev, json]);
        setProducts({
        id:'',
        title:'',
        price:'',
        description:'',
        category:''
    })

    })
}
    const handleId = (e)=>{
        const selectId = e.target.value;
        const selectedProduct = productList.find(p => p.id === parseInt(selectId));
        if(selectedProduct){
        setProducts({
        id: selectedProduct.id,
        title: selectedProduct.title,
        price: selectedProduct.price,
        description: selectedProduct.description,
        category: selectedProduct.category
      })
        }
    }
    const handleDelete = (e) => {
    e.preventDefault();
    fetch(`https://fakestoreapi.com/products/${product.id}`, {
        method: 'DELETE'
    })
    .then(response => response.json()) 
    .then(() => {
        alert('Product Deleted');
        setProductList(prev => prev.filter(p => p.id !== parseInt(product.id)));
        setAllProduct(null);
        setProducts({
            id: '',
            title: '',
            price: '',
            description: '',
            category: ''
        });
    })
    .catch(error => {
        console.error('Delete failed:', error);
        alert('Error deleting product.');
    });
};

    const handleUpdate = () => {
    fetch(`https://fakestoreapi.com/products/${product.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    })
    .then(response => response.json())
    .then(json => {
        alert('Product Updated');
        console.log(json);
        setProductList(prev => prev.map(p => (p.id === json.id ? json : p)));
        setAllProduct(json);
    })
    .catch(error => {
        console.error('Update failed:', error);
        alert('Error updating product.');
    });
};

  return (
    <div>
        <h1>Fake Store Product Manager</h1>
        <label>Select Product id to update/Delete</label>
        <select onChange={handleId} value={product.id}>
            <option value="">Select Id</option>
            {productList.map((pds)=>(
                <option key={pds.id} value={pds.id}>{pds.id}</option>
            ))}
        </select>
        <form>
            <label>Enter Title</label>
            <input type="text" name="title" value={product.title} onChange={handleChange} required/>
            <label>Enter Price</label>
            <input type="number" name="price" value={product.price} onChange={handleChange} required />
            <label>Enter Description</label>
            <input type="text" name="description" value={product.description} onChange={handleChange} required/>
            <label>Enter Category</label>
            <input type="text" name="category" value={product.category} onChange={handleChange} required/>
            <button onClick={handleAdd}>Add Products</button>
            <button onClick={handleUpdate}>Update Products</button>
            <button onClick={handleDelete}>Delete Products</button>
        </form>
       {addAllProduct && (
        <table>
             <thead>
                 <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Category</th>
                 </tr>
             </thead>
             <tbody>
                 
                    <tr>
                        <td>{addAllProduct.id}</td>
                        <td>{addAllProduct.title}</td>
                        <td>{addAllProduct.price}</td>
                        <td>{addAllProduct.description}</td>
                        <td>{addAllProduct.category}</td>
                    </tr>
                  
             </tbody>

        </table>)}
    </div>
  )
}
