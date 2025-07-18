import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Listing from './pages/Listing';
import BlogPostPage from './pages/BlogPost';
import ProfilePage from './pages/ProfilePage';
import BlogEditor from './pages/BlogEditor';
import SearchResults from './pages/SearchResult';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/list' element={<Listing />} />
        <Route path='/blogpost' element={<BlogPostPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/blogeditor' element={<BlogEditor />} />
        <Route path='/searchresult' element={<SearchResults />} />
      </Routes>
    </Router>
  );
}
export default App;