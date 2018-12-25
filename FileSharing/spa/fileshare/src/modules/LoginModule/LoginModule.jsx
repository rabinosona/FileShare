import React from 'react';

class LoginModule extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      <InputComponent />
      <UserActionsComponent />
      <SubmitComponent />
      </div>
    );
  }
}