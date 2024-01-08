import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKursovayaRabotaIsp4ЗаказLForm from './forms/i-i-s-kursovaya-rabota-isp4-заказ-l';
import IISKursovayaRabotaIsp4КлиентLForm from './forms/i-i-s-kursovaya-rabota-isp4-клиент-l';
import IISKursovayaRabotaIsp4ОператорLForm from './forms/i-i-s-kursovaya-rabota-isp4-оператор-l';
import IISKursovayaRabotaIsp4ПроверкаКиоскаLForm from './forms/i-i-s-kursovaya-rabota-isp4-проверка-киоска-l';
import IISKursovayaRabotaIsp4ТипФотоLForm from './forms/i-i-s-kursovaya-rabota-isp4-тип-фото-l';
import IISKursovayaRabotaIsp4ФотокиоскLForm from './forms/i-i-s-kursovaya-rabota-isp4-фотокиоск-l';
import IISKursovayaRabotaIsp4ЧекLForm from './forms/i-i-s-kursovaya-rabota-isp4-чек-l';
import IISKursovayaRabotaIsp4ЗаказEForm from './forms/i-i-s-kursovaya-rabota-isp4-заказ-e';
import IISKursovayaRabotaIsp4КлиентEForm from './forms/i-i-s-kursovaya-rabota-isp4-клиент-e';
import IISKursovayaRabotaIsp4ОператорEForm from './forms/i-i-s-kursovaya-rabota-isp4-оператор-e';
import IISKursovayaRabotaIsp4ПроверкаКиоскаEForm from './forms/i-i-s-kursovaya-rabota-isp4-проверка-киоска-e';
import IISKursovayaRabotaIsp4ТипФотоEForm from './forms/i-i-s-kursovaya-rabota-isp4-тип-фото-e';
import IISKursovayaRabotaIsp4ФотокиоскEForm from './forms/i-i-s-kursovaya-rabota-isp4-фотокиоск-e';
import IISKursovayaRabotaIsp4ЧекEForm from './forms/i-i-s-kursovaya-rabota-isp4-чек-e';
import IISKursovayaRabotaIsp4ЗаказModel from './models/i-i-s-kursovaya-rabota-isp4-заказ';
import IISKursovayaRabotaIsp4КлиентModel from './models/i-i-s-kursovaya-rabota-isp4-клиент';
import IISKursovayaRabotaIsp4ОператорModel from './models/i-i-s-kursovaya-rabota-isp4-оператор';
import IISKursovayaRabotaIsp4ПроверкаКиоскаModel from './models/i-i-s-kursovaya-rabota-isp4-проверка-киоска';
import IISKursovayaRabotaIsp4ТипФотоModel from './models/i-i-s-kursovaya-rabota-isp4-тип-фото';
import IISKursovayaRabotaIsp4ФотоModel from './models/i-i-s-kursovaya-rabota-isp4-фото';
import IISKursovayaRabotaIsp4ФотокиоскModel from './models/i-i-s-kursovaya-rabota-isp4-фотокиоск';
import IISKursovayaRabotaIsp4ЧекModel from './models/i-i-s-kursovaya-rabota-isp4-чек';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kursovaya-rabota-isp4-заказ': IISKursovayaRabotaIsp4ЗаказModel,
    'i-i-s-kursovaya-rabota-isp4-клиент': IISKursovayaRabotaIsp4КлиентModel,
    'i-i-s-kursovaya-rabota-isp4-оператор': IISKursovayaRabotaIsp4ОператорModel,
    'i-i-s-kursovaya-rabota-isp4-проверка-киоска': IISKursovayaRabotaIsp4ПроверкаКиоскаModel,
    'i-i-s-kursovaya-rabota-isp4-тип-фото': IISKursovayaRabotaIsp4ТипФотоModel,
    'i-i-s-kursovaya-rabota-isp4-фото': IISKursovayaRabotaIsp4ФотоModel,
    'i-i-s-kursovaya-rabota-isp4-фотокиоск': IISKursovayaRabotaIsp4ФотокиоскModel,
    'i-i-s-kursovaya-rabota-isp4-чек': IISKursovayaRabotaIsp4ЧекModel
  },

  'application-name': 'Kursovaya rabota isp4',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Kursovaya rabota isp4',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya rabota isp4',
          title: 'Kursovaya rabota isp4'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'kursovaya-rabota-isp4': {
          caption: 'KursovayaRabotaIsp4',
          title: 'KursovayaRabotaIsp4',
          'i-i-s-kursovaya-rabota-isp4-фотокиоск-l': {
            caption: 'Фотокиоск',
            title: ''
          },
          'i-i-s-kursovaya-rabota-isp4-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-kursovaya-rabota-isp4-проверка-киоска-l': {
            caption: 'Проверка киоска',
            title: ''
          },
          'i-i-s-kursovaya-rabota-isp4-тип-фото-l': {
            caption: 'Тип фото',
            title: ''
          },
          'i-i-s-kursovaya-rabota-isp4-чек-l': {
            caption: 'Чек',
            title: ''
          },
          'i-i-s-kursovaya-rabota-isp4-заказ-l': {
            caption: 'Заказ',
            title: ''
          },
          'i-i-s-kursovaya-rabota-isp4-оператор-l': {
            caption: 'Оператор',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-kursovaya-rabota-isp4-заказ-l': IISKursovayaRabotaIsp4ЗаказLForm,
    'i-i-s-kursovaya-rabota-isp4-клиент-l': IISKursovayaRabotaIsp4КлиентLForm,
    'i-i-s-kursovaya-rabota-isp4-оператор-l': IISKursovayaRabotaIsp4ОператорLForm,
    'i-i-s-kursovaya-rabota-isp4-проверка-киоска-l': IISKursovayaRabotaIsp4ПроверкаКиоскаLForm,
    'i-i-s-kursovaya-rabota-isp4-тип-фото-l': IISKursovayaRabotaIsp4ТипФотоLForm,
    'i-i-s-kursovaya-rabota-isp4-фотокиоск-l': IISKursovayaRabotaIsp4ФотокиоскLForm,
    'i-i-s-kursovaya-rabota-isp4-чек-l': IISKursovayaRabotaIsp4ЧекLForm,
    'i-i-s-kursovaya-rabota-isp4-заказ-e': IISKursovayaRabotaIsp4ЗаказEForm,
    'i-i-s-kursovaya-rabota-isp4-клиент-e': IISKursovayaRabotaIsp4КлиентEForm,
    'i-i-s-kursovaya-rabota-isp4-оператор-e': IISKursovayaRabotaIsp4ОператорEForm,
    'i-i-s-kursovaya-rabota-isp4-проверка-киоска-e': IISKursovayaRabotaIsp4ПроверкаКиоскаEForm,
    'i-i-s-kursovaya-rabota-isp4-тип-фото-e': IISKursovayaRabotaIsp4ТипФотоEForm,
    'i-i-s-kursovaya-rabota-isp4-фотокиоск-e': IISKursovayaRabotaIsp4ФотокиоскEForm,
    'i-i-s-kursovaya-rabota-isp4-чек-e': IISKursovayaRabotaIsp4ЧекEForm
  },

});

export default translations;
