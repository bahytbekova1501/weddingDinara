import React from "react";
import "./Сalendar.css";
import heart from "../img/сердце2.png";
import { useTranslation } from "react-i18next";

const Calendar = () => {
  const { t, i18n } = useTranslation();
  // Массив с названиями дней недели
  const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

  // Создаем массив с днями месяца
  const monthDays = Array.from({ length: 31 }, (_, index) => index + 1); // Создаем массив от 1 до 31

  return (
    <div className="calendar">
      <div className="calendar-grid">
        {weekDays.map((day) => (
          <div key={day} className="calendar-day">
            {day}
          </div>
        ))}
        {/* Отображаем дни месяца */}
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
