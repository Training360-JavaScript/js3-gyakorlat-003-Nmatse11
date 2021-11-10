'use strict';
const setCookie = (value) => {
  const now = new Date();
  now.setTime(now.getTime() + (15 * 60 * 1000));
  let expires = now.toUTCString();
  document.cookie = `token=${value};expires=${expires}`;
}
export default setCookie;
