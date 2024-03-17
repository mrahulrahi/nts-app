import './Property.css'
import Banner from '../components/Banner/Banner'
import TypeCard from '../components/TypeCard/TypeCard'
import PropertyCard from '../components/PropertyCard/PropertyCard'
import WorkCard from '../components/WorkCard/WorkCard'
import ServiceCard from '../components/ServiceCard/ServiceCard'
import FeatureCard from '../components/FeatureCard/FeatureCard'

const PropertyPage = () => {

    const workCards = [
        { imgUrl: "images/best-price.png", title: "Check Price", body: "Select your car & tell us about its current location, and our advanced AI tech will make the perfect price for you." },
        { imgUrl: "images/book-ride.png", title: "Book Ride", body: "Select your car & your pickup location then click on the book button, & our service expert will call you and send car to you." },
        { imgUrl: "/images/pickup.png", title: "Schedule Pickup", body: "Book a ride and schedule pickup from your home or work or anywhere with current loaction best suits your convenience." },
    ]

    const serviceCards = [
        { imgUrl: "images/house.png", title: "Rent House" },
        { imgUrl: "images/buy-house.png", title: "Buy House" },
        { imgUrl: "images/sell-house.png", title: "Sell House" },
        { imgUrl: "images/buy-plot.png", title: "Buy Plot" },
        { imgUrl: "images/sell-plot.png", title: "Sell Plot" },
    ]

    const featureCards = [
        { imgUrl: "images/whyus-1.png", title: "Reasonable Prices" },
        { imgUrl: "images/whyus-2.png", title: "Clean & Comfortable Cabs" },
        { imgUrl: "images/whyus-3.png", title: "Simple & Convenient Booking" },
        { imgUrl: "images/whyus-4.png", title: "Doorstep Pickup" },
        { imgUrl: "images/whyus-5.png", title: "Experienced & Polite Drivers" },
        { imgUrl: "images/whyus-6.png", title: "No Hidden Charges" },
    ]

    const typeCards = [
        { imgUrl: "images/house.png", title: "Rent House" },
        { imgUrl: "images/buy-house.png", title: "Buy House" },
        { imgUrl: "images/sell-house.png", title: "Sell House" },
        { imgUrl: "images/buy-plot.png", title: "Buy Plot" },
        { imgUrl: "images/sell-plot.png", title: "Sell Plot" },
    ]

    const propertyCards = [
        { imgUrl: ["images/house-img-1.jpg", "images/house-img-2.jpg", "images/house-img-3.jpg", "images/house-img-4.jpg", "images/house-img-5.jpg"], title: "Property 1", body: "One of the most vibrant cities you can visit - a trip no one should miss!", price: 40000 },
        { imgUrl: ["images/house-img-1.jpg", "images/house-img-2.jpg", "images/house-img-3.jpg", "images/house-img-4.jpg", "images/house-img-5.jpg"], title: "Property 2", body: "One of the most vibrant cities you can visit - a trip no one should miss!", price: 50000 },
        { imgUrl: ["images/house-img-1.jpg", "images/house-img-2.jpg", "images/house-img-3.jpg", "images/house-img-4.jpg", "images/house-img-5.jpg"], title: "Property 3", body: "One of the most vibrant cities you can visit - a trip no one should miss!", price: 60000 },
        { imgUrl: ["images/house-img-1.jpg", "images/house-img-2.jpg", "images/house-img-3.jpg", "images/house-img-4.jpg", "images/house-img-5.jpg"], title: "Property 4", body: "One of the most vibrant cities you can visit - a trip no one should miss!", price: 70000 },
        { imgUrl: ["images/house-img-1.jpg", "images/house-img-2.jpg", "images/house-img-3.jpg", "images/house-img-4.jpg", "images/house-img-5.jpg"], title: "Property 5", body: "One of the most vibrant cities you can visit - a trip no one should miss!", price: 80000 },
    ]

    return (
        <>
            <Banner heading="Property" subheading="Buy & Sell Property" />

            <div className="content-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading text-center">
                                <h3>Enquiry For Property</h3>
                            </div>
                            <div className="book-form-wrapper w-100">
                                <div className="form-control-row d-flex flex-wrap">
                                    <div className="form-control-col"><input type="text" className="form-control" placeholder="Full Name" name="" id="book_name" /></div>
                                    <div className="form-control-col"><input type="tel" className="form-control" placeholder="Phone No." name="" id="book_phone" /></div>
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

            <div className="content-container pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading text-center">
                                <h3>How We Work ?</h3>
                            </div>
                            <div className="work-card-list d-flex flex-wrap">
                                {workCards.map((card, index) => <div key={card.title} className="work-card-item">
                                    <WorkCard card={card} index={index} />
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

            <div className="content-container pt-0">
                <div className="container">
                    <div className="row">
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

            <div className="content-container pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading text-center">
                                <h3>Available Property</h3>
                            </div>

                            <div className="type-card-list-wrapper scrollbar-hidden">
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
                                {propertyCards.map((card) => <div key={card.title} className="property-card-item">
                                    <PropertyCard card={card} />
                                </div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PropertyPage