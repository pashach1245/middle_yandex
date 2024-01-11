import Handlebars from "handlebars";

export { default as ProfilePage } from "./Profile.hbs?raw";

Handlebars.registerHelper("profileDatas", () => {
  return [
    {
      label: "Почта",
      value: "pochta@yandex.ru",
      type: "email",
      name: "email",
    },
    {
      label: "Логин",
      value: "ivanivanov",
      name: "login",
      type: "text",
    },
    {
      label: "Имя",
      value: "Иван",
      name: "first_name",
      type: "text",
    },
    {
      label: "Фамилия",
      value: "Иванов",
      name: "second_name",
      type: "text",
    },
    {
      label: "Имя в чате",
      value: "Иван",
      name: "display_name",
      type: "text",
    },
    {
      label: "Телефон",
      value: "+7(909)9673030",
      type: "tel",
      name: "phone",
    },
  ];
});
