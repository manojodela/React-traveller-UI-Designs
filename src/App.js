import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import 'antd/dist/antd.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Layout from './pages/Layout';
import Index from './pages/Index';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/footer' element={<Footer />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
