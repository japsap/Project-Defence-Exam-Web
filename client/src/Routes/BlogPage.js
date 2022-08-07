import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

//compoenents
import useCommentRest from "../Hooks/useCommentRest";

//custom hooks
import useFetchComments from "../Hooks/useFetchComments";
import MovieBuyList from "../Components/Blog/MovieBuyList";

const BlogPage = () => {
  const [blogs, setBlogs] = useFetchComments(
    "http://localhost:5050/jsonstore/blogs",
    []
  );

  const { deleteBlog } = useCommentRest();

  const deleteTask = (blogId) => {
    const noTasks = deleteBlog(blogId);
    setBlogs((blog) => blog.filter((x) => x._id != blogId));
  };



  return (
    <div className="blog__page">
      <Container>
        <Row className="d-flex justify-content-evenly mt-5">
          <h1 className="text-center mb-5 underline-container">Buy a movie here :)</h1>
          {blogs.length === 0 ? (
            <p className="text-center">No Movies :p</p>
          ) : (
            <>
              {blogs.map((blog) => (
                <Col md={3} key={blog._id}>
                  <MovieBuyList {...blog} deleteTask={deleteTask}/>
                </Col>
              ))}
            </>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default BlogPage;
