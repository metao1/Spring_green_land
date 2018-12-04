import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-panel-list-group',
  templateUrl: './panel-list-group.component.html',
  styleUrls: ['./panel-list-group.component.css']
})
export class PanelListGroupComponent implements OnInit {

  @Input()
  data: Object[];

  @Input()
  heading: string;

  constructor() { console.log(this.data); }

  ngOnInit() {
  }

}
