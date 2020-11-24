import Cookie from "js-cookie";

export const ACCESS_TOKEN = "access_token";

export const COOKIE_CONSENT = "cookie_consent";

export function getCookie(key) {
  return Cookie.get(key);
}

export function setCookie(key, value, expiryInDays = 30) {
  Cookie.set(key, value, {
    expires: expiryInDays,
    path: "/",
  });
}

export function getAccessToken() {
  return getCookie(ACCESS_TOKEN);
}

export function setAccessToken(accessToken, expiryInDays = 30) {
  setCookie(ACCESS_TOKEN, accessToken, expiryInDays);
}

/* Cookie Consent Utils */

export function getCookieConsent() {
  return getCookie(COOKIE_CONSENT);
}

export function setCookieConsent(consentToken, expiryInDays) {
  setCookie(COOKIE_CONSENT, consentToken, expiryInDays);
}

export function clearUserSession() {
  Cookie.remove(ACCESS_TOKEN, { path: "/" });
}
