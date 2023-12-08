import React from 'react';
import { Row, Card, Col, Button, Image, ListGroup} from 'react-bootstrap';
import products from '../products';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import RatingComponent from '../components/RatingComponent';

const ProductScreen = () => {

  const { id: productId} = useParams()

  const product = products.find((p) => p._id === productId)
  console.log("productId", product)

  return (
    
    <>
    <br/>
        <Link to='/' className=' button-style my-5 p-2'>Go Back</Link>

        <Row className='my-5'>
            <Col md={5}>
              <Image src={product.images} alt={product.name} fluid/>
            </Col>

            <Col md={4}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                    Product Name: {product.name}
                </ListGroup.Item>

                <ListGroup.Item>
                    <RatingComponent value={product.rating} text={`${product.numReviews} reviews`}/>  
                </ListGroup.Item>

                <ListGroup.Item>
                  Price: ${product.price}
                </ListGroup.Item>

                <ListGroup.Item>
                  Description: {product.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Col md={3}>
              <Card>
                  <ListGroup variant='flush'> 
                      <ListGroup.Item>
                        <Row>
                            <Col>Price:</Col>
                            <Col><strong>${product.price}</strong></Col>    
                        </Row>
                      </ListGroup.Item>

                      <ListGroup.Item>
                        <Row>
                            <Col>Status:</Col>
                            <Col><strong>
                              { product.countInStock > 0 ? 'In Stock' : 'Out Of Stock' }
                              </strong></Col>    
                        </Row>
                      </ListGroup.Item>

                      <ListGroup.Item>
                          <Button type='submit' variant='dark'
                          disabled = {product.countInStock === 0 }>Add To Cart</Button>
                      </ListGroup.Item>
                  </ListGroup>
          
              </Card>
            </Col>
        </Row>
    </>

  )
}

export default ProductScreen