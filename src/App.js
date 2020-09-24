import React, {useState} from 'react';
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils'



export default class App extends React.Component {
  calendarComponentRef = React.createRef();
  render() {

  return (
    <div className="App">    
      <FullCalendar
            locale='pt-br'
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView='timeGridWeek'
            buttonText={{
              today:    'Hoje',
              month:    'Mensal',
              week:     'Semanal',
              day:      'Diario'
            }}   
            views = {[
              {
                timeGridDay: { // name of view
                titleFormat: { year: 'string', month: '4-digit', day: '4-digit' }
                // other view-specific options here
              }
            }
          ]}
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}            
            initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            eventClick={()=> {alert() }}
            select={()=>{let calendarApi = this.calendarComponentRef.current.getApi();
           if(calendarApi.view.type==="dayGridMonth" || calendarApi.view.type==="timeGridWeek");
            return this.gotoPast();
          }}
            ref={this.calendarComponentRef}
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
          />
    </div>
  );
}
gotoPast = () => {
  let calendarApi = this.calendarComponentRef.current.getApi();
  calendarApi.changeView("timeGridDay");
};
}
