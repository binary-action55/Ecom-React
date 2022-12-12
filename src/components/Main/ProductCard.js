import React from "react";
import { Button, Card } from "react-bootstrap";

function ProductCard(props){
    return(
        <Card className='mt-5 mb-5 ml-0 mr-0 border-0 p-0' style={{ width: 'auto' }}>
            <Card.Header className="border-0 bg-white">
            <Card.Title className="text-center">{props.product.title}</Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Img src={ props.product.img} width='1rem'></Card.Img>
                <Card.Text className="text-center">{props.product.description}</Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between align-items-center border-0 bg-white">
                <span>{props.product.price}</span>
                <Button type='primary'>Buy</Button>
            </Card.Footer>
        </Card>
    );
}

export default ProductCard;