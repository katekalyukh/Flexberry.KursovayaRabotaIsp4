import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  вид: DS.attr('i-i-s-kursovaya-rabota-isp4-выбор-вида'),
  код: DS.attr('number'),
  стоимость: DS.attr('number')
});

export let ValidationRules = {
  вид: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-isp4-тип-фото.validations.вид.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  код: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-isp4-тип-фото.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  стоимость: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-isp4-тип-фото.validations.стоимость.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТипФотоE', 'i-i-s-kursovaya-rabota-isp4-тип-фото', {
    код: attr('Код', { index: 0 }),
    вид: attr('Вид', { index: 1 }),
    стоимость: attr('Стоимость', { index: 2 })
  });

  modelClass.defineProjection('ТипФотоL', 'i-i-s-kursovaya-rabota-isp4-тип-фото', {
    код: attr('Код', { index: 0 }),
    вид: attr('Вид', { index: 1 }),
    стоимость: attr('Стоимость', { index: 2 })
  });
};
