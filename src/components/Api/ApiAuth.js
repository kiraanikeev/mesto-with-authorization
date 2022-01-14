export const Base_url = "https://auth.nomoreparties.co";

export const result = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Что-то пошло не так: ${res.status}`);
  }
};

export const register = (password, email) => {
  return fetch(`${Base_url}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password,
      email,
    }),
  }).then(result);
};

export const login = (password, email) => {
  return fetch(`${Base_url}/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      password,
      email,
    }),
  }).then(result);
};

export const token = (JWT) => {
  return fetch(`${Base_url}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${JWT}`,
    },
  }).then(result);
};
