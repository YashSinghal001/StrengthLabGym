import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Schedule.css'


const scheduleData = {
  Monday: [
    { className: "Pilate", time: "9:00am - 10:00am", trainer: "David Vila" },
    { className: "Body Building", time: "10:00am - 11:00pm", trainer: "Paul Weight" },
    { className: "Running", time: "4:00pm - 5:00pm", trainer: "Junior Jonas" },
    { className: "Advance Step", time: "6:00pm - 7:00pm", trainer: "Brock Lesnar" },
  ],
  Tuesday: [
    { className: "Boxing", time: "8:00am - 9:00am", trainer: "Emma Zen" },
    { className: "Zumba", time: "11:00am - 12:00pm", trainer: "Sophia Dance" },
    { className: "New Body", time: "5:00pm - 6:00pm", trainer: "Mike Punch" },
  ],
  Wednesday: [
    { className: "Yoga", time: "8:00am - 9:00am", trainer: "Robert Louis" },
    { className: "BodyBalance ", time: "11:00am - 12:00pm", trainer: "Steven Mark" },
    { className: "Cycling ", time: "5:00pm - 6:00pm", trainer: "Dorian Yates" },
    { className: "BodyBalance ", time: "5:00pm - 6:00pm", trainer: "Janelle Cam " },
  ],
  Thursday: [
    { className: "Crossfit", time: "8:00am - 9:00am", trainer: "Emma Zen" },
    { className: "Zumba", time: "11:00am - 12:00pm", trainer: "Ellie Watson" },
    { className: "Cycling", time: "5:00pm - 6:00pm", trainer: "Becky Lynch" },
  ],
  Friday: [
    { className: "Meditation", time: "8:00am - 9:00am", trainer: "Jecy Deoko" },
    { className: "BodyBalance ", time: "11:00am - 12:00pm", trainer: "Flex Wheeler" },
    { className: "Boxing", time: "5:00pm - 6:00pm", trainer: "Shawn Ray" },
    { className: "Crossfit ", time: "5:00pm - 6:00pm", trainer: "Robert Louis" },
  ],
  Saturday: [
    { className: "Yoga", time: "8:00am - 9:00am", trainer: "Janelle Cam" },
    { className: "Pilate", time: "11:00am - 12:00pm", trainer: "Madison Froning" },
    { className: "Yoga", time: "5:00pm - 6:00pm", trainer: "Stefi Cohen" },
  ],

};

const WeeklyClassSchedule = () => {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const navigate = useNavigate();

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const handleJoinNow = (classInfo) => {
    navigate('/contact', { state: { classInfo } });
  };

  return (
    <div className="container-fluid mt-5 pt-5">
      <div className="row justify-content-center mb-4">
        {Object.keys(scheduleData).map((day) => (
          <div className="col-auto mb-2" key={day}>
            <button
              className={`classesbtn ${selectedDay === day ? 'active' : ''}`}
              onClick={() => handleDayClick(day)}
            >
              {day}
            </button>
          </div>
        ))}
      </div>
      <div className="row justify-content-center mb-5 pb-5">
        <div className="col-lg-10">
          <div className="schedule-section">
            {scheduleData[selectedDay].map((classInfo, index) => (
              <div className="schedule-item" key={index}>
                <div className="row align-items-center">
                  <div className="col-md-3 col-sm-6 mb-2">
                    <p className="schedule-label">Class Name</p>
                    <p className="schedule-value">{classInfo.className}</p>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-2">
                    <p className="schedule-label tcntr">Time</p>
                    <p className="schedule-value tcntr">{classInfo.time}</p>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-2">
                    <p className="schedule-label tcntr">Trainer</p>
                    <p className="schedule-value tcntr">{classInfo.trainer}</p>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-2 text-center">
                    <button className="btn-join" onClick={() => handleJoinNow(classInfo)}>Join Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyClassSchedule;