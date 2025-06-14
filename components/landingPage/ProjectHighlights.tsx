import React from 'react'
import { Button } from '../ui/Button'
import Image from 'next/image'
import highlightedProjects from '../../data/highlightedProjects'

const ProjectHighlights = () => {
  return (
    <div id="projectHighlights" className='w-full px-8 md:px-16 lg:px-24 xl:px-28 2xl:px-32 flex flex-col items-center '>
          <div className='w-full h-auto gap-16 gap-lg-0 flex flex-col justify-between px-6 border-black'>
      {highlightedProjects.map((project, index) => {
        return <div className='flex flex-col xl:flex-row my-24'>
          {/*Project Details*/}
          <div className='w-1/2'>
            <div>
            <p className='italic'>{project.id}/{highlightedProjects.length}</p>
          </div>
          <div className='flex flex-col gap-6 border-slate-500 border-y-2 py-12'>
            <div className='w-full flex justify-between pb-4'>
              <p>{project.year}</p>
              <p className='font-bold'>{project.industry}</p>
            </div>
            <div>
              <h4 className='text-7xl'>{project.title}</h4>
            </div>
            <div className='flex gap-4'>
              {project.jobTags.map((tag) => {
                  return <div className='p-2 bg-slate-400 rounded-lg'>{tag}</div>
                })}
            </div>
            <div>
              <p className='text-xl'>{project.description}</p>
            </div>
            <Button 
              variant="outline" 
              type="submit" 
              className="text-md w-2/5 gap-4 font-bold tracking-wide p-6 border-2 border-black button-shadow-xl dark:bg-black dark:text-white dark:border-white dark:button-shadow-none"
              >View My Projects
          </Button>
          </div>
          </div>
          {/*Project Image*/}
          <div className='w-1/2 flex justify-center'>
            <Image 
              key={index}
              src={project.image.src}
              alt={project.image.alt}
              width={720}
              height={405}
              className="border-2 border-black rounded-md"
              />
          </div>
        </div>
      })}
    </div>
  </div>
  )
}

export default ProjectHighlights