import React, { Fragment } from 'react'
import SectionHeading from '../UI/SectionHeading'
import { projects } from '@/lib/data'
import ProjectItem from './ProjectItem'

interface Props {
  dict: { [key: string]: string };
}

export default function Projects({ dict }: Props) {
  return (
    <section
    id='projects'
    className='max-w-[45rem] scroll-mt-28 mb-28'
    >
        <SectionHeading>
          {dict["projects-title"]}
        </SectionHeading>

        {
          projects.map((project, index) => (
            <Fragment key={index}>
              <ProjectItem
              {...project}
              />
            </Fragment>
          ))
        }
    </section>
  )
}
