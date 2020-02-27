import React, {useState, useContext} from 'react';
import { Container, Row, Col, Form, Button} from 'react-bootstrap'
import {FilterContext} from '../contexts/FilterContext';
import {objToQueryString} from '../data/utils'

import Header from '../Components/Header'

const CustomFilters = (props) =>{

    

    const [filterObj, setFilterObj] = useState({
      thickness:0, 
      width: 0,
      priceHigh:"", 
      priceLow:"",
      hasLatex:false,
      warranty:0,
      hasEMI: false
    });
    // From the app context
    const [contextFilter, setContextFilter] = useContext(FilterContext);
    
    const widthProfiles = [
        {type: "diwan", val: 30, lengthVariations:"72, 75, 78 inches"},
        {type: "single", val: 36, lengthVariations:"72, 75, 78 inches"},
        {type: "double", val: 48, lengthVariations:"72, 75, 78 inches"},
        {type: "queen", val: 60, lengthVariations:"72, 75, 78 inches"},
        {type: "queen xl", val: 66, lengthVariations:"72, 75, 78 inches"},
        {type: "king", val: 72, lengthVariations:"72, 75, 78 inches"},
    ]

    const handleFormInput = (e) =>{
        e.persist();
        setFilterObj((prevState) =>{
            return {...prevState, [e.target.name]:e.target.value}
        })
    }

    const handleFormBooleanInput = (e) =>{
        e.persist();
        let val = false;
        if(e.target.value === "yes"){ val = true}
        setFilterObj((prevState) =>{
            return {...prevState, [e.target.name]:val}
        })
    }

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        let urlQuery = objToQueryString("/results/",filterObj);
        setContextFilter((prevState)=>{
            return {...prevState,
                thickness: filterObj.thickness,
                width: filterObj.width,
                priceHigh:filterObj.priceHigh, 
                priceLow:filterObj.priceLow,
                hasLatex:filterObj.hasLatex,
                warranty:filterObj.warranty,
                hasEMI: filterObj.hasEMI
            }
        })
        console.log(contextFilter)
        props.history.push(urlQuery);
    }



    return(
        <>
        <Header title="Custom Filters" description="Select the options below to filter results based on your custom attributes" />
        
        <Container>
            <Row>
                <Col>
                    <Form>
                        <Form.Group>
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
                        <Form.Group>
                            <Form.Label>Filter by Width</Form.Label>
                            <Form.Control
                                id="width"
                                name="width"
                                value={filterObj.width}
                                onChange = {handleFormInput}
                                as="select"
                                type="text"
                            >
                                <option value="0">Show all</option>
                                {widthProfiles.map(profile=>{
                                    return(<option key={profile.type} value={profile.val}>{profile.type.toUpperCase()} - Length: {profile.lengthVariations}</option>)
                                })}
                            </Form.Control>
                        </Form.Group>
                        <Form.Row>
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
                        </Form.Row>
                        <Form.Group>
                            <Form.Label>Minimum Warranty Period</Form.Label>
                            <Form.Control
                                id="warranty"
                                name="warranty"
                                value={filterObj.warranty}
                                onChange = {handleFormInput}
                                type="Number"
                                as="select"
                            >
                                <option value="0">No Warranty</option>
                                {[3,5,7,10].map(val=>{
                                    return (<option key={val}>{val}</option>)
                                })}
                            </Form.Control>
                        </Form.Group>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Has EMI option?</Form.Label>
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
                        </Form.Row>
                        <Button variant="secondary" onClick={handleFormSubmit}>Show Results</Button>
                    </Form>
                </Col>
            </Row>
        </Container>

        </>

    )

}

export default CustomFilters
