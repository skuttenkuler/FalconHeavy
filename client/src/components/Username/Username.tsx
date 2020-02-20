import * as React from "react";

interface InterfaceProps {
  user?: any;
}

export class Username extends React.Component<
  InterfaceProps, 
  {}
  >{
  constructor(props: any) {
    super(props);
  }

  public render() {
    const { users }: any = this.props;

    return (
      <div>
        <h2>{Object.keys(users).map(key => {
            return <li key={key}>{users[key].username}</li>;
          })}</h2>
        

        
      </div>
    );
  }
}