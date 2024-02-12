import './ImageTextBlock.css'

const ImageTextBlock = () => {
    return (
        <div className="image-text-block d-flex flex-wrap gap-5">
            <div className="image-text-row">
                <div className="image-text-box d-flex flex-wrap justify-content-between align-items-center">
                    <div className="image-text-img overflow-hidden">
                        <img src="images/image-text-img.jpg" alt="image text image" />
                    </div>
                    <div className="image-text-content">
                        <h4>Our Mission</h4>
                        <h5>Lorem ipsum dolor</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nihil non rem facilis ipsa soluta!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fuga animi iusto reprehenderit magni tempora!</p>
                    </div>
                </div>
            </div>

            <div className="image-text-row">
                <div
                    className="image-text-box d-flex flex-wrap flex-row-reverse justify-content-between align-items-center">
                    <div className="image-text-img overflow-hidden">
                        <img src="images/image-text-img.jpg" alt="image text image" />
                    </div>
                    <div className="image-text-content">
                        <h4>Our Vision</h4>
                        <h5>Lorem ipsum dolor</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nihil non rem facilis ipsa soluta!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fuga animi iusto reprehenderit magni tempora!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageTextBlock