import Handlebars from "handlebars";
import * as Components from "./components";
import * as Pages from "./pages";

const pages = {
  MainPage: [Pages.MainPage],
  AuthPage: [Pages.AuthPage],
  RegistrationPage: [Pages.RegistrationPage],
  Error404: [
    Pages.ErrorPage,
    { errorCode: "404", errorTitle: "Не туда попали" },
  ],
  Error500: [
    Pages.ErrorPage,
    { errorCode: "500", errorTitle: "Мы уже фиксим" },
  ],
  ChatPage: [Pages.ChatPage],
  ProfilePage: [Pages.ProfilePage],
  ProfileEditPage: [Pages.ProfileEditPage],
  PasswordEditPage: [Pages.PasswordEditPage],
};

Object.entries(Components).forEach(([name, component]) => {
  Handlebars.registerPartial(name, component);
});

function navigate(page) {
  const [source, context] = pages[page];
  const container = document.getElementById("app");
  container.innerHTML = Handlebars.compile(source)(context);
}

document.addEventListener("DOMContentLoaded", () => navigate("MainPage"));

document.addEventListener("click", (e) => {
  const page = e.target.getAttribute("page");
  if (page) {
    navigate(page);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});
