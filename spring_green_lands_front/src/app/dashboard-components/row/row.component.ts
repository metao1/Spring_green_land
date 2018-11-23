import {Component, Input, OnInit} from '@angular/core';

import {Column} from '@app/shared/model/dashboard/configuration/column/column.model';
import {RowConfiguration} from '@app/shared/model/dashboard/configuration/row/row.configuration';

@Component({
  selector: 'gro-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  @Input()
  columns: Array<Column>;

  @Input()
  configuration: RowConfiguration;

  constructor() {
    this.columns = new Array<Column>();
  }

  ngOnInit() {}

}

/*

Below is the idea to process the dashabord template configuration.
The panel has multiple rows (array)
  - row has configuration with columns array
  - each column has configuration with width classes and component
  - select the row in preview to add columns
  - select (click) the column then add component from the toolbar?

center-panel
  -row
    -column
      -component
    -column
      -row
        -column
          -component
        -column
          -component
        -column
          -component
      -row
        -column
          -component
    -column
      -component
  -row
    -column
      -component
  -row
    -column
      -component

*/
