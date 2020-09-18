import React from 'react';
import { authStore } from './mobx/store/auth/store.auth';
import HomePage from './page/HomePage';
import { observer } from 'mobx-react';
import { sidenavStore } from './mobx/store/store.sidenav';
import LoginPage from './page/LoginPage';
import { BrowserRouter } from 'react-router-dom';
import { RouteModules } from './modules/route.modules';

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
      return(
        <BrowserRouter>
          {/*<HomePage
            navStore={sidenavStore} />*/}
            <RouteModules/>
        </BrowserRouter>
      );
    else
      return <LoginPage store={authStore} />
  }

}
