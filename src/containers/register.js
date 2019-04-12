import { Container } from "unstated";

class ValidateContainer extends Container {
  state = {
    session: null,
    expirationTime: null,
    authLevel: null,
    privKey: null,
    keyPair: null
  };

  updateSession(newSession) {
    this.state.session = newSession;
    window.sessionStorage.setItem("bolidSession", newSession);
  }

  getSession() {
    return this.state.session;
  }

  updateExpirationTime(newDate) {
    this.state.expirationTime = newDate;
    window.sessionStorage.setItem("sessionExpirationTime", newDate);
  }

  getExpirationTime() {
    return this.state.expirationTime;
  }

  updateAuthLevel(newLevel) {
    this.state.authLevel = newLevel;
    window.sessionStorage.setItem("bolidLevel", newLevel);
  }

  getAuthLevel() {
    return this.state.authLevel;
  }

  updatePrivKey(newPrivKey) {
    this.state.privKey = newPrivKey;
  }

  getPrivKey() {
    return this.state.privKey;
  }

  updateAdminKey(adminKey) {
    this.state.adminKey = adminKey;
  }

  getAdminKey() {
    return this.state.adminKey;
  }

  auth1(Level) {
    this.state.authLevel = Level;
    window.sessionStorage.setItem("bolidLevel", Level);
  }
}

export const validateContainer = new ValidateContainer();
