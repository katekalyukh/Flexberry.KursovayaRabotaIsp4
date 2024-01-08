import {
  defineNamespace,
  defineProjections,
  Model as ТипФотоMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-rabota-isp4-тип-фото';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТипФотоMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
