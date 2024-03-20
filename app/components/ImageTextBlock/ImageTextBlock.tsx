import './ImageTextBlock.css'

interface Block{
  imgUrl: string;
  children: React.ReactNode;
}

const ImageTextBlock = ({imgUrl, children} : Block) => {
  return (
    <div className="image-text-box d-flex flex-wrap bg-glass">
      <div className="image-text-img">
        <img src={imgUrl} alt={imgUrl} />
      </div>
      <div className="image-text-content-box">
        <div className="itc-inside d-flex flex-column h-100">
          {children}
        </div>
      </div>
    </div>
  )
}

export default ImageTextBlock