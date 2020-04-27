import React from 'react'
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component'

const HomePage = ({history}) => (
    <div className="homepage">
        <Directory />
        <p></p>
    </div>
)

export default HomePage;
