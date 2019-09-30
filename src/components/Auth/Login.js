import React from 'react';
import firebase from '../../firebase';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import { Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    errors: [],
    loading: false
  }

  displayErrors = errors => errors.map((error, i) => <p key={i}>{error.message}</p>);

  handleInputError = (errors, inputName) => {
    return errors.some(err => err.message.toLowerCase().includes(inputName)) ? 'error' : ''
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    if (this.isFormValid(this.state)) {
      this.setState({ errors: [], loading: true });
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(signedInUser => {
          console.log(signedInUser);
        })
        .catch(err => {
          console.log(err);
          this.setState({
            errors: this.state.errors.concat(err),
            loading: false
          });
        })
    }
  }

  isFormValid = ({email, password}) => {
    email && password
  }

  render() {
    const {email, password, errors, loading} = this.state;

    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" icon color="violet" textAlign="center">
            <Icon name="code branch" color="violet" />
            Login for DevChat
          </Header>
          <Form onSubmit={this.handleSubmit} size="large">
            <Segment stacked>
              <Form.Input className={this.handleInputError(errors, 'email')}
              fluid name="email" icon="mail" iconPosition="left"
              placeholder="Email Address" value={email} onChange={this.handleChange} type="email" />

              <Form.Input className={this.handleInputError(errors, 'password')}
              fluid name="password" icon="lock" iconPosition="left"
              placeholder="Password" value={password} onChange={this.handleChange} type="password" />

              <Button disabled={loading} className={loading ? 'loading' : ''} fluid color="violet" size="large">Submit</Button>
            </Segment>
          </Form>
          {errors.length > 0 && (
            <Message error>
              <h3>Error</h3>
              {this.displayErrors(errors)}
            </Message>
          )}
          <Message>
            Don't have an account? <Link to="/register">Register</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Login;