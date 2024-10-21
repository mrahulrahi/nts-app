import type { Metadata } from 'next';
import './Blog.css';
import Banner from "../../components/Banner/Banner";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read blogs",
};

const BlogPage = () => {


  return (
    <>
      <Banner heading="Blogs" subheading="Something interesting"></Banner>
     
    </>
  );
};

export default BlogPage;
