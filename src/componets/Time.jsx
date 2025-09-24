import React, { useEffect, useState } from "react";
import "./Time.css";
import { useTranslation } from "react-i18next";

const Time = () => {
  const { t, i18n } = useTranslation();
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-10-19T00:00:00+06:00");
    const now = new Date();
    const difference = targetDate - now;

    return {
      days: Math.max(Math.floor(difference / (1000 * 60 * 60 * 24)), 0),
      hours: Math.max(Math.floor((difference / (1000 * 60 * 60)) % 24), 0),
      minutes: Math.max(Math.floor((difference / 1000 / 60) % 60), 0),
      seconds: Math.max(Math.floor((difference / 1000) % 60), 0),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="countdown">
      <h2>{t("event")}</h2>
      <div className="timer">
        <div>
          <span>{timeLeft.days}</span>
          <p>{t("days")}</p>
        </div>{" "}
        <div>
          <span>{timeLeft.hours}</span>
          <p>{t("hours")}</p>
        </div>{" "}
        <div>
          <span>{timeLeft.minutes}</span>
          <p>{t("minutes")}</p>
        </div>{" "}
        <div>
          <span>{timeLeft.seconds}</span>
          <p>{t("seconds")}</p>
        </div>
      </div>{" "}
    </div>
  );
};

export default Time;
