import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.svg';
import { Link, useLocation } from "react-router-dom";
import { Dropdown, Space, } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useState } from 'react';

const MainNavbar = () => {
    const [show, setShow] = useState('');
    const [collapse, setCollapse] = useState('collapsed');

    const onCollapse = () => {
        if (collapse === '') {
            setCollapse('collapsed')
            setShow('');
        } else {
            setCollapse('');
            setShow('show');
        }
    }

    const showHandler = () => {
        setShow('');
        setCollapse('collapsed');
    }

    const items = [
        {
            label: (<Link to='/blog' href="/blog" className='link' onClick={showHandler}>Blog Archive</Link>),
            key: '0',
        },
        {
            label: (<Link to='/categories' href="/categories" className='link' onClick={showHandler}>Categories</Link>),
            key: '1',
        },

    ];


    return (
        <Navbar collapseOnSelect expand="lg">
            <Container >
                <Navbar.Brand href="/">
                    <img src={logo} width="200" className="d-inline-block align-top" alt="React Bootstrap logo" />
                </Navbar.Brand>
                <button aria-controls="basic-navbar-nav" type="button" aria-label="Toggle navigation" class={`navbar-toggler ${collapse}`}
                    onClick={onCollapse}> <span class="navbar-toggler-icon"></span>
                </button>
                <div className={`navbar-collapse collapse ${show}`} id="basic-navbar-nav">
                    <Nav className="ms-auto bg-right">
                        <Link to='/' className='link' onClick={showHandler}>Home</Link>
                        <Dropdown menu={{ items }}>
                            <Link onClick={(e) => { e.preventDefault(); }} className='link'>
                                <Space>Blog<DownOutlined /></Space>
                            </Link>
                        </Dropdown>
                        <Link to="/about" className='link ' onClick={showHandler}>About</Link>
                        <Link to="/contact" className='link ' onClick={showHandler}>Contact</Link>
                    </Nav>
                </div>
            </Container>
            <button
                type="button"
                className="btn btn-danger btn-floating btn-lg"
                id="btn-back-to-top"
                onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); console.log("hi"); }}>
                <i class="bi bi-arrow-up-circle-fill"></i>
            </button>
        </Navbar>
    );
}

export default MainNavbar;