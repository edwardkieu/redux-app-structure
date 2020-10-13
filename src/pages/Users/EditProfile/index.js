import React, { Component } from 'react';
import { Tab, Loader, Dimmer } from 'semantic-ui-react';
import { connect } from 'react-redux';
import MainLayout from '../../../layouts/mainLayout';
import UserInfoForm from './components/UserInfoForm';
import UserPhotoForm from './components/UserPhotoForm';

function mapStateToProps(state) {
  return {};
}

class EditProfile extends Component {
  state = {
    isLoading: false,
  };
  handleSubmit = (values) => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      console.log('Form submit: ', values);
      this.setState({ isLoading: false });
    }, 1000);
  };
  render() {
    const { isLoading } = this.state;
    const initialValues = {
      gender: 'male',
      information: '',
    };
    const panes = [
      {
        menuItem: 'Information',
        render: () => (
          <Tab.Pane attached={false}>
            <Dimmer active={isLoading} inverted>
              <Loader inline="centered">Loading...</Loader>
            </Dimmer>
            <UserInfoForm
              initialValues={initialValues}
              onSubmit={this.handleSubmit}
            />
          </Tab.Pane>
        ),
      },
      {
        menuItem: 'Photos',
        render: () => (
          <Tab.Pane attached={false}>
            <UserPhotoForm />
          </Tab.Pane>
        ),
      },
    ];
    return (
      <MainLayout title="Edit Profile">
        <div className="card shadow mb-4">
          <div className="card-body">
            <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default connect(mapStateToProps)(EditProfile);
