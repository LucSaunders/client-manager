// Create functional component for Dashboard. Stateless. Just a parent component for the Client component and the Sidebar
import React from 'react';
import Clients from '../clients/Clients';
import Sidebar from '../layout/Sidebar';

export default () => {
  return (
    <div className="row">
      <div className="col-md-10">
        <Clients />
      </div>
      <div className="col-md-2">
        <Sidebar />
      </div>
    </div>
  );
};
