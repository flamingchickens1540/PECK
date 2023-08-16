export enum Department {
    CONTROLS,
    APP_SW,
    ROBOT_SQ,
    FAB,
    DESIGN,
    OUTREACH,
    MEDIA,
    STRATEGY
}

export type PeckEvent = {
    dept: Department,
    description: string
    has_ended: boolean
    start: Date
    deadline: Date
    end: Date // Will be null if !has_ended
    goal: Date
}