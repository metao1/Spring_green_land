import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-settings-navigation',
  templateUrl: './settings-navigation.component.html',
  styleUrls: ['./settings-navigation.component.css']
})
export class SettingsNavigationComponent implements OnInit {

  @Output()
  onViewChange = new EventEmitter<string>();

  @Input()
  view: string;

  constructor() { }

  ngOnInit() {
  }

  changeView (view: string): void {
    this.onViewChange.emit(view);
  }

}
