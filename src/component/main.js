import { useDispatch } from 'react-redux';
import { addToCart, emptyCart } from '../redux/action';
import { removeFromCart } from '../redux/action'
import { productList } from '../redux/productsAction';
import { useSelector } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';


function Main() {
    const products = useSelector((state) => state.productData[0]);

    const dispatch = useDispatch()

    const profile = {
        name: 'drashti',
        mobile: 'samsung',
        price: '20000'
    }
    return (
        <div className="Main">
            <div>
                <button onClick={() => dispatch(addToCart(profile))}> Add to cart</button>
            </div>
            <br />
            <div>
                <button onClick={() => dispatch(removeFromCart(profile.name))}> Remove From cart</button>
            </div>
            <br />
            <div><button onClick={() => dispatch(emptyCart())}> Empty Cart</button>
            </div>
            <br />
            <div><button onClick={() => dispatch(productList())}> show product list</button>
            </div>
            <div>
                <div className="container">
                    <div className="row  justify-content-between">
                        
                        {products && products.map((item) => {
                            console.log(item)
                            return (
                                <div className='col-xl-3 col-lg-4 col-md-6
                          col-sm-12 m-3'>
                                    <Card style={{ width: '18rem' }} className='bg-light'>

                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text>
                                                {item.description}
                                            </Card.Text>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item>Brand  : {item.brand}</ListGroup.Item>
                                            <ListGroup.Item>Category : {item.category}</ListGroup.Item>
                                            <ListGroup.Item>Rating : {item.rating}</ListGroup.Item>
                                            <ListGroup.Item>Stock : {item.stock}</ListGroup.Item>
                                        </ListGroup>
                                       
                                    </Card>
                                </div>


                            )
                        }

                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Main;
