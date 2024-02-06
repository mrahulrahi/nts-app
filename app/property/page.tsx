import React from 'react'
import Banner from '../components/Banner/Banner'

const PropertyPage = () => {
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
        </>
    )
}

export default PropertyPage