import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='flex items-center bg-white justify-center min-h-screen'>
      <SignIn />
    </div>
  )
}