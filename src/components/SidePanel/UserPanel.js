import React from 'react';
import { connect } from 'react-redux';
import { Grid, Icon, Header, Dropdown } from 'semantic-ui-react';
import firebase from 'firebase';

class UserPanel extends React.Component {
  dropdownOptons = () => [
    {
      key: 'user',
      text: <span>Signed in as <strong>user</strong></span>,
      disabled: true
    },
    {
      key: 'avatar',
      text: <span>Change Avatar</span>
    },
    {
      key: 'signout',
      text: <span onClick={this.handleSignout}>Sign Out</span>
    }
  ]

  handleSignout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('Signed Out!');
      })
  }

  render() {
    return (
      <Grid style={{ background: '#4c3c4c' }}>
        <Grid.Column>
          <Grid.Row style={{ padding: '1.2em', margin: 0 }}>
            {/* App Header */}
            <Header inverted floated="left" as="h2">
              <Icon name="code" />
              <Header.Content>DevChat</Header.Content>
            </Header>
          </Grid.Row>

          {/* User Dropdown */}
          <Header style={{ padding: '0.25em' }} as="h4" inverted>
            <Dropdown trigger={<span>User</span>} 
            options={this.dropdownOptons()} />
          </Header>
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  currentUser: state.user.currentUser
}

export default connect(mapStateToProps)(UserPanel);