// import React, { useState, useEffect } from 'react';
// import SwiperCore, {
//     Pagination,
//     Navigation,
//     Scrollbar,
//     A11y
// } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// // import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
// import 'swiper/swiper.scss';
// import 'swiper/modules/navigation/navigation.scss';
// import 'swiper/modules/pagination/pagination.scss';
// import 'swiper/modules/scrollbar/scrollbar.scss';
// // import { Card, Col, Container, Row } from 'react-bootstrap';
// import Rating from '@mui/material/Rating';
// // import Review from '../../Dashboard/Review/Review';
// import { Box, Card, Container } from '@mui/material';

// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

// const Testimonials = () => {
//     const [reviews, setReviews] = useState([])
//     useEffect(() => {
//         fetch('https://obscure-waters-41987.herokuapp.com/review')
//             .then(res => res.json())
//             .then(data => setReviews(data))
//     }, [])
//     return (
//         <Container className="my-5">
//             <h2 className="text-center primary-color mb-5">Testimonials</h2>

//             <Swiper

//                 spaceBetween={20}
//                 navigation
//                 onSwiper={(swiper) => console.log(swiper)}
//                 onSlideChange={() => console.log('slide change')}
//                 scrollbar={{ draggable: true }}
//                 pagination={{
//                     "clickable": true
//                 }} breakpoints={{
//                     "640": {
//                         "slidesPerView": 1,
//                         "spaceBetween": 30
//                     },
//                     "768": {
//                         "slidesPerView": 2,
//                         "spaceBetween": 30
//                     },
//                     "1024": {
//                         "slidesPerView": 3,
//                         "spaceBetween": 60
//                     }
//                 }} className="mySwiper">
//                 <div>


//                     {reviews.map((reviews, idx) => (

//                         <SwiperSlide key={idx}>

//                             <Box >
//                                 <Card className="border-0">
//                                     <div className="d-flex justify-content-center">
//                                         <Card.Img variant="top" style={{
//                                             borderRadius: '50%', width: '100px', height: '100px', objectFit: 'cover'
//                                         }} src={reviews.user?.image ? `data:image/jpeg;base64,${reviews.user?.image} ` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiZfk_mBRRAnMVpDjIrMbiU5DUxjWeZ5nqRQ&usqp=CAU"} />
//                                     </div>
//                                     <Card.Body>
//                                         <Card.Title className="fs-5">{reviews.user?.name}</Card.Title>
//                                         {/* <Rating
//                                                 className="fs-6 text-warning my-2"
//                                                 initialRating={reviews.rating}
//                                                 readonly
//                                                 emptySymbol="fa fa-star-o fa-2x"
//                                                 fullSymbol="fa fa-star fa-2x"
//                                             /> */}
//                                         <Rating name="read-only" value={reviews.rating} readOnly />
//                                         <Card.Text className="fs-6 text-muted">
//                                             {reviews.text}
//                                         </Card.Text>

//                                     </Card.Body>
//                                 </Card>
//                             </Box>

//                         </SwiperSlide>

//                     ))}


//                 </div>
//             </Swiper>



//         </Container >
//     );
// };

// export default Testimonials;