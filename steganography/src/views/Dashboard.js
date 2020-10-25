import React from 'react';
import steg from '../steganography'

class Dashboard extends React.Component {
  state = {};

  componentDidMount() {
    /* steg.encode("secret_message", image)

    steg.decode(image) */
  }

  render() {
    return (
      <div className='dashboard'>
       {/*  {console.log(steg)} */}
      </div>
    );
  }
}


export default Dashboard;