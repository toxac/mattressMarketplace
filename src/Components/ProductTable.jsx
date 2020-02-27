import React from 'react';
import {Table} from 'react-bootstrap'

export default function ProductTable (props){
    const data = props.data;
    const items = {
        "id": 78,
        "company": "Wakefit",
        "productRange": "Orthopedic Memory Foam",
        "sizeCategory": "Single",
        "thickness": 8,
        "material": "Composite",
        "width": 35,
        "length": 75,
        "price": 7875,
        "numberOfLayers": "",
        "topLayer": "Cool Foam",
        "midLayer": "Memory Foam + Transition Layer",
        "bottomLayer": "HR Foam",
        "hasLatex": false,
        "hasEMI": true,
        "tryPeriod": 100,
        "hasShipping": true
    }

    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Size</th>
                    <th>Thick</th>
                    <th>Width</th>
                    <th>Length</th>
                    <th>Price</th>
                    <th>Layers</th>
                    <th>Latex</th>
                    <th>EMI</th>
                    <th>Ship</th>
                    <th>Trial</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item)=>{
                    return(
                        <tr key={item.id}>
                            <td>{item.productRange}/{item.company}</td>
                            <td>{item.sizeCategory}</td>
                            <td>{item.thickness}</td>
                            <td>{item.width}</td>
                            <td>{item.length}</td>
                            <td>{item.price}</td>
                            <td>{item.numberOfLayers}</td>
                            <td>{item.hasLatex?"yes":"no"}</td>
                            <td>{item.hasEMI? "yes": "no"}</td>
                            <td>{item.hasShipping? "free":""}</td>
                            <td>{item.tryPeriod}</td>
                        </tr>
                    )
                })}
                
            </tbody>
        </Table>
    )
}
