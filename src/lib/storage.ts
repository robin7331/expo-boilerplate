import { createMMKV } from 'react-native-mmkv';

export const storage = createMMKV();

export const Storage = {
  set: (key: string, value: string | number | boolean) => {
    storage.set(key, value);
  },
  getString: (key: string) => storage.getString(key),
  getNumber: (key: string) => storage.getNumber(key),
  getBoolean: (key: string) => storage.getBoolean(key),
  delete: (key: string) => storage.remove(key),
  contains: (key: string) => storage.contains(key),
  clearAll: () => storage.clearAll(),
};
