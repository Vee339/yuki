import Tag from "./Tag.js";
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";

function Tagsline() {
  const products = [
    "Writs Watches",
    "High heels",
    "Handbags",
    "Perfumes",
    "Sunglasses",
    "Women's t-shirts",
    "Shoes",
    "Men's suits",
    "Ties",
    "Footwear",
  ];
  const tags = products.map((product) => <Tag content={product} />);
  return (
    <div className="tagsLine">
      <div className="icon left">
        <FiArrowLeft />
      </div>
      <div className="tagsRow">{tags}</div>
      <div className="icon right">
        <FiArrowRight />
      </div>
    </div>
  );
}
export default Tagsline;
