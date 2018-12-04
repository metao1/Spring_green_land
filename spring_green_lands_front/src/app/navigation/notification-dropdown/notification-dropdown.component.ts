import {Component, OnDestroy, OnInit} from '@angular/core';

import {Notification} from '@app/shared/model/notification/notification.model';
import {NotificationView} from '@app/shared/model/notification/notification-view.enum';
import {NotificationService} from '@app/core/service/notification/notification.service';
import {Page} from '@app/shared/model/paging/page.model';
import {ToasterService} from '@app/core/component/toaster/toaster.service';

@Component({
  selector: 'app-notification-dropdown',
  templateUrl: './notification-dropdown.component.html',
  styleUrls: ['./notification-dropdown.component.css']
})
export class NotificationDropdownComponent implements OnInit, OnDestroy {

  public read: Page<Notification>;
  public unread: Page<Notification>;
  private readSubscription;
  private unreadSubscription;
  private notificationView = NotificationView;
  private notificationViewSelected: NotificationView = NotificationView.UNREAD;

  constructor(
    private notificationService: NotificationService,
    private toasterService: ToasterService
  ) { }

  ngOnInit() {
    /*this.readSubscription = this.notificationService.readSubscription
      .subscribe(
        data => this.read = data,
        error => this.toasterService.toast("Error subscribing to read notifications", ToastType.WARNING)
      );
    this.unreadSubscription = this.notificationService.unreadSubscription
      .subscribe(
        data => this.unread = data,
        error => this.toasterService.toast("Error subscribing to unread notifications", ToastType.WARNING)
      );*/
  }

  changeView(view: NotificationView) {
    this.notificationViewSelected = view;
  }

  ngOnDestroy() {
    this.readSubscription.unsubscribe();
    this.unreadSubscription.unsubscribe();
  }

}
