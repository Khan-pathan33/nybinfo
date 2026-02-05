import React, { useState } from 'react';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';

// ---------------- Redux Slice ----------------
const movieSlice = createSlice({
  name: 'movies',
  initialState: { watchlist: [] },
  reducers: {
    addMovie: (state, action) => {
      state.watchlist.push({ id: Date.now(), title: action.payload, watched: false });
    },
    removeMovie: (state, action) => {
      state.watchlist = state.watchlist.filter(movie => movie.id !== action.payload);
    },
    toggleWatched: (state, action) => {
      const movie = state.watchlist.find(m => m.id === action.payload);
      if (movie) movie.watched = !movie.watched;
    },
  },
});

const { addMovie, removeMovie, toggleWatched } = movieSlice.actions;

// ---------------- Redux Store ----------------
const store = configureStore({
  reducer: { movies: movieSlice.reducer },
});

// ---------------- Components ----------------
function MovieList() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim() !== '') {
      dispatch(addMovie(input));
      setInput('');
    }
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-2">Add Movie</h2>
      <div className="flex gap-2">
        <input
          className="border rounded px-2 py-1 flex-1"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Movie name"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>
    </div>
  );
}

function Watchlist() {
  const watchlist = useSelector(state => state.movies.watchlist);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">My Watchlist</h2>
      <ul className="space-y-2">
        {watchlist.map(movie => (
          <li
            key={movie.id}
            className={`flex justify-between items-center p-2 border rounded ${
              movie.watched ? 'bg-green-100 line-through' : 'bg-gray-100'
            }`}
          >
            {movie.title}
            <div className="flex gap-2">
              <button
                onClick={() => dispatch(toggleWatched(movie.id))}
                className={`px-2 py-1 rounded text-white ${
                  movie.watched ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-green-500 hover:bg-green-600'
                }`}
              >
                {movie.watched ? 'Unwatch' : 'Watched'}
              </button>
              <button
                onClick={() => dispatch(removeMovie(movie.id))}
                className="px-2 py-1 bg-red-500 hover:bg-red-600 text-white rounded"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ---------------- App ----------------
function App() {
  return (
    <Provider store={store}>
      <div className="max-w-xl mx-auto p-6 font-sans">
        <h1 className="text-3xl font-bold mb-6 text-center">🎬 Movie Watchlist Tracker</h1>
        <MovieList />
        <Watchlist />
      </div>
    </Provider>
  );
}

export default App;
