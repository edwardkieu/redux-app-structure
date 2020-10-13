import React, { Component } from 'react';
import { Button, Message } from 'semantic-ui-react';
import { FormGroup } from 'reactstrap';
import { connect } from 'react-redux';
import { GENDER_OPTIONS } from './../../../../../constants/global';
import InputField from './../../../../../components/CustomFields/InputField';
import SelectField from './../../../../../components/CustomFields/SelectField';
import { FastField, Form, Formik } from 'formik';
import * as Yup from 'yup';

function mapStateToProps(state) {
  return {};
}

class UserInfoForm extends Component {
  render() {
    const { initialValues } = this.props;
    const validationSchema = Yup.object().shape({
      gender: Yup.string().required('This field is required.'),
      information: Yup.string().required('This field is required.').nullable(),
    });
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={this.props.onSubmit}
      >
        {(formikProps) => {
          // do something here ...
          //const { isSubmitting } = formikProps;
          //console.log({ values, errors, touched });

          return (
            <Form>
              <FastField
                name="gender"
                component={SelectField}
                label="Gender"
                placeholder="What's your gender?"
                options={GENDER_OPTIONS}
              />

              <FastField
                name="information"
                type="textarea"
                component={InputField}
                label="Information"
                placeholder="Eg: Your information ..."
                rows={10}
              />
              <FormGroup>
                <Message
                  hidden
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
      //   <form>

      //   </form>
    );
  }
}

export default connect(mapStateToProps)(UserInfoForm);
