import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {RPiComponent} from '@app/shared/model/rpicomponent/rpicomponent.model';
import {RPiComponentType} from '@app/shared/model/rpicomponent/rpicomponent-type.enum';

import {SettingsRPiComponentService} from '../settings-rpicomponent.service';
import {ToasterService} from '@app/core/component/toaster/toaster.service';
import {ToastType} from '@app/core/component/toaster/toast-type.enum';

@Component({
  selector: 'app-rpicomponent-table',
  templateUrl: './rpicomponent-table.component.html',
  styleUrls: ['./rpicomponent-table.component.css']
})
export class RPiComponentTableComponent implements OnInit, OnDestroy {

  @Input()
  components: Array<RPiComponent>;

  filter: RPiComponentType;

  filterSubscription;

  constructor(
    private settingsRPiComponentService: SettingsRPiComponentService,
    private toasterService: ToasterService
  ) {}

  ngOnInit() {
    this.filterSubscription = this.settingsRPiComponentService.componentFilter
      .subscribe(
        data => this.filter = data,
        error => this.toasterService.toast("Error subscribing to component filter", ToastType.WARNING)
      );
  }

  hover(component: RPiComponent) {
    this.settingsRPiComponentService.setSelectedComponent(component);
  }

  ngOnDestroy() {
    if(this.filterSubscription)
      this.filterSubscription.unsubscribe();
  }

}
