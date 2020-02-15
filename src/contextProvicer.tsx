import React from 'react';

interface iContext {
  launchID: string;
  setLaunchID: Function;
}

export const Context = React.createContext<iContext>({ launchID: '', setLaunchID: () => {} });

export class ContextProvider extends React.Component<any, iContext> {
  private setLaunchID: Function;

  constructor(props: any) {
    super(props);

    this.setLaunchID = (id: string) => {
      this.setState({ launchID: id }, () => {
        console.log(`LaunchID in context: ${this.state.launchID}`);
      });
    }

    this.state = {
      launchID: '',
      setLaunchID: this.setLaunchID
    }
  }

  render() {
    return <Context.Provider value={this.state}>
      {this.props.children}
    </Context.Provider>
  }
}
