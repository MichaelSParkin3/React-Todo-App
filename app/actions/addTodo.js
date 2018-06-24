export const ADD_TODO = 'ADD_TODO';

export function addTodo(book){
  console.log(book);
  return{
    type: 'ADD_TODO',
    payload: book
  };
}
