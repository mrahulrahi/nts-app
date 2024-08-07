import './About.css'
import Banner from '../components/Banner/Banner'
import ImageTextBlock from '../components/ImageTextBlock/ImageTextBlock'
import TeamCard from '../components/TeamCard/TeamCard'
import TextCard from '../components/TextCard/TextCard'
import CareerForm from '../components/CareerForm/CareerForm'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IG - About",
  description: "About the company",
};


const AboutPage = () => {
    const teamCards = [
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
                            <ImageTextBlock imgUrl='images/our-story-img.jpg'>
                                <h4>Our Story</h4>
                                <h5>Welcome to RahiCreations<br />Glad to have you here!<br />We’re keen to tell you image-text us.</h5>
                                <p>The website which you’re looking at right now was established in November 2019. With more than five years development experience, we here at Rahi Creations are whizz at Graphics Designing , Web Designing , App Designing And Photography that provide excellent user experience and are quite easy to manage. We are obsessed with web-app development and committed to our work. Moreover, Our vision is to deliver best in className stuff that you’re looking for and we do assure you of providing best service out-there.</p>
                            </ImageTextBlock>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-container pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading text-center">
                                <h3>Mission & Vision</h3>
                            </div>
                            <TextCard />
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-container pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading text-center">
                                <h3>Our Team</h3>
                            </div>
                            <div className="team-card-list d-flex flex-wrap">
                                {teamCards.map((card) => <div key={card.name} className="team-card-item">
                                    <TeamCard card={card} />
                                </div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-container pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading text-center">
                                <h3>Careers</h3>
                            </div>

                            <CareerForm />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AboutPage
