import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesHighlightComponent } from './movies-highlight.component';

describe('MoviesHighlightComponent', () => {
  let component: MoviesHighlightComponent;
  let fixture: ComponentFixture<MoviesHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesHighlightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
