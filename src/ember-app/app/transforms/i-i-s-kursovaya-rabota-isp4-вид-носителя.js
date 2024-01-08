import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ВидНосителяEnum from '../enums/i-i-s-kursovaya-rabota-isp4-вид-носителя';

export default FlexberryEnum.extend({
  enum: ВидНосителяEnum,
  sourceType: 'IIS.KursovayaRabotaIsp4.ВидНосителя'
});
