export default function Content({ blogs, title }) {
  return (
      <div className="px-4 blog-list">
          <h1>{title}</h1>
          {blogs.map((blog) => (
              <div className="blog-preview" key={blog.id}>
                  <h2>{blog.title}</h2>
                  <p>{blog.body}</p>
              </div>
          ))}
    </div>
  )
}
