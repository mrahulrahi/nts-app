import './TeamCard.css'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

interface Card {
    card : CardProp;
}

interface CardProp{
    imgUrl: string;
    name : string;
    jobPost: string;
}

const TeamCard = ({card} : Card) => {
    const {imgUrl, name, jobPost} = card;
    return (
        <div className="team-card-box w-100 h-100 d-flex flex-column align-items-center">
            <div className="team-card-img rounded-circle overflow-hidden"><img src={imgUrl} alt={`${name} image`} /></div>
            <div className="team-card-text text-center">
                <h4>{name}</h4>
                <p>{jobPost}</p>
                <ul className="team-card-social-row d-flex gap-3 align-items-center justify-content-center">
                    <a className="tc-social-icon" href="#!"><FaFacebook /></a>
                    <a className="tc-social-icon" href="#!"><FaTwitter /></a>
                    <a className="tc-social-icon" href="#!"><FaInstagram /></a>
                    <a className="tc-social-icon" href="#!"><FaLinkedinIn /></a>
                </ul>
            </div>
        </div>
    )
}

export default TeamCard