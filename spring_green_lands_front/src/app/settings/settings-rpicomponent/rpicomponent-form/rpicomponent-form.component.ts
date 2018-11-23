import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RPiComponentType} from '@app/shared/model/rpicomponent/rpicomponent-type.enum';
import {RPiComponent} from '@app/shared/model/rpicomponent/rpicomponent.model';

@Component({
  selector: 'gro-rpicomponent-form',
  templateUrl: './rpicomponent-form.component.html',
  styleUrls: ['./rpicomponent-form.component.css']
})
export class RPiComponentFormComponent implements OnInit {

  @Output()
  onFormSubmit: EventEmitter<RPiComponent> = new EventEmitter<RPiComponent>();

  @Input()
  formSettings: Object;

  RPiComponentType = RPiComponentType;

  form: FormGroup;
  errorShown: boolean;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      alias: ['', Validators.required],
      pin: ['', Validators.required],
      type: ['', Validators.required]
    });
    this.errorShown = false;
  }

  ngOnInit() {
  }

  submit(component: RPiComponent){
    this.onFormSubmit.emit(component);
  }

  reset() {
    this.form.reset();
  }
}
