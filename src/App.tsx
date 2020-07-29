import React from 'react';
import { authStore } from './mobx/store/store.auth';
import HomePage from './page/HomePage';
import { observer } from 'mobx-react';
import { homeStore } from './mobx/store/store.home';
import { sidenavStore } from './mobx/store/store.sidenav';
import { utilsStore } from './mobx/store/store.util';
import LoginPage from './page/LoginPage';

interface Props {
  authStore: typeof authStore,
  utilStore: typeof utilsStore
}

@observer
export default class App extends React.PureComponent<Props, {}> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    if (this.props.authStore.loggedIn)
      return <HomePage
        authStore={this.props.authStore}
        homeStore={homeStore}
        navStore={sidenavStore} />
    else
      return <LoginPage store={this.props.authStore} />
  }

}
