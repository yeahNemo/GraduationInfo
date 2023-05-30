export function getToken() {
  return sessionStorage.getItem("token");
}

export function setToken(token) {
  sessionStorage.setItem("token", token);
}

export function removeToken() {
  sessionStorage.removeItem("token");
}

export function setUserId(id) {
  sessionStorage.setItem("userId", id);
}

export function getUserId() {
  return sessionStorage.getItem("userId");
}
