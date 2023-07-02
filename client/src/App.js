import './App.css';
import Post from "./Post";
import Header from "./Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { UserContextProvider } from "./UserContext";
import CreatePost from "./pages/CreatePost";
import PostPage from "./pages/PostPage";
import EditPost from "./pages/EditPost";
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <UserContextProvider>
      <ErrorBoundary>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<IndexPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/create" element={<CreatePost />} />
              <Route path="/post/:id" element={<PostPage />} />
              <Route path="/edit/:id" element={<EditPost />} />
            </Route>
          </Routes>
        </Router>
      </ErrorBoundary>
    </UserContextProvider>
  );
}

export default App;
