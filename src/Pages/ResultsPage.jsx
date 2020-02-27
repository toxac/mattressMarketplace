import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Tab, Tabs, Button, Form} from 'react-bootstrap'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
import { parse } from 'query-string';
import Data from '../data/mattressses'
import ProductCard from '../Components/ProductCard'
import ProductTable from '../Components/ProductTable'



const ResultsPage = (props) =>{
    var parsed = parse(props.location.search);
    const [controlShow, setControlShow] = useState(false);
    const [filterObj, setFilterObj] = useState({
      thickness:parsed.thickness, 
      width:    parsed.width,
      priceHigh:parsed.priceHigh, 
      priceLow: parsed.priceLow,
      hasLatex: parsed.hasLatex,
      warranty: parsed.warranty,
      hasEMI:   parsed.hasEMI,
      priceSort: "",
      hasTrial:""
    })
    const [data, setData] = useState([]);
    const [chartData, setChartData] = useState([]);

    useEffect(()=>{
        const filteredData = Data(filterObj);
        setData(filteredData);
        var dataForCharting = [];
        for(let i = 0; i< filteredData.length; i++){
            dataForCharting.push(
                {
                    name: filteredData[i].company+"/"+filteredData[i].productRange,
                    price: filteredData[i].price,
                }
            )
        }
        setChartData(dataForCharting)
    },[filterObj]);

    const handleFormBooleanInput = (e) =>{
        e.persist();
        let val = false;
        if(e.target.value === "yes"){ val = true}
        setFilterObj((prevState) =>{
            return {...prevState, [e.target.name]:val}
        })
    }

    const handleFormInput = (e) => {
        e.persist();
        setFilterObj((prevState)=>{
            return {...prevState, [e.target.name]:e.target.value}
        })
    }


    return(
        <>
        {controlShow?
            <div className="full-width-background slide-top">
                <Container>
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
                                            onChange = {handleFormInput}
                                            as="select"
                                            type="Number"
                                        >
                                            <option value="0">Show all</option>
                                            {[2,3,4,5,6,7,8,10,12].map(val=>{
                                                return(<option key={val}>{val}</option>)
                                            })}
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>Warranty</Form.Label>
                                        <Form.Control
                                            id="warranty"
                                            name="warranty"
                                            value={filterObj.warranty}
                                            onChange = {handleFormInput}
                                            as="select"
                                            type="text"
                                        >
                                            <option value="0">No Warranty</option>
                                            {[3,5,7,10].map(val=>{
                                                return (<option key={val}>{val} yrs</option>)
                                            })}
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>Price Low</Form.Label>
                                        <Form.Control
                                            id="priceLow"
                                            name="priceLow"
                                            value={filterObj.priceLow}
                                            onChange = {handleFormInput}
                                            type="Number"
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>Price High</Form.Label>
                                        <Form.Control
                                            id="priceHigh"
                                            name="priceHigh"
                                            value={filterObj.priceHigh}
                                            onChange = {handleFormInput}
                                            type="Number"
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>Has Latex?</Form.Label>
                                        <Form.Control
                                            id="hasLatex"
                                            name="hasLatex"
                                            type="text"
                                            value={filterObj.hasLatex}
                                            onChange={handleFormBooleanInput}
                                            as="select"
                                        >
                                            <option value="no">Select an option</option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>EMI</Form.Label>
                                        <Form.Control
                                            id="hasEMI"
                                            name="hasEMI"
                                            type="text"
                                            value={filterObj.hasEMI}
                                            onChange={handleFormBooleanInput}
                                            as="select"
                                        >
                                            <option value="no">Select an option</option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>Trial</Form.Label>
                                        <Form.Control
                                            id="hasTrial"
                                            name="hasTrial"
                                            type="text"
                                            value={filterObj.hasTrial}
                                            onChange={handleFormBooleanInput}
                                            as="select"
                                        >
                                            <option value="no">Select an option</option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form.Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
            
        :null
        }
        <Container>
            <Row className="mt-4">
                <Col md={4}></Col>
                <Col md={3}><p className="float-right">Showing {data.length} results</p></Col>
                <Col md={3}>
                    <Form.Group>
                        <Form.Control
                            id="priceSort"
                            name="priceSort"
                            value={filterObj.priceSort}
                            onChange = {handleFormInput}
                            as="select"
                            type="text"
                        >
                            <option>Sort by Price</option>
                            <option>Ascending</option>
                            <option>Descending</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col md={2}>
                    <Form.Group>
                        <Button variant="info" onClick={()=>{setControlShow(prevState=> !prevState)}}>
                            {controlShow? "hide controls":"Show Controls"}
                        </Button>
                    </Form.Group>
                </Col>
            
            </Row>
        </Container>
        <Container>
            <Tabs defaultActiveKey="cardView" id="uncontrolled-tab-example">
                <Tab eventKey="cardView" title="Result Card">
                    <Container>
                        <Row>
                            {data.map(item =>{
                                return(
                                    <ProductCard key={item.id} data={item}/>
                                )
                            })}
                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey="tableViews" title="Table View">
                    <Container>
                        <Row>
                            <Col>
                                <ProductTable data={data} />
                            </Col>
                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey="dataView" title="Data View">
                    <Container>
                        <Row>
                            <Col>
                                <BarChart width={1000} height={500} data={chartData}
                                        margin={{top: 15, right: 10, left: 10, bottom: 5}}>
                                    <CartesianGrid strokeDasharray="3 3"/>
                                    <XAxis dataKey="name"/>
                                    <YAxis dataKey="price" />
                                    <Tooltip/>
                                    <Legend />
                                    <Bar dataKey="price" fill="#8884d8" />
                                </BarChart>
                            </Col>
                        </Row>
                    </Container>
                </Tab>
            </Tabs>

        </Container>
        </>
    )


}

export default ResultsPage;