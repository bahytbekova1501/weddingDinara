// HomePage.jsx
import React, { useEffect, useState } from "react";
import "./App.css";
import image from "./img/photo1.jpg";
import hands from "./img/руки2.jpg";
import party from "./img/party.jfif";
import Calendar from "./componets/Сalendar";
import Time from "./componets/Time";
import arrow from "./img/arrows.png";
import ring from "./img/кольца_золото.png";
import ring2 from "./img/кольца_серебро.png";
import phtoto13 from "./img/photo13.jpg";
import photo6 from "./img/photo6.jpg";
import flower1 from "./img/flower1.png";
import flower2 from "./img/flower2.png";
import flower3 from "./img/flower3.png";
import flower4 from "./img/flower4.png";
import flower5 from "./img/flower5.png";
import flower6 from "./img/flower6.png";
import flower7 from "./img/flower7.png";
import flower8 from "./img/flower8.png";
import flower9 from "./img/flower9.png";
import flower23 from "./img/flower23.png";
import flowerWhite from "./img/flowerWhite.png";
import krai from "./img/krai.png";
import krai2 from "./img/krai2.png";
import krai3 from "./img/krai3.png";
import krai4 from "./img/krai4.png";
import photoNew from "./img/photo22.jpg";

import lepestki from "./img/lepestki.png";
import restourant from "./img/Restourant.png";
import fon from "./img/fon2.png";
import MusicPlayer from "./componets/MusicPlayer";
import { useTranslation } from "react-i18next";
import { db } from "./firebase";
import { ref, push, set } from "firebase/database";

