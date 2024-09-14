import './Properties.css'
import Banner from '../components/Banner/Banner'
import TypeCard from '../components/TypeCard/TypeCard'
import PropertyCard from '../components/PropertyCard/PropertyCard'
import ServiceCard from '../components/ServiceCard/ServiceCard'
import FeatureCard from '../components/FeatureCard/FeatureCard'
import type { Metadata } from "next";
import ImageTextBlock from '../components/ImageTextBlock/ImageTextBlock'
import CTABlock from '../components/CTABlock/CTABlock'

export const metadata: Metadata = {
    title: "IG - Properties",
    description: "More about properties",
};

const PropertiesPage = () => {

    const serviceCards = [
        { imgUrl: "images/house.png", title: "Rent House" },
        { imgUrl: "images/buy-house.png", title: "Buy House" },
        { imgUrl: "images/sell-house.png", title: "Sell House" },
        { imgUrl: "images/buy-plot.png", title: "Buy Plot" },
        { imgUrl: "images/sell-plot.png", title: "Sell Plot" },
        { imgUrl: "images/house.png", title: "Rent Commercial" },
    ]

    const featureCards = [
        { imgUrl: "images/whyus-1.png", title: "Reasonable Prices" },
        { imgUrl: "images/whyus-2.png", title: "Easy loans on property" },
        { imgUrl: "images/whyus-3.png", title: "Simple & Convenient Booking" },
        { imgUrl: "images/whyus-4.png", title: "Visit Pickup" },
        { imgUrl: "images/whyus-5.png", title: "Experienced & Polite Client" },
        { imgUrl: "images/whyus-6.png", title: "No Hidden Charges" },
    ]

    const typeCards = [
        { imgUrl: "images/house.png", title: "Villa" },
        { imgUrl: "images/buy-house.png", title: "Commercial" },
        { imgUrl: "images/sell-house.png", title: "House" },
        { imgUrl: "images/buy-plot.png", title: "Flat" },
        { imgUrl: "images/sell-plot.png", title: "Plot" },
    ]

    const propertyCards = [
        { imgUrl: ["images/house-img-1.jpg", "images/house-img-2.jpg", "images/house-img-3.jpg", "images/house-img-4.jpg", "images/house-img-5.jpg"], title: "Property 1", body: "One of the most vibrant cities you can visit - a trip no one should miss!", price: 60000 },
        { imgUrl: ["images/house-img-1.jpg", "images/house-img-2.jpg", "images/house-img-3.jpg", "images/house-img-4.jpg", "images/house-img-5.jpg"], title: "Property 2", body: "One of the most vibrant cities you can visit - a trip no one should miss!", price: 70000 },
        { imgUrl: ["images/house-img-1.jpg", "images/house-img-2.jpg", "images/house-img-3.jpg", "images/house-img-4.jpg", "images/house-img-5.jpg"], title: "Property 3", body: "One of the most vibrant cities you can visit - a trip no one should miss!", price: 80000 },
        { imgUrl: ["images/house-img-1.jpg", "images/house-img-2.jpg", "images/house-img-3.jpg", "images/house-img-4.jpg", "images/house-img-5.jpg"], title: "Property 4", body: "One of the most vibrant cities you can visit - a trip no one should miss!", price: 90000 },
    ]

    const ctaData = {
        cardBG: "dark-grey",
        cardHeading: "Book on Call / Whatsapp",
        cardPara: "Discover seamless travel with our tour and travel services, offering a range of comfortable vehicles to suit your journey. Whether it's a local rental, airport transfer, or an outstation trip, we provide reliable and affordable solutions for all your travel needs. Book now and experience a hassle-free ride with professional drivers and 24/7 support!",
        cardFirstHeading: "Book on call",
        cardFirstPara: "Our advisors are just a phone call away. On average, we answer calls <strong>within 90 seconds.</strong> Lines open 24/7.",
        cardFirstLink: "+91 8881 888339",
        cardFirstUrl: "tel:+918881888339",
        cardSecondHeading: "Book on whatsapp",
        cardSecondPara: "Book your ride easily on WhatsApp! Just send us your details, and we'll arrange your vehicle in no time. Fast, simple, and convenient – your next journey is just a message away!",
        cardSecondLink: "Start chat",
        cardSecondUrl: "https://api.whatsapp.com/send/?phone=%2B918881888339&text&type=phone_number&app_absent=0",
    };

    return (
        <>
            <Banner heading="Properties" subheading="Buy & Sell Properties" />

            <div className="content-container py-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <div className="book-form-wrapper w-100" data-aos="fade-up">
                                <div className="form-control-row d-flex flex-wrap">
                                    <div className="form-control-col"><input type="text" className="form-control" placeholder="Property Location" name="" id="book_pickup" /></div>
                                    <div className="form-control-col"><input type="date" className="form-control" placeholder="Visit Date" name="" id="book_datetime" /></div>
                                    <div className="form-control-col">
                                        <select className="form-select" id="book_cartype">
                                            <option selected>Select Property type</option>
                                            <option value="Luxury">Home</option>
                                            <option value="MPV">Commerical</option>
                                            <option value="SUV">Rent</option>
                                            <option value="Sedan">Sedan</option>
                                            <option value="Hatchback">Hatchback</option>
                                        </select>
                                    </div>
                                    <div className="form-control-col"> <button className="btn btn-default" type="button">Book Now</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="content-container bg-pattern-light">
                <div className="container">
                    <div className="row" data-aos="fade-up">
                        <div className="col-md-12">
                            <div className="heading text-center">
                                <h3>Available Property</h3>
                            </div>

                            <div className="type-card-list-wrapper scrollbar-hidden" data-aos="fade-up">
                                <div className="type-card-list d-flex flex-wrap justify-content-center">
                                    <div className="type-card-item">
                                        <div className="type-card-box w-100 h-100 d-flex align-items-center justify-content-center">
                                            <div className="type-card-title text-uppercase">Property Type</div>
                                        </div>
                                    </div>
                                    {typeCards.map((card) => <div key={card.title} className="type-card-item">
                                        <TypeCard card={card} />
                                    </div>)}
                                </div>
                            </div>

                            <div className="property-card-list d-flex flex-wrap mt-5">
                                {propertyCards.map((card) => <div key={card.title} className="property-card-item" data-aos="fade-up">
                                    <PropertyCard card={card} />
                                </div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-container bg-pattern-dark">
                <div className="container">
                    <div className="row" data-aos="fade-up">
                        <div className="col-md-12">
                            <ImageTextBlock imgUrl='images/service-img-2.jpg'>
                                <h4>Property</h4>
                                <h5>Buy & Sell Property</h5>
                                <p>Find your ideal property with ease through Imagine Group. Our expert team offers a curated selection of homes and investment opportunities, guiding you to make informed decisions and secure the perfect space for your needs.</p>
                            </ImageTextBlock>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-container bg-pattern-light">
                <div className="container">
                    <div className="row" data-aos="fade-up">
                        <div className="col-md-12">
                            <div className="heading text-center">
                                <h3>Why Us ?</h3>
                            </div>
                            <div className="feature-card-list d-flex flex-wrap">
                                {featureCards.map((card) => <div key={card.title} className="feature-card-item">
                                    <FeatureCard card={card} />
                                </div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-container bg-pattern-dark">
                <div className="container">
                    <div className="row" data-aos="fade-up">
                        <div className="col-md-12">
                            <div className="heading text-center">
                                <h3>Our Services</h3>
                            </div>
                            <div className="service-card-list d-flex flex-wrap">
                                {serviceCards.map((card) => <div key={card.title} className="service-card-item">
                                    <ServiceCard card={card} />
                                </div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-container full-width-cta-container bg-pattern-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <CTABlock card={ctaData} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PropertiesPage