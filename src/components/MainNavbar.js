import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.svg';
import { Link } from "react-router-dom";
import { Dropdown, Space, } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const MainNavbar = () => {

    const items = [
        {
            label: (<a  rel="noopener noreferrer" href="/blog" className='d-link'>Blog Archive</a>),
            key: '0',
        },
        {
            label: (<a  rel="noopener noreferrer" href="/categories" className='d-link'>Categories</a>),
            key: '1',
        },
        {
            label: (<a  rel="noopener noreferrer" href="/" className='d-link'>Tags</a>),
            key: '3',
        },

    ];

    return (
        <Navbar expand="lg">
            <Container >
                <Navbar.Brand href="/">
                    <img src={logo} width="200" className="d-inline-block align-top" alt="React Bootstrap logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto bg-right">
                        <Link to='/' href="/" className='link'>Home</Link>
                        <Dropdown menu={{ items }}>
                            <Link onClick={(e) => e.preventDefault()} className='link'>
                                <Space>Blog<DownOutlined /></Space>
                            </Link>
                        </Dropdown>
                        <Link to="/about" className='link'>About</Link>
                        <Link to="/contact" className='link'>Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MainNavbar;