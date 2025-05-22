import { useState }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import Content from './components/Content';

function App() {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Learning React', body: 'lorem ipsum...', author: 'njonge', id: 2},
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3}
  ])
  return (
    <>
      <NavBar />
      <Content blogs={ blogs } title= "All Blogs!"/>
    </>
  )
}

export default App
