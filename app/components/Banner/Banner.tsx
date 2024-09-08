import './Banner.css'

interface Banner{
    heading: string;
    subheading: string;
}

const Banner = ({heading, subheading} : Banner) => {

    return (
        <>
            <div className="banner-container position-relative" >
                <div className="banner-bg"><img src="images/swiper-img-1.jpg" alt="banner bg" /></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="banner-content position-relative z-3" data-aos="fade-up">
                                <h1>{heading}</h1>
                                <h3>{subheading}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner