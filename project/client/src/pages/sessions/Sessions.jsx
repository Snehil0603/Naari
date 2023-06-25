import React from 'react';
import "./sessions.css"
import Navbar from '../../components/Navbar';
function SessionInformation() {
  const sessions = [
    {
      id: 1,
      title: 'Session 1',
      speaker: 'John Doe',
      date: '2023-06-28',
      location: 'Conference Room A'
    },
    {
      id: 2,
      title: 'Session 2',
      speaker: 'Jane Smith',
      date: '2023-06-29',
      location: 'Conference Room B'
    },
    {
      id: 3,
      title: 'Session 3',
      speaker: 'Mike Johnson',
      date: '2023-06-30',
      location: 'Conference Room C'
    },
    {
      id: 4,
      title: 'Session 4',
      speaker: 'Emily Davis',
      date: '2023-07-01',
      location: 'Conference Room D'
    },
    {
      id: 5,
      title: 'Session 5',
      speaker: 'Mark Anderson',
      date: '2023-07-02',
      location: 'Conference Room E'
    },
    {
      id: 6,
      title: 'Session 6',
      speaker: 'Sarah Wilson',
      date: '2023-07-03',
      location: 'Conference Room F'
    },
    {
      id: 7,
      title: 'Session 7',
      speaker: 'Michael Brown',
      date: '2023-07-04',
      location: 'Conference Room G'
    },
    {
      id: 8,
      title: 'Session 8',
      speaker: 'Linda Thompson',
      date: '2023-07-05',
      location: 'Conference Room H'
    },
    {
      id: 9,
      title: 'Session 9',
      speaker: 'Adam Wilson',
      date: '2023-07-06',
      location: 'Conference Room I'
    },
    {
      id: 10,
      title: 'Session 10',
      speaker: 'Sophia Evans',
      date: '2023-07-07',
      location: 'Conference Room J'
    },

  ];

  return (
    <>
    <Navbar/>
    <div className="session-information">
    <h2 className="session-information__title">Session Information</h2>
    <div className="session-information__card-container">
      {sessions.map(session => (
        <div key={session.id} className="session-information__card">
          <h3 className="session-information__card-title">{session.title}</h3>
          <p className="session-information__card-details">
            <strong>Speaker:</strong> {session.speaker}<br />
            <strong>Date:</strong> {session.date}<br />
            <strong>Location:</strong> {session.location}<br />
          </p>
        </div>
      ))}
    </div>
  </div>
  </>
  );
}

export default SessionInformation;
