// Create stateful component for Clients
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Clients extends Component {
  render() {
    const clients = [
      {
        id: '213543645',
        firstName: 'Hildegard',
        lastName: 'von Bingen',
        email: 'bingy@email.com',
        phone: '123-234-2345',
        balance: '1500'
      },
      {
        id: '211236745',
        firstName: 'Barry',
        lastName: 'Sanders',
        email: 'bsand@email.com',
        phone: '176-342-5565',
        balance: '1000'
      }
    ];

    if (clients) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h3>
                {' '}
                <i className="fas fa-users" /> Clients{' '}
              </h3>
            </div>
            <div className="col-md-6" />
          </div>

          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <tr key={client.id}>
                  <td>
                    {client.firstName} {client.lastName}
                  </td>
                  <td>{client.email}</td>
                  <td>${parseFloat(client.balance).toFixed(2)}</td>
                  <td>
                    <Link
                      to={`/client/${client.id}`}
                      className="btn btn-secondary btn-sm"
                    >
                      <i className="fas fa-arrow-circle-right" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <h3>Loading...</h3>;
    }
  }
}
export default Clients;
