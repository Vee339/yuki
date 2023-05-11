import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
function Footer() {
  return (
    <footer>
      <div className="content">
        <header>
          <h1>YUKI</h1>
          <div className="socials">
            <ul>
              <li>
                <a href="#">
                  <AiOutlineYoutube />
                </a>
              </li>
              <li>
                <a href="#">
                  <AiOutlineInstagram />
                </a>
              </li>
              <li>
                <a href="#">
                  <AiOutlineFacebook />
                </a>
              </li>
              <li>
                <a href="#">
                  <AiOutlineLinkedin />
                </a>
              </li>
              <li>
                <a href="#">
                  <AiOutlineTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <AiOutlineWhatsApp />
                </a>
              </li>
            </ul>
          </div>
        </header>
        <main>
          <div className="product_list">
            <h2>Products</h2>
            <ul>
              <li>
                <a href="#">Footwear</a>
              </li>
              <li>
                <a href="#">T-shirts</a>
              </li>
              <li>
                <a href="#">Pants</a>
              </li>
              <li>
                <a href="#">Jewellery</a>
              </li>
              <li>
                <a href="#">Goggles</a>
              </li>
              <li>
                <a href="#">Handbags</a>
              </li>
              <li>
                <a href="#">Sandles</a>
              </li>
              <li>
                <a href="#">Perfumes</a>
              </li>
              <li>
                <a href="#">Belts</a>
              </li>
              <li>
                <a href="#">Caps</a>
              </li>
            </ul>
          </div>
          <div className="about">
            <h2>About Us</h2>
            <ul>
              <li>
                <a href="">Privacy</a>
              </li>
              <li>
                <a href="">Terms of Use</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">FAQs</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">History</a>
              </li>
              <li>
                <a href="">Testimonials</a>
              </li>
            </ul>
          </div>
          <div className="customer-services">
            <h2>Customer Services</h2>
            <ul>
              <li>
                <a href="">Order returns</a>
              </li>
              <li>
                <a href="">Order cancellations</a>
              </li>
              <li>
                <a href="">Refund issues</a>
              </li>
              <li>
                <a href="">Track order</a>
              </li>
              <li>
                <a href="">Enquiries</a>
              </li>
              <li>
                <a href="">Other issues</a>
              </li>
            </ul>
          </div>
          <div className="other_links">
            <h2>Other links</h2>
            <ul>
              <li>
                <a href="#">Your account</a>
              </li>
              <li>
                <a href="#">Orders</a>
              </li>
              <li>
                <a href="#">Cart</a>
              </li>
              <li>
                <a href="#">New Stuff</a>
              </li>
              <li>
                <a href="#">High discount</a>
              </li>
            </ul>
          </div>
          <div className="address">
            <h2>Registered office address</h2>
            <p>
              Yuki fashion and stuff building, 3rd floor, 1905, Trinnity Square,
              88 Abiyunuam Bypass, 17 Sector, Gurgaon, Haryana, India - 153001
            </p>
            <h2>Mail us at: </h2>
            <ul>
              <li>
                <a href="#">customercare@yuki.com</a>
              </li>
              <li>
                <a href="#">needsomehelp@yuki.com</a>
              </li>
              <li>
                <a href="#">dosomeenquiry@yuki.com</a>
              </li>
            </ul>
          </div>
        </main>
        <div className="copyright">
          &#169; all rights reserved by Yuki Corporation 2023
        </div>
      </div>
    </footer>
  );
}
export default Footer;
