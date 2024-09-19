import './TeamCard.css'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// Define an interface for the social media links
interface SocialLinks {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
}

interface CardProp {
    imgUrl: string;
    name: string;
    jobPost: string;
    Links?: SocialLinks;
}

interface Card {
    card: CardProp;
}

const TeamCard = ({ card }: Card) => {
    const { imgUrl, name, jobPost, Links } = card;

    return (
        <div className="team-card-box w-100 h-100 d-flex flex-column align-items-center">
            <div className="team-card-img rounded-circle overflow-hidden">
                <img src={imgUrl} alt={`${name} image`} />
            </div>
            <div className="team-card-text text-center">
                <h4>{name}</h4>
                <p>{jobPost}</p>
                {Links && Object.keys(Links).length > 0 && (
                    <ul className="team-card-social-row d-flex gap-3 align-items-center justify-content-center">
                        {Links.facebook && (
                            <a className="tc-social-icon" href={Links.facebook} target="_blank" rel="noopener noreferrer">
                                <FaFacebookF />
                            </a>
                        )}
                        {Links.twitter && (
                            <a className="tc-social-icon" href={Links.twitter} target="_blank" rel="noopener noreferrer">
                                <FaTwitter />
                            </a>
                        )}
                        {Links.instagram && (
                            <a className="tc-social-icon" href={Links.instagram} target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                        )}
                        {Links.linkedin && (
                            <a className="tc-social-icon" href={Links.linkedin} target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn />
                            </a>
                        )}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default TeamCard;
