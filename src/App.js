import BookList from './components/BookList';
import NavBar from './components/NavBar';
import BookContextProvider from './contexts/BookContexts';

function App() {
  return (
    <BookContextProvider>
      <NavBar />
      <BookList />
    </BookContextProvider>
  );
}

export default App;
