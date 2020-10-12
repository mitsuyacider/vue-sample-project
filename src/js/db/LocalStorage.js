const KEY_CREATION = "ia!2#";
const KEY_EXPIRATION = "Ls^ti";
const KEY_VALUE = "Gia9!";
const DEFAULT_LOCAL_STORSGE_CACHE_TIME = 60 * 60 * 24 * 30;

export default class LocalStorage {
  /**
   * NOTE: Store data related adminId
   * @param {String} key adminId/* (e.g. adminId/games, adminId/users, adminId/ownerships)
   * @param {Object} value
   * @param {Number|null} expirationSecond
   */
  static setItem(
    key,
    value,
    expirationSecond = DEFAULT_LOCAL_STORSGE_CACHE_TIME
  ) {
    let item = {};
    item[KEY_CREATION] = new Date().getTime();
    item[KEY_VALUE] = value;

    if (isNumber(expirationSecond)) {
      item[KEY_CREATION] = item[KEY_CREATION] + expirationSecond * 1000;
    }

    localStorage.setItem(key, JSON.stringify(item));
  }

  static getItem(key) {
    let item = window.localStorage.getItem(key);
    item = JSON.parse(item);

    if (!item) {
      return null;
    }

    //NOTE: Check expiration date
    const date = new Date();
    const isExpirated = KEY_EXPIRATION in item && date >= item[KEY_EXPIRATION];

    if (isExpirated) {
      this.deleteItem(key);
      return null;
    }

    return KEY_VALUE in item ? item[KEY_VALUE] : null;
  }

  static deleteItem(key) {
    window.localStorage.removeItem(key);
    return window.localStorage.getItem(key) === null;
  }
}

const isNumber = (value) => typeof value === "number" && !isNaN(value);
