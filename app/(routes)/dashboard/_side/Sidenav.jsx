
"use client";
import Image from 'next/image'
import { LayoutGrid, LayoutGridIcon, PiggyBank, ReceiptText, ShieldCheck } from 'lucide-react'
import { UserButton } from '@clerk/nextjs'
import {usePathname} from 'next/navigation'
import { useEffect } from 'react';
import Link from 'next/link';


function sidenav() {
  const menuList=[
    {
      id:1,
      name:'Dashboard',
      icon:LayoutGrid,
      path:'/dashboard'
    },
    {
      id:2,
      name:'Budget',
      icon:PiggyBank,
      path:'/dashboard/budget'
    },
    {
      id:3,
      name:'Expense',
      icon:ReceiptText,
      path:'/dashboard/expenses'
    },
    {
      id:4,
      name:'Upgrade',
      icon:ShieldCheck,
      path:'/dashboard/upgrade'
    },
  ]
  const path=usePathname();
  
  useEffect(()=>{
    console.log(path)
  },[])
 
  return (
    <div className='h-screen p-5 border shadow-sm'>
      <Image src={'/logo.svg'}
      width={50}
      height={50}
      alt='logo'/>
      <div>
        
        {menuList.map((menu,index)=>(
          <Link href={menu.path}>
          <h2 className={`flex gap-2 items-center
            mb-2 text-gray-600 font-medium p-5 cursor-pointer rounded-md hover:text-primary hover:bg-blue-100 ${path==menu.path&&'text-primary bg-blue-100'}`}>
            <menu.icon />
            {menu.name}
          </h2>
          </Link>
        ))}
        
      </div>
      
      <div className='fixed bottom-10 p-5 flex gap-2 items-center'>
        <UserButton />
        Profile
      </div>
    </div>
    
  )

}

export default sidenav