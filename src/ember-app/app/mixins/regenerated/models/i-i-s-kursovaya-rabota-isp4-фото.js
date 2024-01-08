import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  типФото: DS.belongsTo('i-i-s-kursovaya-rabota-isp4-тип-фото', { inverse: null, async: false }),
  заказ: DS.belongsTo('i-i-s-kursovaya-rabota-isp4-заказ', { inverse: 'фото', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-isp4-фото.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  типФото: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-isp4-фото.validations.типФото.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  заказ: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-isp4-фото.validations.заказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФотоE', 'i-i-s-kursovaya-rabota-isp4-фото', {
    количество: attr('Количество', { index: 0 }),
    типФото: belongsTo('i-i-s-kursovaya-rabota-isp4-тип-фото', 'Вид фото', {
      вид: attr('Вид фото', { index: 1 }),
      стоимость: attr('Стоимость', { index: 2 })
    }, { index: -1, hidden: true })
  });

  modelClass.defineProjection('ФотоL', 'i-i-s-kursovaya-rabota-isp4-фото', {
    количество: attr('Количество', { index: 0 }),
    типФото: belongsTo('i-i-s-kursovaya-rabota-isp4-тип-фото', 'Вид фото', {
      вид: attr('Вид фото', { index: 1 }),
      стоимость: attr('Стоимость', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
