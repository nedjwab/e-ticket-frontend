import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
const Event = (event) => {
  return (
    <div>{event.name}</div>
  )
}

export default Event