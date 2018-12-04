import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RPiComponentType} from '@app/shared/model/rpicomponent/rpicomponent-type.enum';
import {RPiComponent} from '@app/shared/model/rpicomponent/rpicomponent.model';
import {ToastType} from '@app/core/component/toaster/toast-type.enum';
import {RPiComponentService} from '@app/core/service/rpicomponent/rpicomponent.service';
import {ToasterService} from '@app/core/component/toaster/toaster.service';

@Component({
  selector: 'app-rpicomponent-form',
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

  constructor(private formBuilder: FormBuilder,
              private toasterService: ToasterService,
  private rPiComponentService: RPiComponentService) {
    this.form = formBuilder.group({
      alias: ['', Validators.required],
      pin: ['', Validators.required],
      type: ['', Validators.required]
    });
    this.errorShown = false;
  }

  ngOnInit() {
  }

  submit(value: any) {
    console.log(JSON.stringify( value));
    this.onFormSubmit.emit(value);
    this.rPiComponentService.save(value)
      .subscribe(
        data => {
          this.resetForm();
          this.toasterService.toast("Component successfully added", ToastType.SUCCESS);
        },
        error => this.toasterService.toast("Error adding new component", ToastType.WARNING)
      );
  }

  resetForm() {
    this.form.reset();
  }
}
