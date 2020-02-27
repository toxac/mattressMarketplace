import React from 'react';

import {Col, Card, ListGroup, ListGroupItem, Badge, } from 'react-bootstrap';

const ProductCard = ({data}) =>{

    return(
        <Col md="4"  className="mt-4 slide-in-blurred-top">
            <Card border={data.hasLatex? "info": "dark"} >
                    <Card.Header>{data.company} / {data.productRange}  </Card.Header>
                    <Card.Img variant="top" src={`${data.company}.jpg`} />
                    <Card.Body>
                        <Card.Title>
                            {data.sizeCategory} Bed @ rs{data.price}
                        </Card.Title>
                    </Card.Body>
                    <ListGroup>
                        <ListGroupItem>Sizes: {data.length}"-{data.width}"-{data.thickness}"</ListGroupItem>
                        <ListGroupItem>Layers: {data.numberOfLayers}</ListGroupItem>
                        <ListGroupItem>Top Layer: {data.topLayer}</ListGroupItem>
                        {data.midLayer? <ListGroupItem>Mid Layer: {data.midLayer}</ListGroupItem>: null }
                        <ListGroupItem>Bottom: {data.bottomLayer}</ListGroupItem>
                    </ListGroup>
                    <Card.Footer>
                        <Badge className="mr-1" variant={data.hasShipping?"primary": "secondary"}>Free Delivery</Badge>
                        <Badge className="mr-1" variant={data.hasEMI?"primary": "secondary"}>EMI</Badge>
                        <Badge variant={data.tryPeriod>0?"primary": "secondary"}>{data.tryPeriod} Days Trial</Badge>
                    </Card.Footer>
            </Card>
        </Col>
    )
}

export default ProductCard