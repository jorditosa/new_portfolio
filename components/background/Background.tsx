'use client'

import React, { Fragment } from 'react'
import SectionHeading from '../UI/SectionHeading'
import { background } from '@/lib/data'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Background() {
  return (
    <section 
    id='experience'
    className='max-w-[45rem] scroll-mt-28 mb-28 sm:mb-40'>
        <SectionHeading>
            Professional career
        </SectionHeading>

        <VerticalTimeline lineColor='#d2d8f0'>
          {
            background.map((experience, index) => (
              <Fragment key={index}>
                <VerticalTimelineElement
                contentStyle={{
                  background: "#f3f4f6",
                  boxShadow: "none",
                  border: "1px solid rgba(0,0,0,0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem"
                }}
                contentArrowStyle={{
                  borderRight: "0.4rem solid #9ca3af"
                }}
                date={experience.date}
                iconStyle={{
                  background: "#e1e1e1"
                }}
                >
                  <h3 className='font-semibold capitalize dark:text-gray-900'>{experience.title}</h3>
                  <p className='text-gray-900 dark:text-gray-50 dark:text-gray-900'>{experience.company}</p>
                  <p className='text-gray-900 dark:text-gray-50 dark:text-gray-900'>{experience.description}</p>
                </VerticalTimelineElement>
              </Fragment>
            ))
          }
        </VerticalTimeline>

    </section>
  )
}
