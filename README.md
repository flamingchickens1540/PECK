# PECK

Progress Evaluation Calender Kit

A calender system for the Team 1540 lab (for making the design, fab, controls, and robot sw handoffs, communication and cross department time management easier, so anyone can see what needs to be done for other things to be started, how close we are to finishing it, and who to talk to about it.

# Ideas

- Flowchart
  - Dependency flowchart on a calender
  - Milestones and current progress for each task
  - Displays where blockers are happening
- Task system
  - Displays who's working on what (on the flowchart)
  - Displays what tasks need people with what certs (on the flowchart)
  - Displays what tasks are unattended (on the flowchart and in a list on the side)
  - Displays who doesn't have a task assigned (on the side)

# Todo (WIP)

- [ ] Calender
  - [ ] Logic
  - [ ] Todo Display to the side
  - [ ] Dependency flowchart
- [ ] Slackbot intergration
  - [ ] Milestones
  - [ ] Tasks
  - [ ] Skills

## Developing

- Install dependencies with `bun install`
- To start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
