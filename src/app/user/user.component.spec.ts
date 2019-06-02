import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';

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

    return { fixture, component }
  }

  it('should create', () => {
    let { component } = setup();
    expect(component).toBeTruthy();
  });
});
