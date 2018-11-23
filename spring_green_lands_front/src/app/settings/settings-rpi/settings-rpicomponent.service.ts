import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import {ToasterService} from '@app/core/component/toaster/toaster.service';

import {RPiComponent} from '@app/shared/model/rpicomponent/rpicomponent.model';
import {RPiComponentType} from '@app/shared/model/rpicomponent/rpicomponent-type.enum';

@Injectable()
export class SettingsRPiComponentService {

  public selectedComponent = new Subject<RPiComponent>();
  public componentFilter = new BehaviorSubject<RPiComponentType>(RPiComponentType.ALL);

  constructor(
    private toasterService: ToasterService,
  ) {}

  setSelectedComponent(component: RPiComponent) {
    this.selectedComponent.next(component);
  }

  setComponentFilter(filter: RPiComponentType) {
    this.componentFilter.next(filter);
  }

}
