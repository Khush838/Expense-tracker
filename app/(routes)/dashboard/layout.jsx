"use clientx"
import React, { useEffect } from 'react';
import Sidenav from './_side/Sidenav'; // Ensure correct path and case-sensitive
import DashboardHeader from './_side/DashboardHeader';
import { db } from '@/utlis/dbconfig';
import { Budgets } from '@/utlis/schema';

import { eq } from 'drizzle-orm';
import { useRouter } from 'next/router';

function DashboardLayout({ children }) {
  
  const {user}=useUser();
  const router=useRouter();
  useEffect(()=>
  {
    user&&checkUserBudgets();
  },[user])
  const checkUserBudgets=async()=>{
    const result=await db.select()
    .from(Budgets)
    .where(eq(Budgets.createdBy,user?.primaryEmailAddress?.emailAddress)
  
  )
console.log(result); 
if(result?.length==0){
  router.replace('/dashboard/budgets')
} 

}

  return (
    <div>
      <div className='fixed md:w-64 hidden md:block '>
        <Sidenav />
      </div>
      <div className='md:ml-64'>
      <DashboardHeader />
      {children}
    
      </div>
    </div>

  );
}