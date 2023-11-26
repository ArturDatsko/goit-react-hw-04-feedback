import React, { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbabkOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';
import css from './App.module.css';

export const App = props => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = [
    { label: 'Good', value: good, func: setGood },
    { label: 'Neutral', value: neutral, func: setNeutral },
    { label: 'Bad', value: bad, func: setBad },
  ];

  const totalFeedback = good + neutral + bad;

  const goodFeedbackPercentage =
    good === 0 ? 0 : Math.round((good / totalFeedback) * 100);

  return (
    <>
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} />
        </Section>
        <Section title="Statistics">
          {totalFeedback === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={goodFeedbackPercentage}
            />
          )}
        </Section>
      </div>
    </>
  );
};
