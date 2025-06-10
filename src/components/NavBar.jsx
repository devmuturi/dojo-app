import { Stack } from 'react-bootstrap'
import { ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function navbar() {
  return (
    <Stack direction="horizontal" gap={3} className='px-5'>
      <div className="p-2">Dojo App</div>
      <ButtonGroup className='ms-auto'>
        <Link to='/' className='p-2'>Blogs</Link>
        <Link to='/create' className='p-2'>New Blog</Link>
      </ButtonGroup>
    </Stack>
  )
}

