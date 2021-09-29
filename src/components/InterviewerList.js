

import React from "react";
import InterviewerListItem from "components/InterviewerListItem.js";
import "components/InterviewerList.scss";


export default function DayList(props) {
  const interviewers = props.interviewers.map( interviewer => {
    return (
        <InterviewerListItem 
          id = {interviewer.id}
          avatar = {interviewer.avatar}
          name = {interviewer.name}
          selected = {props.interviewer === interviewer.id}
          setInterviewer = {(event) => props.setInterviewer(interviewer.id)} 
        />
    )
  });

  return (
    <React.Fragment>
      <section className="interviewers">
        <h4 className="interviewers__header text--light">Interviewer</h4>
        <ul className="interviewers__list">
          {interviewers}
        </ul>
      </section>  
    </React.Fragment>
  )

};
  
 