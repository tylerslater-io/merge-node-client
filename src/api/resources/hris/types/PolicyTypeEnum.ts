/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * - `VACATION` - VACATION
 * - `SICK` - SICK
 * - `PERSONAL` - PERSONAL
 * - `JURY_DUTY` - JURY_DUTY
 * - `VOLUNTEER` - VOLUNTEER
 * - `BEREAVEMENT` - BEREAVEMENT
 */
export type PolicyTypeEnum = "VACATION" | "SICK" | "PERSONAL" | "JURY_DUTY" | "VOLUNTEER" | "BEREAVEMENT";

export const PolicyTypeEnum = {
    Vacation: "VACATION",
    Sick: "SICK",
    Personal: "PERSONAL",
    JuryDuty: "JURY_DUTY",
    Volunteer: "VOLUNTEER",
    Bereavement: "BEREAVEMENT",
} as const;
