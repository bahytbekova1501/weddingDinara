import React, { useState, useRef } from "react";
import musicFile from "../music/new.mp3"; // Путь к вашему аудиофайлу
import "./MusicPlayer.css";
import stop from "../img/icons8-стоп-50.png";
import play from "../img/icons8-воспроизведение-50.png";
function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false); // Состояние для воспроизведения музыки
  const audioRef = useRef(new Audio(musicFile)); // Создаем ссылку на аудиофайл

  // Функция для переключения состояния воспроизведения
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause(); // Пауза воспроизведения
    } else {
      audioRef.current.play(); // Воспроизведение
    }
    setIsPlaying(!isPlaying); // Инвертируем текущее состояние
  };

  return (
    <div className="music_container">
      {/* Иконка для запуска музыки */}
      <div className="music_btn_container">
        <button className="music_btn" onClick={togglePlay}>
          {isPlaying ? <img src={stop} alt="" /> : <img src={play} alt="" />}{" "}
          {/* Изменение надписи в зависимости от состояния воспроизведения */}
        </button>
        {/* <h2 className="rotate-text">Нажмите чтобы воспроизвести музыку</h2> */}
      </div>
    </div>
  );
}

export default MusicPlayer;
