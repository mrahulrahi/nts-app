import './Hero.css'

const Hero = () => {


    return (
        <>
            <div id="carousel" className="hero-container carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000">
                        <div className="hero-bg">
                            <img src="images/swiper-img-1.jpg" alt="" />
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="hero-content text-uppercase position-relative z-3">
                                        <h5>tells a story</h5>
                                        <h1>imagine</h1>
                                        <h3>group</h3>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <div className="hero-bg">
                            <img src="images/swiper-img-2.jpeg" alt="" />
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="hero-content text-uppercase position-relative z-3">
                                        <h5>tells a story</h5>
                                        <h1>book</h1>
                                        <h3>your car</h3>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <div className="hero-bg">
                            <img src="images/swiper-img-3.jpeg" alt="" />
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="hero-content text-uppercase position-relative z-3">
                                        <h5>tells a story</h5>
                                        <h1>travel</h1>
                                        <h3>with us</h3>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <div className="hero-bg">
                            <img src="images/swiper-img-4.jpeg" alt="" />
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="hero-content text-uppercase position-relative z-3">
                                        <h5>tells a story</h5>
                                        <h1>invest</h1>
                                        <h3>in property</h3>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <div className="hero-bg">
                            <img src="images/swiper-img-5.jpeg" alt="" />
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="hero-content text-uppercase position-relative z-3">
                                        <h5>tells a story</h5>
                                        <h1>buy</h1>
                                        <h3>your dream house</h3>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    </div>
                    <div className="hero-bottom d-none d-lg-flex gap-4">
                        <button className="hero-btn hero-btn-next" type="button" data-bs-target="#carousel" data-bs-slide="next"><span>Next&gt;</span></button>
                        <button className="hero-btn hero-btn-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev"><span>&lt;Previous</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero