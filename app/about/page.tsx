import './About.css'
import Banner from '../components/Banner/Banner'
import AboutBlock from '../components/AboutBlock/AboutBlock'
import ImageTextBlock from '../components/ImageTextBlock/ImageTextBlock'
import TeamCard from '../components/TeamCard/TeamCard'

const AboutPage = () => {
    const TeamCards = [
        { imgUrl: "images/team-img-1.jpg", name: "Keith Marshall", jobPost: "Founder" },
        { imgUrl: "images/team-img-2.jpg", name: "George Williams", jobPost: "Developer" },
        { imgUrl: "images/team-img-3.jpg", name: "George Watson", jobPost: "Designer" },
    ]

    return (
        <>
            <Banner heading="About Us" subheading="Know Us" />

            <div className="content-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <AboutBlock />
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-container pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ImageTextBlock />
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="team-card-list d-flex flex-wrap">
                                {TeamCards.map(card => <div className="team-card-item">
                                    <TeamCard card={card} />
                                </div>)}

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AboutPage