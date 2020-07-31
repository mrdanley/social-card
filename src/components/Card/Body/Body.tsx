import * as React from 'react';
import './Body.scss';

interface Props {
    message: string;
}

const Body: React.FC<Props> = ({ message }) => {
    return (
        <div className="body__container">
            <p className="body__message">{message}</p>
        </div>
    );
};

Body.displayName = 'Body';
Body.defaultProps = {};

export default Body;
