import { useEffect, useState } from 'react'
import BlogList from './components/BlogList'
import NavBar from './components/NavBar'

export default function Content() {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null)

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs)
  }

  // fetch the data using useEffect
  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        if (!res.ok) {
          throw Error('Could not fetch data for that resource');
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data)
        setLoading(false)
        setError(null)
      })
      .catch(err => {
        setLoading(false)
        setError(err.message)
      })
  }, []);

  return (
    <div>
      <NavBar />
      <div className="container">
        {isLoading && <div>Loading...</div>}
        {error && <div>{ error }</div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />}
        {blogs && <BlogList blogs={blogs.filter((blog) => blog.author == 'mario')} title="Mario's blogs" />}
      </div>
    </div>
  )
}
