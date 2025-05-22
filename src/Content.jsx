import { useState } from 'react'
import BlogList from './components/BlogList'
import NavBar from './components/NavBar'

export default function Content() {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Learning React', body: 'lorem ipsum...', author: 'njonge', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs)
  }
  return (
    <div>
      <NavBar />
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={ handleDelete} />
      <BlogList blogs={blogs.filter((blog) => blog.author == 'mario')} title="Mario's blogs" />
    </div>
  )
}
