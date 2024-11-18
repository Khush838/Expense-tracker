"use client"
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import EmojiPicker, { Emoji } from 'emoji-picker-react'
import { Button } from '@/components/ui/button'
  

function CreateBudget() {
    const [emojiIcon, setEmojiIcon]=useState('blush');
    const [openEmojiPicker,setOpenEmojiPicker]=useState(false)
    return (
    <div>
        <Dialog>
  <DialogTrigger asChild><div>
        <h2 className='text-3xl bg-slate-100 p-10 rounded-md items-center flex flex-col border-2 border-dashed cursor-pointer hover:shadow-md'>+</h2>
        <h2>Create New Budget</h2>
        <h2>+</h2>
        </div></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Create New Budget</DialogTitle>
      <DialogDescription>
        <div className='mt-5'>
        <Button variant="outline"
        size='lg'
        className='text-lg'
        onclick={()=>setOpenEmojiPicker(!openEmojiPicker)}>
            {emojiIcon}
        </Button>
        <div className='absolute'>
           { <EmojiPicker
           open={openEmojiPicker}
           onEmojiClick={(e)=>{
            setOpenEmojiPicker(false)
           }}
           />}
        </div></div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

        </div>
  )
}

export default CreateBudget