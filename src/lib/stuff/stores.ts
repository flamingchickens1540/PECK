import { writable, type Writable } from "svelte/store"
import * as fs from 'fs'
import type { Department, PeckEvent } from "./types"
import { match } from "assert"

export const events: Writable<PeckEvent[]> = writable(getEvents())

function getEvents(): PeckEvent[] {
    let event_list: PeckEvent[] = []
    let event_file = JSON.parse(fs.readFileSync('../../secrets/events.json', 'utf-8'));
    event_file.forEach((element: { [x: string]: string }) => {
        let e = {} as PeckEvent;
        e.start = new Date(element["start"])
        e.deadline = new Date(element["deadline"])
        e.end = new Date(element["end"])
        e.goal = new Date(element["goal"])
        e.dept = +element["dept"]
        e.description = element["desc"]
        event_list.push(e);
    });
    return event_list
}