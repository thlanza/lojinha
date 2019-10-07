import React from 'react'
import './homepage.styles.scss';

const HomePage = () => (
    <div className="homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">CHAPÉUS</h1>
                    <span className="subtitle">SHOP NOW></span>
                </div>
            </div>

            <div className="menu-item">
                <div className="content">
                    <h1 className="title">JAQUETAS</h1>
                    <span className="subtitle">SHOP NOW></span>
                </div>
            </div>

            <div className="menu-item">
                <div className="content">
                    <h1 className="title">SNEAKERS</h1>
                    <span className="subtitle">SHOP NOW></span>
                </div>
            </div>

            <div className="menu-item">
                <div className="content">
                    <h1 className="title">HOMEM</h1>
                    <span className="subtitle">SHOP NOW></span>
                </div>
            </div>

            <div className="menu-item">
                <div className="content">
                    <h1 className="title">MULHER</h1>
                    <span className="subtitle">SHOP NOW></span>
                </div>
            </div>
        </div>
    </div>
)

export default HomePage;