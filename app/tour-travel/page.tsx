import './TourTravel.css'
import Banner from '../components/Banner/Banner'
import PlaceCard from '../components/PlaceCard/PlaceCard'

const TourTravelPage = () => {
    const placeCards = [
        { imgUrl: "images/new-york.jpg", title: "New York", body: "One of the most vibrant cities you can visit - a trip no one should miss!", price: 5.0 },
        { imgUrl: "images/kuala-lumpur.jpg", title: "Kuala Lumpur", body: "One of the most vibrant cities you can visit - a trip no one should miss!", price: 4.5 },
        { imgUrl: "images/hong-kong.jpg", title: "Hong Kong", body: "One of the most vibrant cities you can visit - a trip no one should miss!", price: 5.5 },
        { imgUrl: "images/singapore.jpg", title: "Singapore", body: "One of the most vibrant cities you can visit - a trip no one should miss!", price: 6.0 },
        { imgUrl: "images/mumbai.jpg", title: "Mumbai", body: "One of the most vibrant cities you can visit - a trip no one should miss!", price: 6.5 },
    ]

    return (
        <>
            <Banner heading="Tour & Travel" subheading="Plan Your Holiday" />

            <div className="content-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading text-center">
                                <h3>Find your next trip</h3>
                            </div>
                            <div className="book-form-wrapper w-100">
                                <div className="form-control-row d-flex flex-wrap">
                                    <div className="form-control-col"><input type="text" className="form-control" placeholder="Where are you going?" id="location" /></div>
                                    <div className="form-control-col"><input type="text" className="form-control" placeholder="Adult" id="adult" /></div>
                                    <div className="form-control-col"><input type="text" className="form-control" placeholder="Children" id="children" /></div>
                                    <div className="form-control-col"><input type="date" className="form-control" placeholder="Visit Date" id="date" /></div>
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
                                <h3>Popular Destinations</h3>
                                <h2 id="menu-categories-title" className="text-center">Cafe Menu</h2>
                            </div>

                            <div className="place-card-list d-flex flex-wrap">
                                {placeCards.map((card , index) => <div key={index} className="place-card-item">
                                    <PlaceCard card={card} index={index} />
                                </div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TourTravelPage