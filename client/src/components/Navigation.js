import React from 'react';
import '../styles/Navigation.css'
import Nav from 'react-bootstrap/Nav';
const Navigation = () => {
    return (
        <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            <Nav.Item>
                <Nav.Link href="/home">Запити та потреби</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Звіти</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Статистика</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" >
                    Статус Автомийок
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default Navigation;