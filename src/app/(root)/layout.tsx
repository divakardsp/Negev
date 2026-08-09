import { onBoardUser } from '@/features/auth/actions';
import { auth } from '@clerk/nextjs/server';
import React from 'react'

export async function layout({children}: {children: React.ReactNode}) {

    await auth.protect();
    await onBoardUser()

  return (
    <>
    {children};
    </>
  )
}

export default layout