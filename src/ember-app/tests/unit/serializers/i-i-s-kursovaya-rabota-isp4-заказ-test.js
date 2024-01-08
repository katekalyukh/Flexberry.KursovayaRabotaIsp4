import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya-rabota-isp4-заказ', 'Unit | Serializer | i-i-s-kursovaya-rabota-isp4-заказ', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kursovaya-rabota-isp4-заказ',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-kursovaya-rabota-isp4-вид-носителя',
    'transform:i-i-s-kursovaya-rabota-isp4-выбор-вида',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
