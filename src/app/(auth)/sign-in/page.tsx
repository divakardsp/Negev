
import { SignIn } from '@clerk/nextjs'

function SignInPage() {
  return (
    <>
    <div className='flex justify-center items-center min-h-screen'>
        <SignIn/>

    </div>
    </>
  )
}

export default SignInPage