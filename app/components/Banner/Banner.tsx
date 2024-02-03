import './Banner.css'

const Banner = () => {

    return (
        <>
            <div className="banner-container position-relative" >
                <div className="banner-bg"><img src="images/swiper-img-1.jpg" alt="banner bg" /></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="banner-content position-relative z-3">
                                <h1>Tour & Travel</h1>
                                <h3>Book Your Car</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner