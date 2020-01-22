import React from 'react';
import './style.scss';
import TimelineItem from './timelineItem';

// test data to use from context
const data = [
  {title: '2008', content: 'The ZURB Style Guide is created to help us speed up our work. It’s a handy collection of HTML, CSS and Javascript that we use on every client project. The ideas of ZURB Style Guide evolve over the years and form the basis for a new framework, Foundation.'},
  {title: '2010', content: 'ZURB style guide was solidified and named Foundation. It is being used internally on all client projects and ZURB sites and apps.'}
];
//------------------------------

const Timeline = () => {
  return (
    <div className="timeline">
      { data.map((item, index) => <TimelineItem title={item.title} content={item.content} right={Boolean(index % 2)} />) }
    </div>
  );
};

export default Timeline;
