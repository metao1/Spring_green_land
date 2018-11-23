import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {CrudService} from '@app/core/service/crud.service';
import {REQUEST_OPTIONS_DEFAULT} from '@app/core/service/request-options.default';
import {BASE_API_URL} from '@app/core/service/base-api-url.default';

import {ProximitySensor} from '@app/shared/model/rpicomponent/proximity-sensor/proximity-sensor.model';

@Injectable()
export class ProximitySensorService extends CrudService<ProximitySensor, number> {

  constructor(http: Http) {
    super(BASE_API_URL + "component/proximity", http, REQUEST_OPTIONS_DEFAULT);
  }

}
