import Handlebars from "handlebars";
import * as Components from "./components";
import * as Pages from "./pages";
import { registerComponent } from "./core/resgiterComponent";

const pages = {
  MainPage: Pages.MainPage,
  ProfilePage: Pages.ProfilePage,
  AuthPage: Pages.AuthPage,
  RegistrationPage: Pages.RegistrationPage,
  ProfileEditPage: Pages.ProfileEditPage,
  PasswordEditPage: Pages.PasswordEditPage,
  Error404: Pages.Error404Page,
  Error500: Pages.Error500Page,
  ChatPage: Pages.ChatPage,
};

Handlebars.registerPartial("SimpleForm", Components.SimpleForm);
Handlebars.registerPartial("FormAuth", Components.FormAuth);

registerComponent("Button", Components.Button);
registerComponent("LeftAside", Components.LeftAside);
registerComponent("ProfileInput", Components.ProfileInput);
registerComponent("Input", Components.Input);
registerComponent("ChatList", Components.ChatList);
registerComponent("ChatListInput", Components.ChatListInput);
registerComponent("ChatListItem", Components.ChatListItem);
registerComponent("ActiveChat", Components.ActiveChat);
registerComponent("ActiveChatBody", Components.ActiveChatBody);
registerComponent("ActiveChatFooter", Components.ActiveChatFooter);
registerComponent("ChatMessage", Components.ChatMessage);
registerComponent("CommonInput", Components.CommonInput);
registerComponent("ErrorLine", Components.ErrorLine);

export function navigate(page: string) {
  const app = document.getElementById("app");
  if (!app) return;

  app.innerHTML = "";
  //@ts-ignore
  const Component = pages[page];
  const component = new Component();
  app?.append(component.getContent()!);
}

document.addEventListener("DOMContentLoaded", () => navigate("MainPage"));

document.addEventListener("click", (e) => {
  //@ts-ignore
  const page = e.target.getAttribute("page");
  if (page) {
    navigate(page);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});
