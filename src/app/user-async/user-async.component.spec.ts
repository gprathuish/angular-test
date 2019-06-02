import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { UserAsyncComponent } from './user-async.component';
import { UserAsyncService } from '../user-async.service';
import { Observer, Observable } from 'rxjs';

describe('UserAsyncComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserAsyncComponent]
    })
      .compileComponents();
  }));

  function setup() {
    const fixture: ComponentFixture<UserAsyncComponent> = TestBed.createComponent(UserAsyncComponent);
    const component: UserAsyncComponent = fixture.componentInstance;
    const userAsyncService: UserAsyncService = fixture.debugElement.injector.get(UserAsyncService);

    return { fixture, component, userAsyncService };
  }

  it('should create', () => {
    const { component } = setup();
    expect(component).toBeTruthy();
  });

  it('should display user name', fakeAsync(() => {
    const { fixture, component, userAsyncService } = setup();
    const mockUser = { name: 'Prathuish' };
    spyOn(userAsyncService, 'getUserDetails').and.returnValue(
      Observable.create((observer: Observer<{ name: string }>) => {
        observer.next(mockUser);
      })
    );

    tick();

    fixture.detectChanges();
    const userAsyncElement = fixture.debugElement.nativeElement;
    const loggedInUser = userAsyncElement.querySelector('p');

    expect(loggedInUser.textContent).toBe(' Prathuish ');
  }));

  it('should display a system error', fakeAsync(() => {
    const { fixture, userAsyncService } = setup();
    spyOn(userAsyncService, 'getUserDetails').and.returnValue(
      Observable.create((observer: Observer<{ name: string }>) => {
        observer.error('Something went wrong');
      })
    );

    tick();
    fixture.detectChanges();

    const compile = fixture.debugElement.nativeElement;
    const systemError = compile.querySelector('p');

    expect(systemError.textContent).toBe('Something went wrong');
  }));

});
