import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya-rabota-isp4-оператор', 'Unit | Model | i-i-s-kursovaya-rabota-isp4-оператор', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-kursovaya-rabota-isp4-заказ',
    'model:i-i-s-kursovaya-rabota-isp4-клиент',
    'model:i-i-s-kursovaya-rabota-isp4-оператор',
    'model:i-i-s-kursovaya-rabota-isp4-проверка-киоска',
    'model:i-i-s-kursovaya-rabota-isp4-тип-фото',
    'model:i-i-s-kursovaya-rabota-isp4-фото',
    'model:i-i-s-kursovaya-rabota-isp4-фотокиоск',
    'model:i-i-s-kursovaya-rabota-isp4-чек',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
