import Image from 'next/image';
import './Banner.css'
import { Children } from 'react';

interface Banner {
    heading: string;
    subheading: string;
    children?: React.ReactNode;
}

const Banner = ({ heading, subheading, children }: Banner) => {

    return (
        <>
            <div className="banner-container position-relative" >
                <div className="banner-bg"><Image src="/images/swiper-img-1.jpg" alt="banner bg" width={4000} height={4000} quality={100} /></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="banner-content position-relative z-3" data-aos="fade-up">
                                <h1>{heading}</h1>
                                <h3>{subheading}</h3>
                            </div>

                        </div>
                    </div>
                    {children &&
                        <div className="row position-relative z-3">
                            <div className="col-md-10 mx-auto">
                                {children}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Banner