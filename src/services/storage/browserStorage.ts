type TLocalStorageKeys =
  | "auth"
  | "token"
  | "cardProducts"
  | "i18nextLng"
  | "currentLocation";
class ApiStorage {
  public get<T>(key: TLocalStorageKeys): any {
    if (!(key in localStorage)) return undefined;
    const savedData = localStorage.getItem(key) as T | string;
    return savedData as any;
  }

  public getParse<T>(key: TLocalStorageKeys): T | undefined | string {
    if (!(key in localStorage)) return undefined;
    const savedData = localStorage.getItem(key) as string;
    return JSON.parse(savedData);
  }

  public set<T, K extends TLocalStorageKeys>(
    key: K,
    savingData: T | string
  ): void | undefined {
    if (!savingData) return undefined;
    if (typeof savingData === "object") {
      savingData = JSON.stringify(savingData);
    }
    localStorage.setItem(key, savingData as string);
  }

  public update<T extends TLocalStorageKeys, K extends string>(
    key: K,
    newData: T
  ): string {
    if (!(key in localStorage)) return "key_not_available";
    localStorage.setItem(key, newData as string);

    return "update_success";
  }

  public remove(key: TLocalStorageKeys) {
    if (key in localStorage) {
      localStorage.removeItem(key);
    }
  }
}

const browserStorage = new ApiStorage();

export default browserStorage;
