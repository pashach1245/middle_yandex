export const login = (value: string) => {
  if (value.length === 0) {
    return "Поле не может быть пустым";
  }
  if (value.length < 3 || value.length > 20) {
    return "Недопустимая длина. Необходимо от 3 до 20 символов";
  }
  return false;
};

export const password = (value: string) => {
  if (value.length === 0) {
    return "Поле не может быть пустым";
  }
  if (value.length < 8 || value.length > 40) {
    return "Недопустимая длина. Необходимо от 8 до 40 символов";
  }
  return false;
};

export const email = (value: string) => {
  if (value.length === 0) {
    return "Поле не может быть пустым";
  }
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
    return "Некорректная почта";
  }
  return false;
};

export const name = (value: string) => {
  if (value.length === 0) {
    return "Поле не может быть пустым";
  }
  if (/^(?:[А-ЯЁA-Z][а-яёa-z]+)$/.test(value)) {
    return "Используйте латиницу/кириллицу, первая буква - заглавная";
  }
  return false;
};

export const phone = (value: string) => {
  if (value.length === 0) {
    return "Поле не может быть пустым";
  }
  if (value.length < 10 || value.length > 15) {
    return "Недопустимая длина. Необходимо от 10 до 15 символов";
  }

  return false;
};
