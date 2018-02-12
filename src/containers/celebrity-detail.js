import React , { Component } from 'react';
import { connect } from 'react-redux';
import styled, { keyframes } from 'styled-components';

const Bdiv = styled.div`
  margin-top: 0px;
  font-family: 'Caveat', cursive;
  font-size: 1.5em;
  margin-right: 450px;
  float: right;
`
const Rdiv = styled.div`
  margin-top: 0px;
  width: 650px;
  font-family: 'Caveat', cursive;
  float: right;
`

class CelebrityDetail extends Component {
    render() {
      if (!this.props.celebrity) {
        return <Bdiv> Select a Celebrity! </Bdiv>;
      }

      return (
        <Rdiv>
          <h3><b>{this.props.celebrity.name}</b> </h3>
          <div><b>Age:</b>{this.props.celebrity.Age} </div>
          <div> <b>BirthDay:</b> {this.props.celebrity.birthday} </div>
          <div> <b>Personal Life:</b> {this.props.celebrity.plife} </div>
          <div> <b>Reference:</b> {this.props.celebrity.reference} </div>
        </Rdiv>
        
      );
    }
}

function mapStateToProps(state) {
  return{
      celebrity: state.activeCelebrity
  };
}

export default connect(mapStateToProps)(CelebrityDetail);
