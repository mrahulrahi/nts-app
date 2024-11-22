import Image from 'next/image';
import './ImageTextBlock.css'

interface Block{
  imgUrl: string;
  children: React.ReactNode;
}

const ImageTextBlock = ({imgUrl, children} : Block) => {
  return (
    <div className="image-text-box d-flex align-items-center flex-wrap bg-dark-grey">
      <div className="image-text-img">
        <Image src={imgUrl} alt={imgUrl} width={4000} height={4000} quality={100} />
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