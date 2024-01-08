import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ВыборВидаEnum from '../enums/i-i-s-kursovaya-rabota-isp4-выбор-вида';

export default FlexberryEnum.extend({
  enum: ВыборВидаEnum,
  sourceType: 'IIS.KursovayaRabotaIsp4.ВыборВида'
});
