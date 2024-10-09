import Image, { StaticImageData } from "next/image";
import { Img1, Img2, Img3, Img4, Img5, Img6 } from "@/assets";

interface ImageColumnProps {
  className: string;
}

const images: { [key: number]: StaticImageData } = {
  1: Img1,
  2: Img2,
  3: Img3,
  4: Img4,
  5: Img5,
  6: Img6,
};

export default function ImageColumn({ className }: ImageColumnProps) {
  return (
    <div className={`col ${className}`}>
      {Object.entries(images).map(([key, image]) => (
        <div className="item" key={key}>
          <Image src={image.src} alt={`Img${key}`} fill />
        </div>
      ))}
    </div>
  );
}
