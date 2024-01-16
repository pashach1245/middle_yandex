export { default as PasswordEditPage } from "./PasswordEdit.hbs?raw";
import Handlebars from "handlebars";

Handlebars.registerHelper("editPasswordData", () => {
  return [
    {
      label: "Старый пароль",
      value: "123",
      type: "password",
      name: "oldPassword",
    },
    {
      label: "Новый пароль",
      value: "123456",
      name: "newPassword",
      type: "password",
    },
    {
      label: "Повторите новый пароль",
      value: "123456",
      name: "newPassword",
      type: "password",
    },
  ];
});
