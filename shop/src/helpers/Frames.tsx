import banner from "../assets/images/banner.png";
import Frame1 from "../assets/images/Frame1.png";
import Frame3 from "../assets/images/Frame3.png";
import Frame5 from "../assets/images/Frame5.png";
import Frame6 from "../assets/images/Frame6.png";

interface Frame {
  id: number;
  image: string;
}

export const frames: Frame[] = [
  {
    id: 1,
    image: `${banner}`,
  },
  {
    id: 2,
    image: `${Frame1}`,
  },
  {
    id: 3,
    image: `${Frame3}`,
  },
  {
    id: 5,
    image: `${Frame5}`,
  },
  {
    id: 6,
    image: `${Frame6}`,
  },
];
