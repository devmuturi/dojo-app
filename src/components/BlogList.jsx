import { Button } from "react-bootstrap"

export default function BlogList({ blogs, title, handleDelete }) {
  return (
      <div className="px-4 blog-list">
          <h1>{title}</h1>
          {blogs.map((blog) => (
              <div className="blog-preview px-4" key={blog.id}>
                  <h2>{blog.title}</h2>
                  <p>{blog.body}</p>
                  <p>Written by <span style={{
                      fontStyle: "italic"
                  }}>{ blog.author }</span></p>
                  <Button className="btn-danger mb-3" onClick={() => handleDelete(blog.id)}>delete blog</Button>
              </div>
          ))}
    </div>
  )
}
