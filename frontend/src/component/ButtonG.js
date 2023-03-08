import { Button } from 'antd';
import Form from './Form.js';
import React from 'react';
import './ButtonG.css'
class ButtonG extends React.Component{
  constructor(props){
    super(props);
  }

  handleCreate(event) {
    console.log('Hello reeeee')
    return <Form/>;
  }
  
  render()
  {
    return(
      <div className='container'>
        <h2>Select the CRUD option below :-</h2>
        <Button type="primary" className='buttong' onClick={this.handleCreate}  block> <b>CREATE</b></Button>
        <Button type="danger"  className='buttong' block> <b>READ</b> </Button>
        <Button type="primary" className='buttong' block><b>UPDATE</b></Button>
        <Button type="danger"  className='buttong' block><b>DELETE</b></Button>
      </div>
    );
  }
}

export default ButtonG;