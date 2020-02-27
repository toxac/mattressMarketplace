import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Form} from 'react-bootstrap'
import DataSource from '../data/mattressses'
import ProductCard from '../Components/ProductCard';

const Main = (props) =>{

    const [filterObj, setFilterObj] = useState({thickness:0, priceSort:"", priceHigh:"", priceLow:"",hasLatex:false})
    const [data, setData] = useState([]);

    useEffect(()=>{
        const filteredData = DataSource(filterObj);
        setData(filteredData);
        console.log(filterObj);
    },[filterObj]);

    const handleThicknessChange = (e)=>{
        e.persist();
        setFilterObj((prevState)=>{
            return {...prevState, thickness:e.target.value}
        })
    }
    const handlePriceSortChange = (e) => {
        e.persist();
        console.log(e.target.value)
        setFilterObj((prevState)=>{
            return {...prevState, priceSort:e.target.value}
        })
        console.log(filterObj)
    }

    const handlePriceHighChange = (e) => {
        e.persist()
        setFilterObj((prevState)=>{
            return {...prevState, priceHigh:e.target.value}
        })
        
    }

    const handlePriceLowChange = (e) => {
        e.persist()
        setFilterObj((prevState)=>{
            return {...prevState, priceLow:e.target.value}
        })
    }


    return(
        <>
            <div className="full-width-background">
                <Container>
                    <Row>
                            <Col>
                                <div className="text-center">
                                    <h1>Mattresses in Market</h1>
                                    <p>Use the options below to sort anf filter</p>
                                </div>
                            </Col>
                            
                        </Row>
                    <Row>
                        <Col>
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Filter by Thickness</Form.Label>
                                        <Form.Control
                                            id="thickness"
                                            name="thickness"
                                            value={filterObj.thickness}
                                            onChange = {handleThicknessChange}
                                            as="select"
                                            type="Number"
                                        >
                                            <option value="0">Show all</option>
                                            <option>6</option>
                                            <option>8</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>SortBy Price</Form.Label>
                                        <Form.Control
                                            id="priceSort"
                                            name="priceSort"
                                            value={filterObj.priceSort}
                                            onChange = {handlePriceSortChange}
                                            as="select"
                                            type="Number"
                                        >
                                            <option>select one</option>
                                            <option>Ascending</option>
                                            <option>Descending</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>Price Low</Form.Label>
                                        <Form.Control
                                            id="priceLow"
                                            name="priceLow"
                                            value={filterObj.priceLow}
                                            onChange = {handlePriceLowChange}
                                            type="Number"
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>Price High</Form.Label>
                                        <Form.Control
                                            id="priceHigh"
                                            name="priceHigh"
                                            value={filterObj.priceHigh}
                                            onChange = {handlePriceHighChange}
                                            type="Number"
                                        />
                                    </Form.Group>
                                </Form.Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col>displaying {data.length} products.</Col>
                </Row>
                <Row>
                    
                    {data.map(item =>{
                        return(
                            <ProductCard key={item.id} data={item}/>
                        )
                    })}
                </Row>
            </Container>
        </>

    )

}

export default Main
