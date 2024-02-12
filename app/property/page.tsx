import './Property.css'
import Banner from '../components/Banner/Banner'
import TypeCard from '../components/TypeCard/TypeCard'
import PropertyCard from '../components/PropertyCard/PropertyCard'

const PropertyPage = () => {
    const typeCards = [
        { imgUrl: "images/house.png", title: "Rent House" },
        { imgUrl: "images/buy-house.png", title: "Buy House" },
        { imgUrl: "images/sell-house.png", title: "Sell House" },
        { imgUrl: "images/buy-plot.png", title: "Buy Plot" },
        { imgUrl: "images/sell-plot.png", title: "Sell Plot" },
    ]

    const propertyCards = [
        { imgUrl: "images/house-img-1.jpg", title: "Property 1", body: "One of the most vibrant cities you can visit - a trip no one should miss!", price: 400 },
        { imgUrl: "images/house-img-2.jpg", title: "Property 2", body: "One of the most vibrant cities you can visit - a trip no one should miss!", price: 500 },
        { imgUrl: "images/house-img-3.jpg", title: "Property 3", body: "One of the most vibrant cities you can visit - a trip no one should miss!", price: 600 },
        { imgUrl: "images/house-img-4.jpg", title: "Property 4", body: "One of the most vibrant cities you can visit - a trip no one should miss!", price: 700 },
        { imgUrl: "images/house-img-5.jpg", title: "Property 5", body: "One of the most vibrant cities you can visit - a trip no one should miss!", price: 800 },
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
                                <h3>Available Property</h3>
                            </div>

                            <div className="type-card-list-wrapper scrollbar-hidden">
                                <div className="type-card-list d-flex flex-wrap justify-content-center">
                                    <div className="type-card-item">
                                        <div className="type-card-box w-100 h-100 d-flex align-items-center justify-content-center">
                                            <div className="type-card-title text-uppercase">Property Type</div>
                                        </div>
                                    </div>
                                    {typeCards.map((card, index) => <div key={index} className="type-card-item">
                                        <TypeCard card={card} />
                                    </div>)}
                                </div>
                            </div>

                            <div className="property-card-list d-flex flex-wrap mt-5">
                                {propertyCards.map((card, index) => <div key={index} className="property-card-item">
                                    <PropertyCard card={card} index={index} />
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