import React, { useState ,useEffect } from 'react'
import Images from './Images';
import './table.css';
import Thumbnail from './Thumbnail';

function TabularData() {

    const [tableData, setTableData] = useState([]);

    useEffect(()=> {
        fetch("https://dummyjson.com/products",
        {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then((res) => res.json()).then(data => setTableData(data.products));
    }, []);


  return (
    <div>
        <table>
            <tr>
            <th>id</th>
            <th>title</th>
            <th>description</th>
            <th>price</th>
            <th>discountPercentage</th>
            <th>rating</th>
            <th>stock</th>
            <th>brand</th>
            <th>category</th>
            <th>thumbnail</th>
            <th>images</th>
            </tr>
            {tableData.map((tuple) => (
                    <tr>
                    <th>{tuple.id}</th>
            <td>{tuple.title}</td>
            <td>{tuple.description}</td>
            <td>{tuple.price}</td>
            <td>{tuple.discountPercentage}</td>
            <td>{tuple.rating}</td>
            <td>{tuple.stock}</td>
            <td>{tuple.brand}</td>
            <td>{tuple.category}</td>
            <td><Thumbnail props={tuple.thumbnail} /></td>
            <td><Images images={tuple.images} /></td>
                    </tr>
                ))}
            
        </table>
    </div>
  )
}

export default TabularData