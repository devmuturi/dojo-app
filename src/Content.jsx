import { useEffect, useState } from 'react'
import BlogList from './components/BlogList'
import useFetch from './useFetch'

export default function Content() {
  const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs')

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs)
  }

  return (
    <div>
      <div>
        {isLoading && <div>Loading...</div>}
        {error && <div>{ error }</div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />}
        {blogs && <BlogList blogs={blogs.filter((blog) => blog.author == 'mario')} title="Mario's blogs" />}
      </div>
    </div>
  )
}
