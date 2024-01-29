/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type ApplicationsRetrieveRequestExpand =
    | "candidate"
    | "candidate,credited_to"
    | "candidate,credited_to,current_stage"
    | "candidate,credited_to,current_stage,reject_reason"
    | "candidate,credited_to,reject_reason"
    | "candidate,current_stage"
    | "candidate,current_stage,reject_reason"
    | "candidate,job"
    | "candidate,job,credited_to"
    | "candidate,job,credited_to,current_stage"
    | "candidate,job,credited_to,current_stage,reject_reason"
    | "candidate,job,credited_to,reject_reason"
    | "candidate,job,current_stage"
    | "candidate,job,current_stage,reject_reason"
    | "candidate,job,reject_reason"
    | "candidate,reject_reason"
    | "credited_to"
    | "credited_to,current_stage"
    | "credited_to,current_stage,reject_reason"
    | "credited_to,reject_reason"
    | "current_stage"
    | "current_stage,reject_reason"
    | "job"
    | "job,credited_to"
    | "job,credited_to,current_stage"
    | "job,credited_to,current_stage,reject_reason"
    | "job,credited_to,reject_reason"
    | "job,current_stage"
    | "job,current_stage,reject_reason"
    | "job,reject_reason"
    | "reject_reason";

export const ApplicationsRetrieveRequestExpand = {
    Candidate: "candidate",
    CandidateCreditedTo: "candidate,credited_to",
    CandidateCreditedToCurrentStage: "candidate,credited_to,current_stage",
    CandidateCreditedToCurrentStageRejectReason: "candidate,credited_to,current_stage,reject_reason",
    CandidateCreditedToRejectReason: "candidate,credited_to,reject_reason",
    CandidateCurrentStage: "candidate,current_stage",
    CandidateCurrentStageRejectReason: "candidate,current_stage,reject_reason",
    CandidateJob: "candidate,job",
    CandidateJobCreditedTo: "candidate,job,credited_to",
    CandidateJobCreditedToCurrentStage: "candidate,job,credited_to,current_stage",
    CandidateJobCreditedToCurrentStageRejectReason: "candidate,job,credited_to,current_stage,reject_reason",
    CandidateJobCreditedToRejectReason: "candidate,job,credited_to,reject_reason",
    CandidateJobCurrentStage: "candidate,job,current_stage",
    CandidateJobCurrentStageRejectReason: "candidate,job,current_stage,reject_reason",
    CandidateJobRejectReason: "candidate,job,reject_reason",
    CandidateRejectReason: "candidate,reject_reason",
    CreditedTo: "credited_to",
    CreditedToCurrentStage: "credited_to,current_stage",
    CreditedToCurrentStageRejectReason: "credited_to,current_stage,reject_reason",
    CreditedToRejectReason: "credited_to,reject_reason",
    CurrentStage: "current_stage",
    CurrentStageRejectReason: "current_stage,reject_reason",
    Job: "job",
    JobCreditedTo: "job,credited_to",
    JobCreditedToCurrentStage: "job,credited_to,current_stage",
    JobCreditedToCurrentStageRejectReason: "job,credited_to,current_stage,reject_reason",
    JobCreditedToRejectReason: "job,credited_to,reject_reason",
    JobCurrentStage: "job,current_stage",
    JobCurrentStageRejectReason: "job,current_stage,reject_reason",
    JobRejectReason: "job,reject_reason",
    RejectReason: "reject_reason",
} as const;