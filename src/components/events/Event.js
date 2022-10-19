import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Audio } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PropTypes from 'prop-types';
import { fetchEvents, selectEvents } from '../../features/events/eventSlice';

export default function Event() {
  const dispatch = useDispatch();
  const events = useSelector(selectEvents);
  console.log(events);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchEvents());
    setTimeout(() => {
      dispatch(setLoading());
    }, 1000);
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const CustomLeftArrow = ({ onClick }) => (
    <button
      type="button"
      className="btn btn-primary arrows"
      onClick={() => onClick()}
      style={{
        position: 'absolute',
        top: '50%',
        left: '0',
        transform: 'translateY(-50%)',
        zIndex: '1',
        backgroundColor: '#97BF11',
        border: 'none',
        borderRadius: '0 50% 50% 0',
        width: '80px',
        height: '60px',
        fontSize: '20px',
        color: '#fff',
        fontWeight: 'bold',
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
      }}
    >
      left
    </button>
  );

  const CustomRightArrow = ({ onClick }) => (
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => onClick()}
      style={{
        position: 'absolute',
        top: '50%',
        right: '0',
        transform: 'translateY(-50%)',
        zIndex: '1',
        backgroundColor: '#97BF11',
        border: 'none',
        borderRadius: '50% 0 0 50%',
        width: '80px',
        height: '60px',
        fontSize: '20px',
        color: '#fff',
        fontWeight: 'bold',
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
      }}
    >
      right
    </button>
  );

  CustomRightArrow.propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  CustomLeftArrow.propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  if (loading) {
    return (
      <div className="loader">
        <Audio
          height="80"
          width="80"
          radius="9"
          color="#97bf11"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      </div>
    );
  }

  return (
    <div className="w-100">
      <h1 className="text">Our Events List</h1>
      <h2 className="secondry-text ">Please select one</h2>
      <div className="card-container">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={3000}
          keyBoardControl
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          deviceType={responsive.deviceType}
          partialVisible
          swipeable
          showDots
          dotListClass="custom-dot-list-style carousel-dots"
          renderDotsOutside
          itemClass="carousel-item-padding-10-px rounded-5 "
          slidesToSlide={1}
          arrows
          customRightArrow={<CustomRightArrow onClick={() => {}} />}
          customLeftArrow={<CustomLeftArrow onClick={() => {}} />}
          removeArrowOnDeviceType={['tablet', 'mobile']}
        >
          {events.map((event) => (
            <div key={event.id} className="cards">
              <div className="img-container">
                <img src={event.photo} alt={event.name} />
              </div>
              <Link to={`/events/${event.id}`} className="link card-title">{event.name}</Link>
              <div className="card-body">
                <p className="card-text">
                  {' '}
                  {event.description}
                </p>
                <Link to="/Addreservation" className="link link-decoration">Reserve</Link>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
