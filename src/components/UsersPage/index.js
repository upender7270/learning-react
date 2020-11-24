import React, { Component } from "react";
import { observer, inject } from "mobx-react";

import LoadingWrapperWithFailure from "../common/LoadingWrapperWithFailure";
import NoDataView from "../common/NoDataView";

@inject("usersStore")
@observer
class UsersPage extends Component {
  componentDidMount() {
    this.doNetworkCalls();
  }

  getUserStore = () => {
    return this.props.usersStore;
  };

  doNetworkCalls = () => {
    this.getUserStore().getUsersAPI();
  };

  renderUsersList = () => {
    const { users } = this.getUserStore();
    if (users.length === 0) {
      return <NoDataView />;
    }
    return users.map(userName => <div>{userName}</div>);
  };

  render() {
    const { getUsersApiStatus, getUsersApiError } = this.getUserStore();
    return (
      <LoadingWrapperWithFailure
        apiStatus={getUsersApiStatus}
        apiError={getUsersApiError}
        onRetry={this.doNetworkCalls}
        renderSuccessUI={this.renderUsersList}
        containerStyles={{ height: "100vh" }}
      />
    );
  }
}

export default UsersPage;
