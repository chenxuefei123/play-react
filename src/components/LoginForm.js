import React from 'react'
import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalLoginForm extends React.Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
	fetch('/sso', {
	  method: 'POST',
	  headers: {
	    'Accept': 'application/json',
	    'Content-Type': 'application/json',
	  },
	  body: JSON.stringify({
	    username: values.username,
	    password: 'values.password',
	  })
	})
      }
    });
  }
  render() {
    const { getFieldDecorator, getFieldsError, getFieldError } = this.props.form;
    console.log(this.props.form);

    // Only show error after a field is touched.
    const usernameError = getFieldError('username');
    const passwordError = getFieldError('password');
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <FormItem
          validateStatus={usernameError ? 'error' : ''}
          help={usernameError || ''}
        >
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem
          validateStatus={passwordError ? 'error' : ''}
          help={passwordError || ''}
        >
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            Log in
          </Button>
        </FormItem>
	<FormItem>
	     <span>{this.props.match.params.url}</span>
             <input id="query_string" type="hidden" name="query_string" value={this.props.match.params.url} />
	</FormItem>
	</Form>
    );
  }
}

export default HorizontalLoginForm
