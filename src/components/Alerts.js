import React from 'react';

const Alerts = ({ alerts }) => {
  return (
    <div>
      <h3>Alerts</h3>
      {alerts.length === 0 ? (
        <p>No alerts at the moment.</p>
      ) : (
        alerts.map((alert, index) => <p key={index}>{alert}</p>)
      )}
    </div>
  );
};

export default Alerts;
