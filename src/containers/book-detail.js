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

class BookDetail extends Component {
    render() {
      if (!this.props.book) {
        return <Bdiv> Select a Celebrity! </Bdiv>;
      }

      return (
        <Rdiv>
          <h3><b>{this.props.book.name}</b> </h3>
          <div><b>Age:</b>{this.props.book.Age} </div>
          <div> <b>BirthDay:</b> {this.props.book.birthday} </div>
          <div> <b>Personal Life:</b> {this.props.book.plife} </div>
          <div> <b>Reference:</b> {this.props.book.reference} </div>
        </Rdiv>
        
      );
    }
}

function mapStateToProps(state) {
  return{
      book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
