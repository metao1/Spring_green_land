import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {CrudService} from '@app/core/service/crud.service';
import {REQUEST_OPTIONS_DEFAULT} from '@app/core/service/request-options.default';
import {BASE_API_URL} from '@app/core/service/base-api-url.default';

import {MoistureSensor} from '@app/shared/model/rpicomponent/moisture-sensor/moisture-sensor.model';

@Injectable()
export class MoistureSensorService extends CrudService<MoistureSensor, number> {

  constructor(http: Http) {
    super(BASE_API_URL + "component/moisture", http, REQUEST_OPTIONS_DEFAULT)
  }

}
