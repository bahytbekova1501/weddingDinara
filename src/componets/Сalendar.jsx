import React from "react";
import "./Сalendar.css";
import heart from "../img/сердце2.png";
import { useTranslation } from "react-i18next";

const Calendar = () => {
  const { t } = useTranslation();
  const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

  const year = 2025;
  const month = 9; // Октябрь (0 = Январь)
  const daysInMonth = 31;

  // День недели для 1 октября 2025
  const firstDay = new Date(year, month, 1).getDay(); // 0 = Воскресенье
  const offset = firstDay === 0 ? 6 : firstDay - 1; // Преобразуем к Пн=0

  const emptyDays = Array.from({ length: offset }, () => null);
  const monthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="calendar">
      <div className="calendar-grid">
        {weekDays.map((day) => (
          <div key={day} className="calendar-day">
            {day}
          </div>
        ))}

        {emptyDays.map((_, i) => (
          <div key={"empty-" + i} className="calendar-day"></div>
        ))}

        {monthDays.map((day) => (
          <div key={day} className="calendar-day">
            {day === 19 ? (
              <div className="heart-icon-container">
                <img
                  style={{ width: "35px", height: "30px" }}
                  className="heart-icon"
                  src={heart}
                  alt="Heart Icon"
                />
                <div className="day-number">{day}</div>
              </div>
            ) : (
              <div className="day-number">{day}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
