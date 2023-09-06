import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Statistics from './Statistics';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };
  goodFeedback = () => {
    this.setState(PrevState => ({
      good: PrevState.good + 1,
      total: PrevState.total + 1,
    }));
  };
  neutralFeedback = () => {
    this.setState(PrevState => ({
      neutral: PrevState.neutral + 1,
      total: PrevState.total + 1,
    }));
  };
  badFeedback = () => {
    this.setState(PrevState => ({
      bad: PrevState.bad + 1,
      total: PrevState.total + 1,
    }));
  };

  render() {
    return (
      <div>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.total}
            //   positivePercentage={positivePercentage}
          />
        </Section>
        <Section title="Please leave feedback">
          <FeedbackOptions
            goodFeedback={this.goodFeedback}
            neutralFeedback={this.neutralFeedback}
            badFeedback={this.badFeedback}
          />
        </Section>
      </div>
    );
  }
}
export default Feedback;
