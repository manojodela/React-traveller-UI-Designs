import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'antd/dist/antd.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Layout from './pages/Layout';
import Index from './pages/Index';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/blog' element={<Blog />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
