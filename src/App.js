import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import moment from 'moment'

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
              right: 'timeGridDay,timeGridWeek,dayGridMonth'
            }}
            initialView='timeGridWeek'
            nowIndicator={true}
            now = {moment().format("YYYY-MM-DDTHH:mm:ss[Z]")}            
            allDaySlot={false}
            timeFormat={'H(:mm)'}
            slotLabelFormat= {[
             { hour: 'numeric',
             minute: '2-digit',
             omitZeroMinute: false,}
            ]}
            slotMinTime='06:00'
            slotMaxTime='18:00'
            contentHeight={600}
            eventTimeFormat= {{ // like '14:30:00'
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              hour12:true    
            }}
            firstHour= {7}
            buttonText={{
              today:    'Hoje',
              month:    'Mensal',
              week:     'Semanal',
              day:      'Diario'
            }}   
            views = {[
              {
                timeGridDay: { // name of view
                titleFormat: { year: 'string', month: '4-digit', day: '4-digit' },
                // other view-specific options here
                timelineThreeDays: {
                  type: 'timeline',
                  slotLabelFormat: [
                  'ddd D/M',
                  'H:mm'
                  ],
                  columnFormat: 'ddd D.M',
                  duration: { days: 3 }
              }    
              }
            }
          ]}
          timeZone= 'UTC'
          events= {[
            {
              id: 'a',
              title: 'my event',
              start: '2020-09-23T00:00:00.000Z',
              end: '2020-09-23T12:30:00.000Z',
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
          <Calendar
        
      />
    </div>
  );
}
gotoPast = () => {
  let calendarApi = this.calendarComponentRef.current.getApi();
  calendarApi.changeView("timeGridDay");
};
}