import React from 'react';
import '../styles/Navigation.css'
const Navigation = () => {
    return (
        <div>
            <ul className='navigation'>
                <li><a href="#">Запити та потреби</a></li>
                <li><a href="#">Звіти</a></li>
                <li><a href="#">Статистика</a></li>
                <li><a href="#">Статус автомийок</a></li>
            </ul>
        </div>
    );
};

export default Navigation;