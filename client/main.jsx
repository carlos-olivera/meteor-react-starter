import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from '/imports/ui/App';
import { BrowserRouter as Router } from "react-router-dom"
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'

Meteor.startup(() => {
  render(
    <I18nextProvider i18n={i18n}><Router>
    <App />
</Router></I18nextProvider>, document.getElementById('react-target'));
});
