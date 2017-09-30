import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormsComponent } from './login-forms.component';

describe('LoginFormsComponent', () => {
  let component: LoginFormsComponent;
  let fixture: ComponentFixture<LoginFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
