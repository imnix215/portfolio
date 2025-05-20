import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionAwards = ({ awards }) => {
  return (
    <Section title="Awards">
      {awards.map((awards) => (
        <SummaryItem
          key={awards.name}
          name={awards.name}
          description={awards.description}
        />
      ))}
    </Section>
  );
};

export default SectionAwards;
