import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-simple-loader',
  templateUrl: './simple-loader.component.html',
  styleUrls: ['./simple-loader.component.css']
})
export class SimpleLoaderComponent implements OnInit {

  @Input()
  isLoading: boolean = false;

  @Input()
  size: string = 'medium';

  @Input()
  trackColor: string;

  @Input()
  spinnerColor: string;

  constructor() { }

  ngOnInit() {
  }

}
