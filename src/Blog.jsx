import "./Blog.css";
import img1 from "./assets/house1.jpg";
import img2 from "./assets/house2.jpg";
import img3 from "./assets/house3.jpg";

const BlogCard = ({ img, title, desc }) => {
  return (
    <div className="blog-card">
      <img src={img} alt={title} />

      <div className="blog-content">
        <h3>{title}</h3>
        <p>{desc}</p>
        <a href="#">Read More</a>
      </div>
    </div>
  );
};

function Blog() {
  return (
    <section className="blog bg-light">
      <div className="container">

        <h2>Latest News & Blog</h2>

        <div className="blog-grid">
          <BlogCard
            img={img1}
            title="Top 10 Properties in Pune"
            desc="Explore the best residential properties available in Pune with modern amenities."
          />

          <BlogCard
            img={img2}
            title="Real Estate Investment Tips"
            desc="Learn how to invest smartly in real estate and maximize your returns."
          />

          <BlogCard
            img={img3}
            title="Luxury Living in Mumbai"
            desc="Discover premium apartments and villas in the heart of Mumbai."
          />
        </div>

      </div>
    </section>
  );
}

export default Blog;