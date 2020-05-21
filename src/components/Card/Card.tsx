import React from "react";
import "./Card.scss";

interface Prop {}

const Card: React.FC<Prop> = () => {
  return (
    <div className="card__container">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
      perferendis ex laboriosam numquam nisi, exercitationem laudantium voluptas
      pariatur at animi voluptates officia officiis, repudiandae quae facilis in
      nemo, alias eius.
    </div>
  );
};

Card.defaultProps = {};
Card.displayName = "Card";

export default Card;
