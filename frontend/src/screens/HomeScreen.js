import React from 'react';
import { Row, Col} from 'react-bootstrap';
import products from '../products';
import ProductComponent from '../components/ProductComponent';

const HomeScreen = () => {

  return (
        <>
            <h1>Latest Products</h1>
              
    <Row>
        { 
            products.map((product) => (
                <Col key={product._id} md={6} sm={12} lg={4} xl={3}>
                        {/* {product.name} */}
                        <ProductComponent  product={product}/>
                </Col>
            ))
        }
    </Row>
        </>
  )
}

export default HomeScreen