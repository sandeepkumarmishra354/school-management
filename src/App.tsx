import React from 'react';
import { authStore } from './mobx/store/store.auth';
import HomePage from './page/HomePage';
import { observer } from 'mobx-react';
import { sidenavStore } from './mobx/store/store.sidenav';
import LoginPage from './page/LoginPage';

interface Props {
  authStore: typeof authStore,
}

@observer
export default class App extends React.Component<Props, {}> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    if (this.props.authStore.loggedIn)
      return <HomePage
        navStore={sidenavStore}/>
    else
      return <LoginPage store={authStore} />
  }

}
