import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

const Mdiv = styled.div`
  width: 400px;
  height: 500px;
  float:left;
`

const Ul = styled.div`
  list-style: none;
  width: 400px;
  float:left;
  border: 2px solid #eee;
  border-radius: 5px;
`
const Li = styled.li`
  border-bottom: 1px solid #eee;
  padding: 10px;
  padding-left: 20px;
  font-family: 'Caveat', cursive;

  &:hover {
    background-color: palevioletred;
  }
`
const Image = styled.img`
  box-shadow: 5px 5px 7px grey;
  margin-top: 20px;
  margin-left: 40px;
  width: 320px;
  height: 240px;
`

class BookList extends Component {
  renderList() {

    return this.props.books.map((book) => {
      return(
        <Li
          key={book.name}
          onClick={() => this.props.selectBook(book)}
          >

          {book.name}

        </Li>
      );
    });
  }

  render() {
    return(
      <Mdiv>
      <Ul>
        {this.renderList()}
      </Ul>
      <Image src='http://static5.businessinsider.com/image/5554edfeeab8ea4b1ad7b6e1-1200-924/kris-jenner-kardashian-khloe-kardashian-kendall-jenner.jpg' />              
      </Mdiv>
    )
  }
}

function mapStateToProps(state) {
  return{
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
