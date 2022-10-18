import React, { useEffect } from 'react';

export default function Room({ match }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const eventData = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch(`http://127.0.0.1:3001/api/v1/events/?id=${match.params.id}`, eventData)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="container my-5">
      {data.map((item) => (
        <div className="details-container" key={item.id}>
          <div className="img-container">
            <img src={item.photo} alt={item.name} />
          </div>
          <div className="contents p-5">
            <div className="p-3">
              <p>Name: </p>
              <h3>{item.name}</h3>
            </div>

            <div className="p-3 my-2">
              <p>Price: $</p>
              {' '}
              <h4>{item.ticket_price}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
