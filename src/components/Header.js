
import React from 'react';
import {Link} from 'react-router'
class Header extends React.Component{

    render(){
        return (
            <div className="header">
                <Link className="home" to='/home'>Home</Link>
                <Link className="about" to='/about'>About</Link>
                <Link  to='/contact'>Contact</Link>
            </div>
        );
    }
}
export default Header