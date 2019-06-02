import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAsyncComponent } from './user-async.component';

describe('UserAsyncComponent', () => {
  let component: UserAsyncComponent;
  let fixture: ComponentFixture<UserAsyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAsyncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
