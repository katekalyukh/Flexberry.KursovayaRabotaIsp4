import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТипФотоMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-rabota-isp4-тип-фото';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТипФотоMixin, Validations, {
});

defineProjections(Model);

export default Model;
