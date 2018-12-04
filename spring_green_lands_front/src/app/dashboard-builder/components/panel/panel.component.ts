import {Component, Input, OnInit} from '@angular/core';

import {PanelConfiguration} from '@app/shared/model/dashboard/configuration/panel/panel.configuration';
import {Row} from '@app/shared/model/dashboard/configuration/row/row.model';

@Component({
  selector: 'app-dashboard-builder-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  private menuShown;

  @Input()
  configuration: PanelConfiguration;

  constructor() {
    this.menuShown = false;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.configuration.rows = new Array<Row>();
  }

  showMenu() {
    this.menuShown = true;
  }

  hideMenu() {
    this.menuShown = false;
  }

  addColumn() {
    console.log("adding column");
  }

}
