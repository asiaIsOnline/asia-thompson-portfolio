import React from 'react'

const PageHeader = ({ title }: { title: string }) => {
  return (
    <div className='w-full border-y-2 border-black uppercase mb-10 dark:border-white'>
        <p className='py-2'>{title}</p>
    </div>
  )
}

export default PageHeader