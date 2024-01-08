import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.kursovaya-rabota-isp4.caption'),
          title: i18n.t('forms.application.sitemap.kursovaya-rabota-isp4.title'),
          children: [{
            link: 'i-i-s-kursovaya-rabota-isp4-фотокиоск-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota-isp4.i-i-s-kursovaya-rabota-isp4-фотокиоск-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota-isp4.i-i-s-kursovaya-rabota-isp4-фотокиоск-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-isp4-клиент-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota-isp4.i-i-s-kursovaya-rabota-isp4-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota-isp4.i-i-s-kursovaya-rabota-isp4-клиент-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-isp4-проверка-киоска-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota-isp4.i-i-s-kursovaya-rabota-isp4-проверка-киоска-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota-isp4.i-i-s-kursovaya-rabota-isp4-проверка-киоска-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-isp4-тип-фото-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota-isp4.i-i-s-kursovaya-rabota-isp4-тип-фото-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota-isp4.i-i-s-kursovaya-rabota-isp4-тип-фото-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-isp4-чек-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota-isp4.i-i-s-kursovaya-rabota-isp4-чек-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota-isp4.i-i-s-kursovaya-rabota-isp4-чек-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-isp4-заказ-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota-isp4.i-i-s-kursovaya-rabota-isp4-заказ-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota-isp4.i-i-s-kursovaya-rabota-isp4-заказ-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-isp4-оператор-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota-isp4.i-i-s-kursovaya-rabota-isp4-оператор-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota-isp4.i-i-s-kursovaya-rabota-isp4-оператор-l.title'),
            icon: 'phone',
            children: null
          }]
        }
      ]
    };
  }),
})