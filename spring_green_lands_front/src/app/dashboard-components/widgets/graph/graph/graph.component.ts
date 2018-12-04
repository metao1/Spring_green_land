import {Component, Input, OnInit} from '@angular/core';
import {graphPresets} from './graph-presets';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  @Input()
  data: any;

  @Input()
  labels: any;

  @Input()
  graphType: string = "line";

  graphPresets: Object;

  constructor() {
    this.graphPresets = graphPresets;
  }

  ngOnInit() {}

  onChangeGraphType(type: string) {
      this.graphType = type;
  }

}
