import * as React from 'react';
import './Footer.scss';
import { FaCommentDots, FaHeart, FaRetweet } from 'react-icons/fa'

interface Props{
    replyCount: number;
    favoriteCount: number;
    shareCount: number;
}

const Footer:React.FC<Props> = ({ replyCount, favoriteCount, shareCount }) => {
    return (
        <div className='footer__container'>
            <span className='footer__replies'><FaCommentDots />{replyCount}</span>
            <span className='footer__favorites'><FaHeart />{favoriteCount}</span>
            <span className='footer__shares'><FaRetweet />{shareCount}</span>
        </div>
    );
}

Footer.displayName = 'Footer';
Footer.defaultProps = {};

export default Footer;
