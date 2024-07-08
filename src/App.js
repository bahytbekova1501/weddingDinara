import "./App.css";
import i18n from "i18next";
import HomePage from "./HomePage";
import { I18nextProvider } from "react-i18next";
import { initReactI18next } from "react-i18next";
import ruTranslation from "./translate/ru.json";
import kgTranslation from "./translate/kg.json";
i18n.use(initReactI18next).init({
  resources: {
    ru: {
      translation: ruTranslation,
    },
    kg: {
      translation: kgTranslation,
    },
  },
  lng: "kg", // Устанавливаем русский язык по умолчанию
  fallbackLng: "ru", // При отсутствии перевода, используем русский язык
  interpolation: {
    escapeValue: false, // Не экранировать HTML-символы
  },
});

function App() {
  return (
    <div className="App">
      <I18nextProvider i18n={i18n}>
        <HomePage />
      </I18nextProvider>
    </div>
  );
}

export default App;
