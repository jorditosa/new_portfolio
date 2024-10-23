'use client'

import React, { Fragment } from 'react'
import SectionHeading from '../UI/SectionHeading'
import { studies } from '@/lib/data'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Studies() {
  return (
    <section 
    id='experience'
    className='max-w-[45rem] scroll-mt-28 mb-28 sm:mb-40'>
        <SectionHeading>
            Studies
        </SectionHeading>

        <VerticalTimeline 
        layout='1-column-left'
        lineColor='#d2d8f0'>
          {
            studies.map((experience, index) => (
              <Fragment key={index}>
                <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#f3f4f6",
                  border: "1px solid rgba(0,0,0,0.05)",
                  textAlign: "left",
                  padding: "1.3rem",
                }}
                contentArrowStyle={{
                  borderRight: "0.4rem solid #9ca3af"
                }}
                date={experience.date}

                >
                  <h3 className='font-bold capitalize text-gray-900'>{experience.title}</h3>
                  <p className='text-base text-gray-900'>{experience.company}</p>
                  <p className='!text-sm text-gray-900'>{experience.description}</p>
                </VerticalTimelineElement>
              </Fragment>
            ))
          }
        </VerticalTimeline>

    </section>
  )
}
