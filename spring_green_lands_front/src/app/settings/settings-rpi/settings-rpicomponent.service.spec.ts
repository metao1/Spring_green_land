import {inject, TestBed} from '@angular/core/testing';

import {SettingsRPiComponentService} from './settings-rpicomponent.service';

describe('SettingsRPiComponentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SettingsRPiComponentService]
    });
  });

  it('should ...', inject([SettingsRPiComponentService], (service: SettingsRPiComponentService) => {
    expect(service).toBeTruthy();
  }));
});
