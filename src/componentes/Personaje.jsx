import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap';
import styled from 'styled-components';

const CardContainer = styled(Card)`
    width: 18rem;
    height:30rem;
    margin-bottom:20px;
`;
class Personaje extends Component{

    render(){
        return(
            <div className="col-sm-2">
                
                <CardContainer  key={this.props.id}>
                    <Card.Img variant="top" src={this.props.img} />
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                        <Link to={{pathname:`/detalles/${this.props.id}`}}>Ver mas</Link>
                    </Card.Footer>
                </CardContainer>
            </div>
        )
    }
}

export default Personaje;