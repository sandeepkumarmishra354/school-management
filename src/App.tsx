import React from 'react';
import { observer } from 'mobx-react';
import SchoolManagement from './ui/SchoolManagement';

interface Props {
  //
}

@observer
export default class App extends React.Component<Props, {}> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    return <SchoolManagement/>
  }

}
