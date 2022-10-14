/*eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Event = (props) => {
  const { name } = props.event.name;

  return (
    <div>{ name }</div>
  );
};

export default Event;
