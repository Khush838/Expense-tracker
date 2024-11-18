import { Button } from '@/components/ui/button'
import React from 'react'
import BudgetList from './_component/BudgetList'

function Budget() {
  return (
    <div className='p-10'><h2 className='font-bold text-3xl'>My Budget</h2>
    <BudgetList /></div>
  )
}

export default Budget