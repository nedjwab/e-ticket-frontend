/*eslint-disable */
import React from 'react';


const Event = (props) => {
  const { name } = props.event.name;

  return (
    <div>{ name }</div>
  );
};

export default Event;
