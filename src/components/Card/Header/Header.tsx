import * as React from 'react';
import './Header.scss';

interface Props{
    userId: string;
    userTag: string;
    date: Date;
}

const Header:React.FC<Props> = ({ userId, userTag, date }) => {
    return (
        <div className='header__container'>
            <span className='header__user-tag'><strong>{userTag}</strong></span>
            <span className='header__user-id'>{userId}</span>
            <span className='header__date'>{date.toDateString()}</span>
        </div>
    );
}

Header.displayName = 'Header';
Header.defaultProps = {};

export default Header;
