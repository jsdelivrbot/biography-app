import React from 'react';
import { Component } from 'react';

import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';
import styled, { injectGlobal } from 'styled-components';

injectGlobal`
 body {
  background-color: white;
 }
`
const Idiv = styled.div`
  color: tomato;
  width: 100%;
  height: 70px;
  background-color: black;
  font-family: 'Caveat', cursive;
  text-align: center;
  padding-top:30px;
`
const ExtIdiv = Idiv.extend`
  color: palevioletred;
  padding-top: 0px;
  padding-left: 15%;
  
`
export default class App extends Component {
  render() {
    return (
      <div>
        <Idiv>
           <h1>Keeping up with the Kardashians!</h1>
        </Idiv>
        <ExtIdiv>
          <h3>Biography!</h3>
        </ExtIdiv>
        <br />
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
