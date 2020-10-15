import React, { Component } from 'react';
import { Button, Message } from 'semantic-ui-react';
import { FormGroup } from 'reactstrap';
import { connect } from 'react-redux';
import { GENDER_OPTIONS } from './../../../../../constants/global';
import InputField from './../../../../../components/CustomFields/InputField';
import SelectField from './../../../../../components/CustomFields/SelectField';
import { FastField, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  gender: Yup.string().required('This field is required.'),
  introduction: Yup.string().required('This field is required.').nullable(),
});

class UserInfoForm extends Component {
  render() {
    const { initialValues } = this.props;
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={this.props.onSubmit}
      >
        {() => {
          // do something here ...
          //const { isSubmitting, values, errors, touched } = formikProps;
          //console.log({ values, errors, touched });
          return (
            <Form>
              <Field
                name="gender"
                component={SelectField}
                label="Gender"
                placeholder="What's your gender?"
                options={GENDER_OPTIONS}
              />

              <Field
                name="introduction"
                type="textarea"
                component={InputField}
                label="Introduction"
                placeholder="Eg: Your introduction ..."
                rows={10}
              />
              <FormGroup>
                <Message
                  hidden={true}
                  error
                  header="Could you check something!"
                  list={[
                    'Your email address is invalid.',
                    'Your phone is invalid.',
                  ]}
                />
              </FormGroup>

              <FormGroup>
                <Button type="submit" color="blue">
                  Save Changes
                </Button>
                <Button type="reset" color="red">
                  Cancel
                </Button>
              </FormGroup>
            </Form>
          );
        }}
      </Formik>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(UserInfoForm);
