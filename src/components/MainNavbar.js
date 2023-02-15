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
            label: (<a target="_blank" rel="noopener noreferrer" href="/">Blog Archive</a>),
            key: '0',
        },
        {
            label: (<a target="_blank" rel="noopener noreferrer" href="/">Categories</a>),
            key: '1',
        },
        {
            label: (<a target="_blank" rel="noopener noreferrer" href="/">Tags</a>),
            key: '3',
        },

    ];

    return (
        <Navbar expand="lg">
            <Container >
                <Navbar.Brand href="#home">
                    <img src={logo} width="200" className="d-inline-block align-top" alt="React Bootstrap logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto bg-right">
                        <Link to='#' href="#home" className='link'>Home</Link>
                        <Dropdown menu={{ items }}>
                            <Link onClick={(e) => e.preventDefault()} className='link'>
                                <Space>Blog<DownOutlined /></Space>
                            </Link>
                        </Dropdown>
                        <Link to="#" className='link'>About</Link>
                        <Link to="#" className='link'>Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MainNavbar;