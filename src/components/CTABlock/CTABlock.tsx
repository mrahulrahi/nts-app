import React from 'react';
import Image from 'next/image';
import './CTABlock.css';

interface CTABlockProps {
    card: {
        cardBG: string;
        cardHeading: string;
        cardPara: string;
        cardFirstHeading: string;
        cardFirstPara: string;
        cardFirstLink: string;
        cardFirstUrl: string;
        cardSecondHeading: string;
        cardSecondPara: string;
        cardSecondLink: string;
        cardSecondUrl: string;
    };
}

const CTABlock: React.FC<CTABlockProps> = ({ card }) => {
    const {
        cardBG,
        cardHeading,
        cardPara,
        cardFirstHeading,
        cardFirstPara,
        cardFirstLink,
        cardFirstUrl,
        cardSecondHeading,
        cardSecondPara,
        cardSecondLink,
        cardSecondUrl,
    } = card;

    const getBackgroundClass = (bg: string) => `bg-${bg} p-5 rounded-5`;

    return (
        <div className={getBackgroundClass(cardBG)}>
            <div className="row">
                <div className="col-lg-12">
                    <div className="heading d-flex flex-column">
                        <h3>{cardHeading}</h3>
                        <p className="mt-4">{cardPara}</p>
                    </div>
                    <div className="row justify-content-lg-center fw-cta-list">
                        {/* First CTA Block */}
                        <div className="col-lg-6 fw-cta-item">
                            <div className="full-width-cta-box w-100 h-100 d-flex">
                                <div className="full-width-cta-icon has-img-contain d-none d-md-block">
                                    <Image src="/images/cta-icon-1.svg" alt="First Icon" fill />
                                </div>
                                <div className="full-width-cta-content d-flex flex-column flex-grow-1">
                                    <div className="fwc-icon-label d-flex align-items-center">
                                        <div className="full-width-cta-icon has-img-contain d-md-none">
                                            <Image src="/images/cta-icon-1.svg" alt="First Icon" fill />
                                        </div>
                                        <h3>{cardFirstHeading}</h3>
                                    </div>
                                    <p>{cardFirstPara}</p>
                                    <div className="full-width-cta-link mt-auto d-none d-lg-block">
                                        Call: <a href={cardFirstUrl} className="ms-2">{cardFirstLink}</a>
                                    </div>
                                    <a href={cardFirstUrl} className="btn btn-default mt-auto d-lg-none">{cardFirstLink}</a>
                                </div>
                            </div>
                        </div>
                        
                        {/* Second CTA Block */}
                        <div className="col-lg-6 fw-cta-item">
                            <div className="full-width-cta-box w-100 h-100 d-flex">
                                <div className="full-width-cta-icon has-img-contain d-none d-md-block">
                                    <Image src="/images/cta-icon-2.svg" alt="Second Icon" fill />
                                </div>
                                <div className="full-width-cta-content d-flex flex-column flex-grow-1">
                                    <div className="fwc-icon-label d-flex align-items-center">
                                        <div className="full-width-cta-icon has-img-contain d-md-none">
                                            <Image src="/images/cta-icon-2.svg" alt="Second Icon" fill />
                                        </div>
                                        <h3>{cardSecondHeading}</h3>
                                    </div>
                                    <p>{cardSecondPara}</p>
                                    <a href={cardSecondUrl} className="btn btn-default mt-auto btn-block">
                                        {cardSecondLink}
                                        <span className="btn-icon">
                                            <i className="fa-solid fa-chevron-right"></i>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTABlock;
