import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainButton } from './main-button.component';

describe('MainButton', () => {
  let component: MainButton;
  let fixture: ComponentFixture<MainButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainButton ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
