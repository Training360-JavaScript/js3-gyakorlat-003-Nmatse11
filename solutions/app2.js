'use strict';
const cookieHandler = {
  setCookie(name, value) {
    const now = new Date();
    now.setTime(now.getTime() + (15 * 60 * 1000));
    let expires = now.toUTCString();
    //document.cookie = `${name}=${value};expires=${expires}`;
  },
  getAll() {
    //const listCookies = document.cookie.split('; ');
    let cookies = {};
    for (let i = 0; i < listCookies.length; i++) {
      let cookie = listCookies[i].split("=");
      cookies[(cookie[0])] = (cookie.slice(1).join(': '));
    }
    return cookies;
  },
  toSessionStorage() {
    //const listCookies = document.cookie.split('; ');
    for (let i = 0; i < listCookies.length; i++) {
      let cookie = listCookies[i].split("=");
      sessionStorage.setItem([cookie[0]], cookie[1])
    }
  },
  flush() {
    //let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      let name = cookies[i];
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }
}
cookieHandler.setCookie('viewed', '5');
cookieHandler.setCookie('uid', '354774631237');
cookieHandler.setCookie('ssid', 'Bx55OWbHJ0Vt_IGIF');
export { cookieHandler };
