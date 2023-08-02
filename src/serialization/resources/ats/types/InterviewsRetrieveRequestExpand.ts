/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const InterviewsRetrieveRequestExpand: core.serialization.Schema<
    serializers.ats.InterviewsRetrieveRequestExpand.Raw,
    Merge.ats.InterviewsRetrieveRequestExpand
> = core.serialization.enum_([
    "application",
    "application,job_interview_stage",
    "interviewers",
    "interviewers,application",
    "interviewers,application,job_interview_stage",
    "interviewers,job_interview_stage",
    "interviewers,organizer",
    "interviewers,organizer,application",
    "interviewers,organizer,application,job_interview_stage",
    "interviewers,organizer,job_interview_stage",
    "job_interview_stage",
    "organizer",
    "organizer,application",
    "organizer,application,job_interview_stage",
    "organizer,job_interview_stage",
]);

export declare namespace InterviewsRetrieveRequestExpand {
    type Raw =
        | "application"
        | "application,job_interview_stage"
        | "interviewers"
        | "interviewers,application"
        | "interviewers,application,job_interview_stage"
        | "interviewers,job_interview_stage"
        | "interviewers,organizer"
        | "interviewers,organizer,application"
        | "interviewers,organizer,application,job_interview_stage"
        | "interviewers,organizer,job_interview_stage"
        | "job_interview_stage"
        | "organizer"
        | "organizer,application"
        | "organizer,application,job_interview_stage"
        | "organizer,job_interview_stage";
}