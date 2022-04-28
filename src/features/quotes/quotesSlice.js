import { v4 as uuid } from "uuid";

// Action Creators
// TODO: Create action creators as defined in tests

export const addQuote = (quote) => {
  return {
    type: "quotes/add",
    payload: quote
  }
}

export const removeQuote = (quoteId) => {
  return {
    type: "quotes/remove",
    payload: quoteId
  }
}

export const upvoteQuote = (quoteId) => {
  return {
    type: "quotes/upvote",
    payload: quoteId
  }
}

export const downvoteQuote = (quoteId) => {
  return {
    type: "quotes/downvote",
    payload: quoteId,
  };
};

// Reducer
const initialState = [];

export default function quotesReducer(state = initialState, action) {
  let updatedArray;
  
  switch( action.type ) {
    case "quotes/add":
      return [...state, {
        id: uuid(),
        content: action.payload.content,
        author: action.payload.author,
        votes: 0
      }]
    
    case "quotes/remove":
      return state.filter(quote => quote.id !== action.payload)

    case "quotes/upvote":
      // let updatedQuote = state.find(quote => quote.id === action.payload)
      // const currentVotes = updatedQuote.votes
      // const newVotes = currentVotes + 1
      // updatedQuote = {...updatedQuote, votes: newVotes}
      // const updatedArray = state.map(quote => {
      //   if (quote.id === updatedQuote.id) {
      //     return updatedQuote
      //   }
      //   else {
      //     return quote
      //   }
      // })
      // return updatedArray;
      updatedArray = state.map(quote => {
        if (quote.id === action.payload) {
          return {...quote, votes: ++quote.votes}
        }
        else {
          return quote;
        }
      })
      return updatedArray

    case "quotes/downvote":
      // let updatedQuoteDown = state.find(quote => quote.id === action.payload)
      // let currentVotesDown = updatedQuoteDown.votes
      // if (currentVotesDown > 0) {
      //     currentVotesDown = currentVotesDown - 1
      // }
      // updatedQuoteDown = {...updatedQuoteDown, votes: currentVotesDown}
      // const updatedArrayDown = state.map(quote => {
      //   if (quote.id === updatedQuoteDown.id) {
      //     return updatedQuoteDown
      //   }
      //   else {
      //     return quote
      //   }
      // })
      // return updatedArrayDown;
      updatedArray = state.map(quote => {
        if (quote.id === action.payload && quote.votes > 0) {
          return {...quote, votes: --quote.votes}
        }
        else {
          return quote;
        }
      })
      return updatedArray

    default:
      return state;
  }
}
