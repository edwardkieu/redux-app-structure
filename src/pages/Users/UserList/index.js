import React, { Component } from 'react';
import MainLayout from './../../../layouts/mainLayout';

class UserList extends Component {
  render() {
    return (
      <MainLayout title="Users">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Users</h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">users list</div>
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default UserList;
