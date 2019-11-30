import React from 'react';
import DescriptionTitle from './DescriptionTitle';
import CheckOddsBanner from '../reusable/checkOdds/CheckOddsBanner';
import ConsultationBanner from '../reusable/consultationBanner/ConsultationBanner';
import FeedbackCall from '../reusable/forms/feedbackCall/FeedbackCall';

const DescriptionWrapper = ({ title, children }) => {
  return (
    <div>
      <DescriptionTitle title={title} />
      <CheckOddsBanner />
      {children}
      <FeedbackCall />
      <ConsultationBanner />
    </div>
  );
};

export default DescriptionWrapper;
