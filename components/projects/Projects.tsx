import React, { Fragment } from 'react'
import SectionHeading from '../UI/SectionHeading'
import { projects } from '@/lib/data'
import ProjectItem from './ProjectItem'

export default function Projects() {
  return (
    <section
    id='projects'
    className='scroll-mt-28 mb-28'
    >
        <SectionHeading>
            My personal projects
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
