import {Component, OnInit, ViewChild} from '@angular/core';

import {RPiComponent} from '@app/shared/model/rpicomponent/rpicomponent.model';
import {RPiComponentService} from '@app/core/service/rpicomponent/rpicomponent.service';
import {RPiComponentFormComponent} from '../rpicomponent-form/rpicomponent-form.component';
import {ToasterService} from '@app/core/component/toaster/toaster.service';
import {ToastType} from '@app/core/component/toaster/toast-type.enum';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RPiService} from '@app/core/service/rpi/rpi.service';

@Component({
  selector: 'app-rpicomponent-add',
  templateUrl: './rpicomponent-add.component.html',
  styleUrls: ['./rpicomponent-add.component.css']
})
export class RPiComponentAddComponent implements OnInit {

  @ViewChild(RPiComponentFormComponent) child: RPiComponentFormComponent;

  form: FormGroup;

  formSettings : Object = {
    submitLabel : 'Create',
    isClearable : true
  };

  constructor(
    private rPiComponentService: RPiComponentService,
    private toasterService: ToasterService, private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      ip: ['', [
        Validators.required,
        Validators.pattern("^([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$")
      ]],
      pin: ['', [
        Validators.required,
        Validators.pattern("^([1-9]{1})([0-9]{0,3})$")
      ]],
      type: ['', Validators.required]
    });
  };

  ngOnInit() {
    console.log('this is two');
  }

  submit(component: RPiComponent) {
    console.log(component);
    this.rPiComponentService.save(component)
      .subscribe(
        data => {
          this.toasterService.toast("Component successfully added", ToastType.SUCCESS);
        },
        error => this.toasterService.toast("Error adding new component", ToastType.WARNING)
      );
  }

}
