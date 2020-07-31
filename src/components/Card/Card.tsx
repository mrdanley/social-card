import React from 'react';
import './Card.scss';
import { CardData } from '../../types/CardData';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';

interface Prop {
    userData: CardData;
}

const Card: React.FC<Prop> = ({ userData }) => {
    const { userId, userTag, date, message, replyCount, favoriteCount, shareCount } = userData;

    return (
        <div className="card__container">
            <Header userId={userId} userTag={userTag} date={date} />
            <img src={`https://picsum.photos/${(Math.random() * 1000).toFixed()}`} alt="Something random" width={'100%'} />
            <Body message={message} />
            <Footer replyCount={replyCount} favoriteCount={favoriteCount} shareCount={shareCount} />
        </div>
    );
};

Card.defaultProps = {};
Card.displayName = 'Card';

export default Card;
