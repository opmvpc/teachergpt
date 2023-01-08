export class LocalStorage {
  private static readonly namespace = "teachergpt";

  static get(key: string): string | null {
    return localStorage.getItem(`${LocalStorage.namespace}:${key}`);
  }

  static set(key: string, value: string): void {
    localStorage.setItem(`${LocalStorage.namespace}:${key}`, value);
  }

  static remove(key: string): void {
    localStorage.removeItem(`${LocalStorage.namespace}:${key}`);
  }
}
