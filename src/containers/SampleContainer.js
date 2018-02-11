import React, { Component } from 'react';
import { connect } from 'react-redux';
import sampleAction from '../actions/thunks/sampleAction';

class SampleContainer extends Component {
  constructor() {
    super();
  }

  handleSampleAction() {
    console.log(this.props);
    this.props.dispatch(sampleAction());
  }

  render() {
    return (
      <div>
        <button onClick={this.handleSampleAction.bind(this)} >Test</button>
      </div>
    );
  }
}

export default connect(({ sample }) => (sample))(SampleContainer);


