import React, { useState, useRef, useEffect } from "react";
import musicFile from "../music/new.mp3";
import "./MusicPlayer.css";

import start from "../img/начало.png";
import end from "../img/конец.png";
import heart from "../img/сердце.png";
import music from "../img/музыка.png";
import stop from "../img/icons8-стоп-50.png";
import play from "../img/icons8-воспроизведение-50.png";

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(new Audio(musicFile));

  useEffect(() => {
    const audio = audioRef.current;

    const setAudioData = () => {
      setDuration(audio.duration);
      setCurrentTime(audio.currentTime);
    };

    const updateTime = () => setCurrentTime(audio.currentTime);

    audio.addEventListener("loadedmetadata", setAudioData);
    audio.addEventListener("timeupdate", updateTime);

    return () => {
      audio.removeEventListener("loadedmetadata", setAudioData);
      audio.removeEventListener("timeupdate", updateTime);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = (e) => {
    const audio = audioRef.current;
    const newTime = e.target.value;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleRewind = () => {
    const audio = audioRef.current;
    audio.currentTime = Math.max(audio.currentTime - 10, 0);
  };

  const handleForward = () => {
    const audio = audioRef.current;
    audio.currentTime = Math.min(audio.currentTime + 10, duration);
  };

  return (
    <div className="music_container">
      {/* Прогресс-бар сверху */}
      <input
        type="range"
        min="0"
        max={duration}
        value={currentTime}
        onChange={handleProgressChange}
        className="progress_bar"
      />

      {/* Панель управления + иконки */}
      <div className="music_controls">
        <img className="heart_music" src={heart} alt="heart" />

        <button className="start_end" onClick={handleRewind}>
          <img src={start} alt="rewind" />
        </button>

        <button className="music_btn" onClick={togglePlay}>
          {isPlaying ? (
            <img src={stop} alt="stop" />
          ) : (
            <img src={play} alt="play" />
          )}
        </button>

        <button className="start_end" onClick={handleForward}>
          <img src={end} alt="forward" />
        </button>

        <img className="heart_music" src={music} alt="music" />
      </div>
    </div>
  );
}

export default MusicPlayer;
