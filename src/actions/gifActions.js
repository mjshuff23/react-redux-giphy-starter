// TODO: Import all of your importing your API util function
// TODO: Set and export a constant for your `RECEIVE_GIFS` action type
export const RECEIVE_GIFS = 'RECEIVE_GIFS';

// TODO: Write a function that returns your `action` object literal
const receiveGifts = gifs => (
  {
    type: RECEIVE_GIFS,
    gifs,
  }
);
// TODO: Write a thunk action creator
