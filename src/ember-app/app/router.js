import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kursovaya-rabota-isp4-заказ-l');
  this.route('i-i-s-kursovaya-rabota-isp4-заказ-e',
  { path: 'i-i-s-kursovaya-rabota-isp4-заказ-e/:id' });
  this.route('i-i-s-kursovaya-rabota-isp4-заказ-e.new',
  { path: 'i-i-s-kursovaya-rabota-isp4-заказ-e/new' });
  this.route('i-i-s-kursovaya-rabota-isp4-клиент-l');
  this.route('i-i-s-kursovaya-rabota-isp4-клиент-e',
  { path: 'i-i-s-kursovaya-rabota-isp4-клиент-e/:id' });
  this.route('i-i-s-kursovaya-rabota-isp4-клиент-e.new',
  { path: 'i-i-s-kursovaya-rabota-isp4-клиент-e/new' });
  this.route('i-i-s-kursovaya-rabota-isp4-оператор-l');
  this.route('i-i-s-kursovaya-rabota-isp4-оператор-e',
  { path: 'i-i-s-kursovaya-rabota-isp4-оператор-e/:id' });
  this.route('i-i-s-kursovaya-rabota-isp4-оператор-e.new',
  { path: 'i-i-s-kursovaya-rabota-isp4-оператор-e/new' });
  this.route('i-i-s-kursovaya-rabota-isp4-проверка-киоска-l');
  this.route('i-i-s-kursovaya-rabota-isp4-проверка-киоска-e',
  { path: 'i-i-s-kursovaya-rabota-isp4-проверка-киоска-e/:id' });
  this.route('i-i-s-kursovaya-rabota-isp4-проверка-киоска-e.new',
  { path: 'i-i-s-kursovaya-rabota-isp4-проверка-киоска-e/new' });
  this.route('i-i-s-kursovaya-rabota-isp4-тип-фото-l');
  this.route('i-i-s-kursovaya-rabota-isp4-тип-фото-e',
  { path: 'i-i-s-kursovaya-rabota-isp4-тип-фото-e/:id' });
  this.route('i-i-s-kursovaya-rabota-isp4-тип-фото-e.new',
  { path: 'i-i-s-kursovaya-rabota-isp4-тип-фото-e/new' });
  this.route('i-i-s-kursovaya-rabota-isp4-фотокиоск-l');
  this.route('i-i-s-kursovaya-rabota-isp4-фотокиоск-e',
  { path: 'i-i-s-kursovaya-rabota-isp4-фотокиоск-e/:id' });
  this.route('i-i-s-kursovaya-rabota-isp4-фотокиоск-e.new',
  { path: 'i-i-s-kursovaya-rabota-isp4-фотокиоск-e/new' });
  this.route('i-i-s-kursovaya-rabota-isp4-чек-l');
  this.route('i-i-s-kursovaya-rabota-isp4-чек-e',
  { path: 'i-i-s-kursovaya-rabota-isp4-чек-e/:id' });
  this.route('i-i-s-kursovaya-rabota-isp4-чек-e.new',
  { path: 'i-i-s-kursovaya-rabota-isp4-чек-e/new' });
});

export default Router;
