import BlogCard from "./components/BlogCard/BlogCard";
import Hero from "./components/Hero/Hero";
import PlanCard from "./components/PlanCard/PlanCard";
import TestimonialCard from "./components/TestimonialCard/TestimonialCard";

export default function Home() {
  const testimonialCards = [
    { name: "Jake Sinclair", title: "Brand Designer", body: "Hostingry impressed me with amazing customer experience and effortless migration from my previous provider." },
    { name: "Yassen Sattar", title: "Graphic and Web Designer", body: "Support matters to me the most. Your specialists were always there to help me immediately." },
    { name: "Jhon Ortega", title: "Entrepreneur", body: "I was looking for a company that is very intuitive for beginners and very well-configured for good performance." },
  ]

  const blogCards = [
    { imgUrl: "images/blog-img-1.png", title: "Web Design", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." },
    { imgUrl: "images/blog-img-2.png", title: "App Design", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." },
    { imgUrl: "images/blog-img-3.png", title: "Graphic Design", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." },
    { imgUrl: "images/blog-img-4.png", title: "Photography", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." },
    { imgUrl: "images/blog-img-5.png", title: "Hostingry", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." },
    { imgUrl: "images/blog-img-6.png", title: "PhonesMania", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." },
  ]

  return (
    <main>
      <Hero />


      <div className="content-container">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading text-center">
                <h3>Testimonials</h3>
              </div>

              <div className="testimonial-card-list d-flex flex-wrap">
                {testimonialCards.map((card, index) => <div key={index} className="testimonial-card-item flex-grow-1">
                  <TestimonialCard card={card} />
                </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-container pt-0">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading text-center">
                <h3>Blogs</h3>
              </div>

              <div className="blog-card-list d-flex flex-wrap">
                {blogCards.map((card, index) => <div key={index} className="blog-card-item">
                  <BlogCard card={card} />
                </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <PlanCard />
    </main>
  );
}
