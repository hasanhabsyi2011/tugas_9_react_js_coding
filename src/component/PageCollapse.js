import React, { Component } from 'react';
import {Button, Collapse} from 'react-bootstrap';



class PageCollapse extends Component {
  constructor(props){
  super(props);
  this.state={
    buka:false
  };

}
  render() {
    return(
      <div>


      <Button
        variant="success"
        onClick={()=>this.setState({ buka: !this.state.buka})}>Versi Website</Button>
          <Collapse in={this.state.buka}>
          <p>Akses Sport V1.0</p>
          </Collapse>

    </div>


    );
  }
}
export default PageCollapse;
