// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom"
// import { Badge, Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Row } from "reactstrap";



// function Product() {
//     const navigate = useNavigate();

//     const [data, setData] = useState([])

//     useEffect(() => {
//         fetch('https://fakestoreapi.com/products')
//             .then(response => response.json())
//             .then(json => setData(json))
//     }, [])


//     const handleClick = (item) => {
//         console.log(item)
//         navigate(`./details/${item.id}`)
//     }


//     return (
//         <>
//             <Row>
//                 {data.map((item, i) => {
//                     const { image, title, description, price, category } = item
//                     return (
//                         <Col md={4} key={i} className="mb-2">
//                             <Card

//                             >
//                                 <img
//                                     alt="Sample"
//                                     src={image}
//                                     style={{ height: '250px' }}
//                                 />
//                                 <CardBody>
//                                     <CardTitle tag="h5">
//                                         {title}
//                                         <Badge color="primary">{category}</Badge>
//                                     </CardTitle>
//                                     <CardText
//                                         style={{
//                                             height: '100px',
//                                             whiteSpace: 'nowrap',
//                                             overflow: 'hidden',
//                                             textOverflow: 'ellipsis'
//                                         }}
//                                     >
//                                         {description}
//                                     </CardText>
//                                     <Button onClick={(i) => handleClick(i)}>Click Here</Button>
//                                 </CardBody>
//                             </Card>
//                         </Col>
//                     )
//                 })}
//             </Row>
//         </>
//     );
// }

// export default Product;
