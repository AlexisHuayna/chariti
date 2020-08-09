import { TestBed, async, inject } from '@angular/core/testing';

import { LoginGuard } from './login.guard';

describe('LoginGuard', () => {
  beforeEach(() => {
    /*
    TestBed.configureTestingModule({
      providers: [LoginGuard]
    });
    */
  });

  xit('should ...', inject([LoginGuard], (guard: LoginGuard) => {
    expect(true).toBeTruthy();
  }));
});
