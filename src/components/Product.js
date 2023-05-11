import { IoStarSharp } from "react-icons/io5";
import { IoStarHalfSharp } from "react-icons/io5";
import { TfiStar } from "react-icons/tfi";

function Product(props) {
  const { desc, img, currPrice, origPrice, rating } = props;
  // console.log(rating); // 2, 3.5, 1, 4.5, 2.5, 5, 5, 4.5, 1.5, 2

  let stars = [];

  const fullStars = Math.trunc(rating);
  console.log(rating);
  for (let a = 0; a < fullStars; a++) {
    stars.push(<IoStarSharp />);
  }
  if (rating - Math.trunc(rating) !== 0) {
    stars.push(<IoStarHalfSharp />);
    for (let b = 5; b > fullStars + 1; b--) {
      stars.push(<TfiStar />);
    }
  } else {
    for (let b = 5; b > fullStars; b--) {
      stars.push(<TfiStar />);
    }
  }

  return (
    <div className="product">
      <div className="imgBox">
        <img src={`../assets/products/${img}`} alt="" />
        {/* <img src={handbag1} alt="" /> */}
      </div>
      <div className="info">
        <div className="desc">{desc}</div>
        <div className="bottomDesc">
          <div className="currPrice">${currPrice}</div>
          <div className="origPrice">${origPrice}</div>
          <div className="discount">
            {Math.round(((origPrice - currPrice) / origPrice) * 100)}% discount
          </div>
          <div className="rating">{stars}</div>
        </div>
      </div>
    </div>
  );
}

export default Product;
