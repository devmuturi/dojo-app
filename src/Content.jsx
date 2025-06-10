import { useEffect, useState } from 'react'
import BlogList from './components/BlogList'
import NavBar from './components/NavBar'
import useFetch from './useFetch'

export default function Content() {
  const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs')

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs)
  }

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
