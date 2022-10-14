import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';

const Event = (props) => {
  let { name } = props.event.name;

  return (
    <div>{ name }</div>
  )
};

export default Event;
