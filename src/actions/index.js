export function selectBook(book){
    return{
      type: 'BOOK-SELECTED',
      payload: book
    };
}
