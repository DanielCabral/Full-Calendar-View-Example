# Full-Calendar-View-Example
For complete instructions on how to initialize your build system, see the FullCalendar React Docs »

About this example: the state for events is owned by the FullCalendar instance and then emitted via eventsSet to be used elsewhere in the app. This is easier than owning the state in a parent component because FullCalendar can take care of requesting, parsing, and mutating event data instead of your reducer. However, this technique will only work when a FullCalendar component is rendered. If you need access to your event data when a FullCalendar component is NOT rendered, please take a look at the React+Redux example »

Installation git clone https://github.com/fullcalendar/fullcalendar-example-projects.git cd fullcalendar-example-projects/react npm install Build Commands npm run start # builds and opens a web browser
