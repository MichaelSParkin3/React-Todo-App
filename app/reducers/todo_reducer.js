const initialState = {
  list: []
};

export default function todoApp(state = initialState, action) {
  switch(action.type) {
    case 'ADD_TODO':
    return {...state, list: [...state.list, action.payload]}
  }
  return state
}
