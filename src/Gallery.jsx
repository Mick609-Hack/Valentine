import "./Gallery.css";
import pic1 from "./assets/pic1.jpg"
// import pic2 from "./assets/pic2.jpg"
// import pic3 from "./assets/pic3.jpg"
import pic4 from "./assets/pic4.jpg"
import pic5 from "./assets/pic5.jpg"
import pic6 from "./assets/pic6.jpg"
const images = [
    pic1,
    pic4,
    pic5,
    pic6
  
];

function Gallery() {
  return (
    <div id="gallery" className="gallery-container">
      <h2>📸 Our Favorite Moments</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <img key={index} src={img} alt="Memory" />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
