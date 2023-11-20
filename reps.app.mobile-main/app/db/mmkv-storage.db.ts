import { MMKVInstance, MMKVLoader } from 'react-native-mmkv-storage';

// Import { MutatorFunction } from 'react-native-mmkv-storage/dist/src/transactions';

export const MMKV = new MMKVLoader().initialize();

type MMKVCallBack = (injectMMKV: MMKVInstance) => void;

export function initWithMMKV(callback: MMKVCallBack): void {
  callback(MMKV);
}

MMKV.transactions.register(
  'object',
  'onwrite',
  (key: string, value?: unknown) => {
    console.log(
      JSON.stringify(
        {
          InstanceID: MMKV.instanceID,
          TransactionType: 'object:onwrite',
          key: key,
          value: value,
        },
        null,
        4,
      ),
    );
  },
);
