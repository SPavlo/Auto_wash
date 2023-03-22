import React from 'react';
import '../styles/Header.css'
const Header = () => {
    return (
        <header>
            <div className="logo">
                Auto Wash
            </div>
            <div>
                Ви увійшли як
                <button>
                    yaroslav@9134.com
                </button>
            </div>
        </header>
    );
};

export default Header;