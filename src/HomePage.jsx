import React, { useState } from "react";
import "./App.css";
import image from "./img/свадьба2.jpg";
import hands from "./img/руки.jfif";
import party from "./img/party.jfif";
import Calendar from "./componets/Сalendar";
import serebro from "./img/серебро3.png";
import zoloto from "./img/золото.png";
import Time from "./componets/Time";
import ProductList from "./componets/ProductList";
import { useProductContext } from "./Context/ProductContext";
import MusicPlayer from "./componets/MusicPlayer";
import { useTranslation } from "react-i18next";

function HomePage() {
  const { t, i18n } = useTranslation();

  const { addAns } = useProductContext();
  const [formValue, setFormValue] = useState({
    name: "",
    answer: "",
  });

  function handleChange(e) {
    const obj = {
      ...formValue,
      [e.target.name]: e.target.value,
    };
    setFormValue(obj);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!formValue.name.trim() || !formValue.answer.trim()) {
      alert("Заполните поле!");
      return;
    }

    addAns(formValue);
    setFormValue({
      name: "",
      answer: "",
    });
  }
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div>
      <div className="gradient-mask">
        <img className="image_1" src={hands} alt="" />{" "}
        <div className="name">Саламат & Даяна</div>
        {/* <button className="language">русс|кырг </button> */}
        <div className="language-buttons">
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
      {/* <img className="blesk" style={{ width: "100%" }} src={serebro} alt="" /> */}
      <div className="mobile-only">
        <div className="tetx_1">{t("welcome")}</div>
        <div className="tetx_2">{t("invitation")}</div>
        {/* <img className="blesk" style={{ width: "100%" }} src={serebro} alt="" /> */}
        <div>
          <h2 className="date"> {t("date")}</h2>
          <Calendar />
        </div>
        {/* <div style={{ position: "relative" }}> */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img className="image_2" src={party} alt="" />
        </div>
        {/* <img
            className="blesk"
            style={{ width: "100%", position: "absolute" }}
            src={serebro}
            alt=""
          /> */}
        {/* </div> */}
        <div className="time">
          {" "}
          <h2 className="start" style={{ color: "#c5b396" }}>
            {t("start")}
          </h2>
          <h2 className="times">17:00</h2>
        </div>
        <div className="adress">
          <h2>{t("restaurant")}</h2>
          <p className="name_res">"Алтын Казына"</p>
          <p className="aadress_res">
            {t("city")}
            <br /> {t("address")}
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="image_3_container">
            <img className="image_3" src={image} alt="" />

            <div className="сountdown">
              <Time />
            </div>
          </div>{" "}
        </div>
        {i18n.language === "kg" && (
          <div
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
            <p
              style={{
                fontSize: "5.5vw",
                fontWeight: "200",
              }}
            >
              Бактыбек , Чолпон
            </p>
          </div>
        )}
        <div>
          <div className="answer_form_container">
            <h2 className="anser_form_h2" style={{ textAlign: "center" }}>
              {t("confirm")}{" "}
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
                {/* <p>{t("names")}</p> */}
                <input
                  className="main-input"
                  value={formValue.name}
                  onChange={(e) => handleChange(e)}
                  label="name"
                  name="name"
                  placeholder={t("yourName")}
                  variant="outlined"
                />{" "}
              </div>
              <div className="radio-container">
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
                {/* <label className="radio-label">
                  <input
                    className="radio-input"
                    type="radio"
                    value="Мы придем с партнером"
                    checked={formValue.answer === "Мы придем с партнером"}
                    onChange={handleChange}
                    name="answer"
                    required
                  />
                  {t("willComeWithPartner")}
                </label> */}
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
                <button
                  className={`btn ${
                    i18n.language === "kg" ? "kyrgyz-font" : "default-font"
                  }`}
                  type="submit"
                  variant="contained"
                >
                  {t("send")}
                </button>
              </div>
            </form>
          </div>
          {/* <div style={{ margin: "5vw" }}>
            <ProductList />
          </div> */}
        </div>
      </div>
      {/* <div>
        <h2> </h2>
      </div> */}
    </div>
  );
}

export default HomePage;
