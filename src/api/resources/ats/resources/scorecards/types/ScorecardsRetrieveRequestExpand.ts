/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type ScorecardsRetrieveRequestExpand =
    | "application"
    | "application,interview"
    | "application,interview,interviewer"
    | "application,interviewer"
    | "interview"
    | "interview,interviewer"
    | "interviewer";

export const ScorecardsRetrieveRequestExpand = {
    Application: "application",
    ApplicationInterview: "application,interview",
    ApplicationInterviewInterviewer: "application,interview,interviewer",
    ApplicationInterviewer: "application,interviewer",
    Interview: "interview",
    InterviewInterviewer: "interview,interviewer",
    Interviewer: "interviewer",
} as const;