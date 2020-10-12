import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Form, Checkbox, Button } from 'semantic-ui-react';
import MainLayout from './../../../layouts/mainLayout';

class EditProfile extends Component {
  render() {
    return (
      <MainLayout title="Edit profile">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Edit profile</h6>
          </div>
          <div className="card-body">
            <Form>
              <Form.Field>
                <label>First Name</label>
                <input placeholder="First Name" />
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <input placeholder="Last Name" />
              </Form.Field>
              <Form.Field>
                <Checkbox label="I agree to the Terms and Conditions" />
              </Form.Field>
              <Button type="submit">Submit</Button>
            </Form>
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default EditProfile;
