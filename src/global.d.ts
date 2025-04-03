
import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppComponent } from './App';

declare global {
  interface Window {
    React: typeof React;
    ReactDOM: typeof ReactDOM;
    App: AppComponent;
  }
}