function HomePage() {
  const { t, i18n } = useTranslation();

  const [formValue, setFormValue] = useState({
    name: "",
    answer: "",
    alc: "",
  });

  // Изменение значений формы
  const handleChange = (e) => {
    const obj = { ...formValue, [e.target.name]: e.target.value };
    setFormValue(obj);
  };
  const handleDrinkChange = (e) => {
    const { value, checked } = e.target;
    let newAlc = formValue.alc ? [...formValue.alc] : [];
    if (checked) {
      newAlc.push(value);
    } else {
      newAlc = newAlc.filter((item) => item !== value);
    }
    setFormValue({ ...formValue, alc: newAlc });
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
        alc: formValue.alc,
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
  useEffect(() => {
    // Даем фокус body
    document.body.tabIndex = -1;
    document.body.focus();

    // Хак: имитация маленького скролла, чтобы «разбудить» скролл
    window.scrollTo(0, 1);
    setTimeout(() => window.scrollTo(0, 0), 50);
  }, []);
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
      <div className="gradient-mask">
        <img className="image_1" src={image} alt="" />
        <div className="name">
          <span style={{ display: "flex", justifyContent: "start" }}>
            Syimyk
          </span>

          <img className="ring" src={ring} alt="" />
          <span> &</span>
          <span style={{ display: "flex", justifyContent: "end" }}>Dinara</span>
        </div>
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
        <div className="flower_1">
          <img
            style={{ width: "30vw", height: "30vw" }}
            src={flowerWhite}
            alt=""
          />
        </div>
        {/* <div className="flower_1 flower_1_second">
          <img
            style={{ width: "30vw", height: "30vw" }}
            src={flowerWhite}
            alt=""
          />
        </div> */}
        <div className="flower_1 flower_1_third">
          <img style={{ width: "30vw", height: "30vw" }} src={flower8} alt="" />
        </div>
        <div className="flower_1 flower_1_fourth">
          <img style={{ width: "30vw", height: "30vw" }} src={flower8} alt="" />
        </div>
        <div className="flower_1 flower_1_fifth">
          <img style={{ width: "30vw", height: "30vw" }} src={flower8} alt="" />
        </div>
        <div className="flower_1 flower_1_sixth">
          <img
            style={{ width: "30vw", height: "30vw" }}
            src={flowerWhite}
            alt=""
          />
        </div>
        <div className="flower_1 flower_1_seventh">
          <img style={{ width: "30vw", height: "30vw" }} src={flower8} alt="" />
        </div>{" "}
        <div className="flower_1 flower_1_eighth">
          <img
            style={{ width: "30vw", height: "30vw" }}
            src={flowerWhite}
            alt=""
          />
        </div>
        <div className="flower_down">
          <div className="flowerWite_main">
            <img
              style={{ width: "30vw", height: "30vw" }}
              src={flowerWhite}
              alt=""
            />
          </div>
          <div className="flowerWite_main flowerWite_main_2">
            <img
              style={{ width: "30vw", height: "30vw" }}
              src={flower8}
              alt=""
            />
          </div>
          <div className="flowerWite_main flowerWite_main_3">
            <img
              style={{ width: "30vw", height: "30vw" }}
              src={flower8}
              alt=""
            />
          </div>{" "}
          <div className="flowerWite_main flowerWite_main_4">
            <img
              style={{ width: "30vw", height: "30vw" }}
              src={flowerWhite}
              alt=""
            />
          </div>{" "}
          <div className="flowerWite_main flowerWite_main_5">
            <img
              style={{ width: "30vw", height: "30vw" }}
              src={flower8}
              alt=""
            />
          </div>
        </div>
        <img className="krai" src={krai4} alt="" />
      </div>

      {/* <div className="arrow_container">
        <div className="arrow_parent">
          <img className="arrow" src={arrow} alt="" />
        </div>
      </div> */}

      {/* Основной контент */}
      <div className="mobile-only">
        <div className="tetx_1 animate-on-scroll">{t("welcome")}</div>
        <div className="tetx_2 animate-on-scroll">{t("invitation")}</div>
        <div className="animate-on-scroll">
          <h2 className="date animate-on-scroll">{t("date")}</h2>
          <Calendar />
        </div>
        <div className="image_2_block ">
          <img className="krai_2" src={krai4} alt="" />
          <img className="krai_3" src={krai3} alt="" />
          <img className="image_2" src={phtoto13} alt="" />
        </div>
        <div className="adress_block">
          <div className="flower_adress_block ">
            <div className="flower_adress ">
              <img
                style={{ width: "30vw", height: "30vw" }}
                src={flowerWhite}
                alt=""
              />
            </div>
            <div className="flower_adress flower_adress_2">
              <img
                style={{ width: "30vw", height: "30vw" }}
                src={flower8}
                alt=""
              />
            </div>
            <div className="flower_adress flower_adress_3">
              <img
                style={{ width: "30vw", height: "30vw" }}
                src={flower8}
                alt=""
              />
            </div>{" "}
            <div className="flower_adress flower_adress_4">
              <img
                style={{ width: "30vw", height: "30vw" }}
                src={flowerWhite}
                alt=""
              />
            </div>{" "}
            <div className="flower_adress flower_adress_5">
              <img
                style={{ width: "30vw", height: "30vw" }}
                src={flower8}
                alt=""
              />
            </div>
            <div className="flower_adress flower_adress_6">
              <img
                style={{ width: "30vw", height: "30vw" }}
                src={flowerWhite}
                alt=""
              />
            </div>{" "}
            <div className="flower_adress flower_adress_7">
              <img
                style={{ width: "30vw", height: "30vw" }}
                src={flower8}
                alt=""
              />
            </div>{" "}
            <div className="flower_adress flower_adress_8">
              <img
                style={{ width: "30vw", height: "30vw" }}
                src={flower8}
                alt=""
              />
            </div>{" "}
            <div className="flower_adress flower_adress_9">
              <img
                style={{ width: "30vw", height: "30vw" }}
                src={flowerWhite}
                alt=""
              />
            </div>{" "}
            <div className="flower_adress flower_adress_10">
              <img
                style={{ width: "30vw", height: "30vw" }}
                src={flowerWhite}
                alt=""
              />
            </div>{" "}
          </div>
          {/* <img
            style={{ width: "80%", height: "auto" }}
            className="lepestki"
            src={lepestki}
            alt=""
          />{" "} */}
          <div className="time animate-on-scroll">
            <h2
              className="start animate-on-scroll"
              style={{ color: "#6495ed", margin: "0 0 5vw 0" }}
            >
              {t("location")}
            </h2>
          </div>
          <div className="adress animate-on-scroll">
            {" "}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p
                style={{ color: " #002f55" }}
                className="aadress_res animate-on-scroll"
              >
                {t("city")}
              </p>
              <p style={{ color: " #002f55" }}>{t("address")}</p>
              <p style={{ color: " #002f55" }}>{t("restaurant")}</p>
            </div>
            <p className="name_res animate-on-scroll">"Достук"</p>
            <img className="restourant" src={restourant} alt="" />{" "}
            <button
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open(
                  "https://2gis.kg/tokmok/search/%D1%83%D0%BB%D0%B8%D1%86%D0%B0%20%D0%94%D1%83%D0%BD%D0%BB%D0%B0%D1%80%D0%BE%D0%B2%D0%B0%2C%C2%A0139%20%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BA/geo/70030076154887635?m=75.296248%2C42.849853%2F18.76",
                  "_blank"
                )
              }
              className="karta_btn"
            >
              {t("karta")}
            </button>
            <h2
              className="start animate-on-scroll"
              style={{
                color: "#6495ed",
                margin: "5vw 0 5vw 0",
                fontSize: "7vw",
                fontWeight: "400",
              }}
            >
              {t("start")}
            </h2>
            <h2
              style={{ color: " #002f55" }}
              className="times animate-on-scroll"
            >
              16:00
            </h2>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="image_3_container">
            <img className="image_3_krai" src={krai3} alt="" />{" "}
            <img className="image_3_krai_2" src={krai3} alt="" />
            <img className="image_3" src={photoNew} alt="" />
          </div>
        </div>{" "}
        <div className="сountdown ">
          <Time />
        </div>
        <div
          className="time_flowers_container"
          // className="animate-on-scroll"
        >
          <img
            style={{
              position: "absolute",
              width: "100%",
              bottom: "76%",
              transform: "rotate(180deg)",
            }}
            src={krai3}
            alt=""
          />
          <img
            style={{
              position: "absolute",
              zIndex: "-1",
              width: "100%",
              height: "640%",
              // height: "140%",
            }}
            src={fon}
            alt=""
          />
          {/* flowers */}
          <div className="flower_bottom_1 ">
            <img
              style={{ width: "30vw", height: "30vw" }}
              src={flowerWhite}
              alt=""
            />
          </div>{" "}
          <div className="flower_bottom_2">
            <img
              style={{ width: "30vw", height: "30vw" }}
              src={flower8}
              alt=""
            />
          </div>{" "}
          <div className="flower_bottom_3">
            <img
              style={{ width: "30vw", height: "30vw" }}
              src={flowerWhite}
              alt=""
            />
          </div>{" "}
          <div className="flower_bottom_4">
            <img
              style={{ width: "30vw", height: "30vw" }}
              src={flower8}
              alt=""
            />
          </div>{" "}
          <div className="flower_bottom_5">
            <img
              style={{ width: "30vw", height: "30vw" }}
              src={flowerWhite}
              alt=""
            />
          </div>{" "}
          {/* flower 2 */}
          <div className="flower_bottom_6">
            <img
              style={{ width: "30vw", height: "30vw" }}
              src={flowerWhite}
              alt=""
            />
          </div>{" "}
          <div className="flower_bottom_7">
            <img
              style={{ width: "30vw", height: "30vw" }}
              src={flower8}
              alt=""
            />
          </div>{" "}
          <div className="flower_bottom_8">
            <img
              style={{ width: "30vw", height: "30vw" }}
              src={flowerWhite}
              alt=""
            />
          </div>{" "}
          <div className="flower_bottom_9">
            <img
              style={{ width: "30vw", height: "30vw" }}
              src={flower8}
              alt=""
            />
          </div>{" "}
          <div className="flower_bottom_10">
            <img
              style={{ width: "30vw", height: "30vw" }}
              src={flower8}
              alt=""
            />
          </div>{" "}
          <h2
            style={{
              color: " #6495ed",
              fontSize: "7vw",
              fontWeight: "200",
              margin: "20vw 0 3vw 0",
            }}
          >
            {t("Wedding Hosts")}
          </h2>
          <p style={{ fontSize: "5.5vw", fontWeight: "200", color: "#002f55" }}>
            Талант , Ырыс
          </p>
        </div>
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
            {/* Имя */}
            <div>
              <input
                className="main-input animate-on-scroll"
                value={formValue.name}
                onChange={handleChange}
                name="name"
                placeholder={t("yourName")}
              />
            </div>

            {/* Ответ "приду/не приду" */}
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

            {/* Предпочтения по напиткам */}
            <div className="drink_preference animate-on-scroll">
              <h2 className="anser_form_h2_alc"> {t("alcohol")}</h2>
              <label>
                <input
                  className=" radio-input_2"
                  type="checkbox"
                  name="alc"
                  value="шампанское"
                  checked={formValue.alc.includes("шампанское")}
                  onChange={(e) => handleDrinkChange(e)}
                />{" "}
                {t("champagne")}
              </label>
              <label>
                <input
                  className="radio-input_2"
                  type="checkbox"
                  name="alc"
                  value="вино красное"
                  checked={formValue.alc.includes("вино красное")}
                  onChange={(e) => handleDrinkChange(e)}
                />{" "}
                {t("redWine")}
              </label>
              <label>
                <input
                  className=" radio-input_2"
                  type="checkbox"
                  name="alc"
                  value="вино белое"
                  checked={formValue.alc.includes("вино белое")}
                  onChange={(e) => handleDrinkChange(e)}
                />{" "}
                {t("whiteWine")}
              </label>
              <label>
                <input
                  className="radio-input_2 "
                  type="checkbox"
                  name="alc"
                  value="крепкий алкоголь"
                  checked={formValue.alc.includes("крепкий алкоголь")}
                  onChange={(e) => handleDrinkChange(e)}
                />{" "}
                {t("strongAlcohol")}
              </label>
              <label>
                <input
                  className="radio-input_2"
                  type="checkbox"
                  name="alc"
                  value="свой вариант"
                  checked={formValue.alc.includes("свой вариант")}
                  onChange={(e) => handleDrinkChange(e)}
                />{" "}
                {t("customOption")}
              </label>
            </div>

            {/* Кнопка отправки */}
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
