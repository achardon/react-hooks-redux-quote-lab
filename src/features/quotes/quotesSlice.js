import { v4 as uuid } from "uuid";

// Action Creators
// TODO: Create action creators as defined in tests

export const addQuote = (quote) => {
  return {
    type: "quotes/add",
    payload: quote
  }
}

// Reducer
const initialState = [];

export default function quotesReducer(state = initialState, action) {
  switch( action.type ) {
    case "quotes/add":
      return [...state, {
        id: uuid(),
        content: action.payload.content,
        author: action.payload.author,
        votes: 0
      }]
    
    default:
      return state;
  }
}
