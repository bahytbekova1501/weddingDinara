// HomePage.jsx
import React, { useEffect, useState } from "react";
import "./App.css";
import image from "./img/свадьба2.jpg";
import hands from "./img/руки2.jpg";
import party from "./img/party.jfif";
import Calendar from "./componets/Сalendar";
import Time from "./componets/Time";
import arrow from "./img/arrows.png";
import MusicPlayer from "./componets/MusicPlayer";
import { useTranslation } from "react-i18next";
import { db } from "./firebase";
import { ref, push, set } from "firebase/database";

function HomePage() {
  const { t, i18n } = useTranslation();

  const [formValue, setFormValue] = useState({
    name: "",
    answer: "",
  });

  // Изменение значений формы
  const handleChange = (e) => {
    const obj = { ...formValue, [e.target.name]: e.target.value };
    setFormValue(obj);
  };

  // Отправка формы в Firebase
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formValue.name.trim() || !formValue.answer.trim()) {
      alert("Заполните поле!");
      return;
    }

    try {
      const answersRef = ref(db, "ask/answers");
      const newRef = push(answersRef);
      await set(newRef, {
        name: formValue.name,
        answer: formValue.answer,
      });
      alert("Ваши данные успешно сохранены!");
      setFormValue({ name: "", answer: "" });
    } catch (error) {
      console.error("Ошибка при добавлении в Firebase:", error);
      alert(
        "Ошибка соединения с сервером. Проверьте интернет или попробуйте позже."
      );
    }
  };

  // Анимации при скролле
  useEffect(() => {
    function handleScroll() {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((element) => {
        if (isElementInViewport(element)) {
          element.classList.add("show");
        }
      });
    }

    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  const quote = t("quote")
    .split("\n")
    .map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));

  return (
    <div>
      {/* Шапка с фото и музыкой */}
      <div className="gradient-mask">
        <img className="image_1" src={hands} alt="" />
        <div className="name">Саламат & Даяна</div>

        <div className="language-buttons ">
          <button
            className={`language ${i18n.language === "kg" ? "selected" : ""}`}
            onClick={() => changeLanguage("kg")}
          >
            Кыргызча
          </button>
          <button
            className={`language ${i18n.language === "ru" ? "selected" : ""}`}
            onClick={() => changeLanguage("ru")}
          >
            Русский
          </button>
        </div>

        <div className="music">
          <MusicPlayer />
        </div>
      </div>

      <div className="arrow_container">
        <div className="arrow_parent">
          <img className="arrow" src={arrow} alt="" />
        </div>
      </div>

      {/* Основной контент */}
      <div className="mobile-only">
        <div className="tetx_1 animate-on-scroll">{t("welcome")}</div>
        <div className="tetx_2 animate-on-scroll">{t("invitation")}</div>

        <div className="animate-on-scroll">
          <h2 className="date animate-on-scroll">{t("date")}</h2>
          <Calendar />
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <img className="image_2 animate-on-scroll" src={party} alt="" />
        </div>

        <div className="time animate-on-scroll">
          <h2 className="start animate-on-scroll" style={{ color: "#c5b396" }}>
            {t("start")}
          </h2>
          <h2 className="times animate-on-scroll">17:00</h2>
        </div>

        <div className="adress animate-on-scroll">
          <h2>{t("restaurant")}</h2>
          <p className="name_res animate-on-scroll">"Алтын Казына"</p>
          <p className="aadress_res animate-on-scroll">
            {t("city")}
            <br /> {t("address")}
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="image_3_container animate-on-scroll">
            <img className="image_3" src={image} alt="" />
            <div className="сountdown ">
              <Time />
            </div>
          </div>
        </div>

        {i18n.language === "kg" && (
          <div
            className="animate-on-scroll"
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h2
              style={{
                color: " #c5b396",
                fontSize: "7vw",
                fontWeight: "200",
                margin: "5vw 0 3vw 0",
              }}
            >
              {t("owners")}
            </h2>
            <p style={{ fontSize: "5.5vw", fontWeight: "200" }}>
              Бактыбек , Чолпон
            </p>
          </div>
        )}

        {/* Форма ответа */}
        <div className="answer_form_container">
          <h2
            className="anser_form_h2 animate-on-scroll"
            style={{ textAlign: "center" }}
          >
            {t("confirm")}
          </h2>
          <form
            onSubmit={handleSubmit}
            style={{
              maxWidth: "500px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div>
              <input
                className="main-input animate-on-scroll"
                value={formValue.name}
                onChange={handleChange}
                name="name"
                placeholder={t("yourName")}
              />
            </div>
            <div className="radio-container animate-on-scroll">
              <label className="radio-label">
                <input
                  className="radio-input"
                  type="radio"
                  value="Я приду"
                  checked={formValue.answer === "Я приду"}
                  onChange={handleChange}
                  name="answer"
                  required
                />
                {t("willCome")}
              </label>
              <label className="radio-label">
                <input
                  className="radio-input"
                  type="radio"
                  value="К сожалению не смогу присутствовать"
                  checked={
                    formValue.answer === "К сожалению не смогу присутствовать"
                  }
                  onChange={handleChange}
                  name="answer"
                  required
                />
                {t("cannotCome")}
              </label>
            </div>
            <div className="btn-container">
              <button className="btn animate-on-scroll" type="submit">
                {t("send")}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div>
        <h2 className="quote animate-on-scroll">{quote}</h2>
      </div>
    </div>
  );
}

export default HomePage;
