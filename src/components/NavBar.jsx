import { Stack } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

export default function navbar() {
  return (
    <Stack direction="horizontal" gap={3} className='px-5'>
      <div className="p-2">Dojo App</div>
      <div className="p-2 ms-auto">Blogs</div>
      <Button variant="secondary">Secondary</Button>
    </Stack>
  )
}

