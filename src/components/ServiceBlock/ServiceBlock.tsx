import Image from 'next/image';
import './ServiceBlock.css'

interface Block {
    block: BlockProp;
}

interface BlockProp {
    imgUrl: string;
    title: string;
    subTitle: string;
    body: string;
    pageLink: string;
}

const ServiceBlock = ({ block }: Block) => {
    const { imgUrl, title, subTitle, body, pageLink } = block;

    return (
        <>
            <div className="service-box d-flex flex-wrap justify-content-between align-items-center">
                <div className="service-img overflow-hidden">
                    <Image src={imgUrl} alt={`${title} image`} width={4000} height={4000} quality={100} />
                </div>
                <div className="service-content">
                    <h4>{title}</h4>
                    <h5>{subTitle}</h5>
                    <p>{body}</p>
                    <a href={pageLink} className="btn btn-light">Open</a>
                </div>
            </div>
        </>
    )
}

export default ServiceBlock