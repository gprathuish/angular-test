import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserAsyncComponent } from './user-async/user-async.component';

describe('AppComponent', () => {
  let fixture, app;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        UserComponent,
        UserAsyncComponent
      ],
    }).compileComponents();
  }));

  function setup(){
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    return { fixture, app};
  }

  it('should create the app', () => {
    let { app } = setup();
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-test'`, () => {
    let { app } = setup();
    expect(app.title).toEqual('angular-test');
  });

  it('should render title in a h1 tag', () => {
    let { fixture } = setup();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-test!');
  });
});
