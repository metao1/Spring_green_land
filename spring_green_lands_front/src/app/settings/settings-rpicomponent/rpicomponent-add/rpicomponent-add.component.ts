import {Component, OnInit, ViewChild} from '@angular/core';

import {RPiComponent} from '@app/shared/model/rpicomponent/rpicomponent.model';
import {RPiComponentService} from '@app/core/service/rpicomponent/rpicomponent.service';
import {RPiComponentFormComponent} from '../rpicomponent-form/rpicomponent-form.component';
import {ToasterService} from '@app/core/component/toaster/toaster.service';
import {ToastType} from '@app/core/component/toaster/toast-type.enum';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-rpicomponent-add',
  templateUrl: './rpicomponent-add.component.html',
  styleUrls: ['./rpicomponent-add.component.css']
})
export class RPiComponentAddComponent implements OnInit {

  @ViewChild(RPiComponentFormComponent) child: RPiComponentFormComponent;

  form: FormGroup;

  constructor(
    private rPiComponentService: RPiComponentService,
    private toasterService: ToasterService, private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      ip: ['', [
        Validators.required
      ]],
      pin: ['', [
        Validators.required,
      ]],
      type: ['', Validators.required]
    });
  };

  ngOnInit() {
  }

  submit(component: RPiComponent) {
    console.log(component);
    this.rPiComponentService.save(component)
      .subscribe(
        data => {
          this.resetForm();
          this.toasterService.toast('Component successfully added', ToastType.SUCCESS);
        },
        error => this.toasterService.toast('Error adding new component', ToastType.WARNING)
      );
  }

  private resetForm() {
    this.child.resetForm();
  }

}
