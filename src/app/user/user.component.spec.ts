import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from '../user.service';

describe('UserComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent]
    })
      .compileComponents();
  }));

  function setup() {
    const fixture: ComponentFixture<UserComponent> = TestBed.createComponent(UserComponent);
    const component: UserComponent = fixture.componentInstance;
    const userService: UserService = fixture.debugElement.injector.get(UserService);
    return { fixture, component, userService}
  }

  it('should create', () => {
    let { component } = setup();
    expect(component).toBeTruthy();
  });

  it('should display the logged in user name', () => {
    const { fixture, component, userService} = setup();
    const mockUser = {name: 'Prathuish'};
    spyOn(userService, 'getUser').and.returnValue(mockUser);

    fixture.detectChanges();

    const compile = fixture.debugElement.nativeElement;
    const loggedInUser = compile.querySelector('p');
    expect(loggedInUser.textContent).toBe(' Welcome Prathuish ');
  });

  it('should display user not logged-in mesasge', () => {
    const { fixture, component, userService} = setup();
    spyOn(userService, 'getUser').and.returnValue(undefined);

    fixture.detectChanges();

    const compile = fixture.debugElement.nativeElement;
    const loggedInUser = compile.querySelector('p');
    expect(loggedInUser.textContent).toBe(' user is NOT logged In. ')
  });
});
