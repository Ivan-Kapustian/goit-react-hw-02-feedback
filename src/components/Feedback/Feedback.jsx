import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Statistics from './Statistics';
import Notification from './Notification';

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
  options = [
    { name: 'Good', leaveFeedback: this.goodFeedback },
    { name: 'Neutral', leaveFeedback: this.neutralFeedback },
    { name: 'Bad', leaveFeedback: this.badFeedback },
  ];
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage() {
    const { good, total } = this.state;
    const percentage = total > 0 ? (good / total) * 100 : 0;
    return Math.round(percentage);
  }

  render() {
    const totalFeedback = this.countTotalFeedback();
    const isFeedbackGiven = totalFeedback > 0;

    return (
      <div>
        {isFeedbackGiven ? (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}

        <Section title="Please leave feedback">
          <FeedbackOptions options={this.options} />
        </Section>
      </div>
    );
  }
}
export default Feedback;
