"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs'
import  Link  from 'next/link';

function header() {
  const {user,isSignedIn}=useUser();
  return (
    <div className='p-5 flex  justify-between items-center border shadow-sm'>
        <Image src={'./logo.svg'} 
        alt='logo'
        width={50}
        height={50}
        />
        {isSignedIn? <UserButton /> : 
        <Link href={'/sign-in'}>
        <Button>
            Get started
        </Button>
        </Link>
        
        }
        
    </div>

  )
}

export default header