/**
 * Contains the card component, used to display items
 */

import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Card = (props) => {
    const { name, imgSrc, imgAlt, description, footerContent } = props;

    return (
        <article className="card">
            <div className="image-container">
                <img className="card-img" src={imgSrc} alt={imgAlt} />
            </div>
            <div className="item-name">{name}</div>
            <div className="description">{description}</div>
            <div className="card-footer">
                <a href={footerContent} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="1x" /> Repository
                </a>
            </div>
        </article>
    );
};

export default Card;
