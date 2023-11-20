/**
 * @format
 */

import '@azure/core-asynciterator-polyfill';
import 'react-native-get-random-values';

import { AppRegistry } from 'react-native';
import { SQLiteAdapter } from '@aws-amplify/datastore-storage-adapter/SQLiteAdapter';
import { Amplify, DataStore } from 'aws-amplify';

import { name as appName } from './app.json';
import App from './app/App';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

DataStore.configure({
  storageAdapter: SQLiteAdapter,
});

AppRegistry.registerComponent(appName, () => App);
