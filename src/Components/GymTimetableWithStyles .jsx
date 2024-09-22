import React, { useState } from 'react';
import { Table, Container } from 'react-bootstrap';

// Import images
import yogaImage from '../assets/yogaImage.jpg';
import spinImage from '../assets/spinImage.jpg';
import hiitImage from '../assets/hiitImage.webp';
import pilatesImage from '../assets/pilatesImage.webp';
import crossfitImage from '../assets/crossfitImage.jpg';
import zumbaImage from '../assets/zumbaImage.jpg';
import restImage from '../assets/restImage.webp';
import bodyPumpImage from '../assets/bodyPumpImage.jpg';
import kickboxingImage from '../assets/kickboxingImage.jpg';
import barreImage from '../assets/barreImage.jpg';
import boxingImage from '../assets/boxingImage.jpg';
import strengthImage from '../assets/strengthImage.webp';
import bodyCombatImage from '../assets/bodyCombatImage.jpg';

const timetableData = [
  {
    time: "6:00am - 7:00am",
    classes: ["Yoga", "Spin", "HIIT", "Pilates", "CrossFit", "Zumba"]
  },
  {
    time: "9:00am - 10:00am",
    classes: ["Zumba", "Body Pump", "Kickboxing", "Barre", "Boxing", "Yoga"]
  },
  {
    time: "12:00pm - 1:00pm",
    classes: ["Strength", "Yoga", "Spin", "HIIT", "Pilates", "CrossFit"]
  },
  {
    time: "7:00pm - 8:00pm",
    classes: ["CrossFit", "Zumba", "Body Combat", "Yoga", "HIIT", "Strength"]
  }
];


const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const GymTimetable = ({ imageSize = 60, cellPadding = 10 }) => {
  const [highlightedCells, setHighlightedCells] = useState([]);



  const getImageForClass = (className) => {
    switch (className.toLowerCase()) {
      case 'yoga': return yogaImage;
      case 'spin': return spinImage;
      case 'hiit': return hiitImage;
      case 'pilates': return pilatesImage;
      case 'crossfit': return crossfitImage;
      case 'zumba': return zumbaImage;
      case 'rest day': return restImage;
      case 'body pump': return bodyPumpImage;
      case 'kickboxing': return kickboxingImage;
      case 'barre': return barreImage;
      case 'boxing': return boxingImage;
      case 'strength': return strengthImage;
      case 'body combat': return bodyCombatImage;
      default: return restImage; // Use a default image for unknown classes
    }
  };

  const toggleHighlight = (rowIndex, colIndex) => {
    const cellId = `${rowIndex}-${colIndex}`;
    setHighlightedCells(prev => 
      prev.includes(cellId) 
        ? prev.filter(id => id !== cellId)
        : [...prev, cellId]
    );
  };

  return (
    <Container className="mt-5">

{/*  */}
<div className="container  pt-5">
    <div className="row text-center">
        <div className="maxtxt">
            <h6>Time to Fitness</h6>
<h2>Classes Schedule</h2>
        </div>
    </div>
</div>
{/*  */}

      {/* <h1 className="text-center mb-4 text-danger">Gym Timetable</h1> */}



      <div className="timetable">
        <Table striped hover responsive>
          <thead>
            <tr>
              <th>Time</th>
              {days.map(day => <th key={day}>{day}</th>)}
            </tr>
          </thead>
          <tbody>
            {timetableData.map((row, rowIndex) => (
              <tr key={row.time}>
                <td>{row.time}</td>
                {row.classes.map((cls, colIndex) => (
                  <td 
                    key={`${rowIndex}-${colIndex}`}
                    className={highlightedCells.includes(`${rowIndex}-${colIndex}`) ? 'highlight' : ''}
                    onClick={() => toggleHighlight(rowIndex, colIndex)}
                  >
                    <div className="class-cell">
                      <img 
                        src={getImageForClass(cls)} 
                        alt={cls} 
                        className="class-image" 
                      />
                      <div className="class-info">
                        <div className="class-name">{cls}</div>
                        <div className="class-time">{row.time}</div>
                      </div>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

// Updated styles with customizable image size and cell padding
const styles = `
  // body {
  //   background-color: #1a1a1a;
  //   color: #ffffff;
  // }
  .timetable {
    // background-color: #2a2a2a;
    border-radius: 15px;
    // box-shadow: 0 0 20px rgba(255, 0, 0, 0.2);
  }
  .table {
    color: #ffffff;
  }
  .table thead th {
    background-color: #ff0033;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    border-color: #ff0000;
        text-align: center;
        border: 2px solid #3f3f3f47;
  }
  .table td {
    vertical-align: middle;
    border-color: #444444;
    padding: 10px !important;
      border: 2px solid #3f3f3f47;
       text-align:center;
           cursor:pointer;
  }
  .class-cell {
       display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap:10px
  }
  .class-image {
   width: 60px !important; 
    height: 60px !important; 
    object-fit: cover;
    border-radius: 50%;
    margin-right: 10px;
  }
  .class-info {
    flex-grow: 1;
  }
  .class-name {
    font-weight: bold;
    color: #ff3333;
  }
  .class-time {
    color: #000000;
    font-size: 0.9em;
  }
  .table-striped tbody tr:nth-of-type(odd) {
    background-color: rgba(255, 0, 0, 0.05);
    text-align:center;
  }
  .highlight {
    background-color:#ffabab !important;
    color:white;
    cursor:pointer;
    transition: background-color 0.3s ease;
  }
.table-striped>tbody>tr:nth-of-type(odd)>* {
    --bs-table-color-type: var(--bs-table-striped-color);
    --bs-table-bg-type: rgb(218 218 218 / 26%);
}
  
`;

const GymTimetableWithStyles = ({ imageSize = 10, cellPadding = 10 }) => ( // Adjusted imageSize from 60 to 30
  <>
    <style>{styles}</style>
    
    <GymTimetable imageSize={imageSize} cellPadding={cellPadding} />
  </>
);

export default GymTimetableWithStyles;