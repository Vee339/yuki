import Header from "./components/Header.js";
import Search from "./components/Search.js";
import Tagsline from "./components/Tagsline.js";
import Product from "./components/Product.js";
import Footer from "./components/Footer.js";
import data from "./productdata.js";
import "./styles/style.css";

export default function App() {
  const products = data.map((product) => {
    const { id, desc, img, current_price, original_price, rating } = product;
    return (
      <Product
        desc={desc}
        img={img}
        currPrice={current_price}
        origPrice={original_price}
        rating={rating}
      />
    );
  });

  return (
    <section>
      <Header />
      <Tagsline />

      <div className="products">{products}</div>
      <Footer />
    </section>
  );
}
