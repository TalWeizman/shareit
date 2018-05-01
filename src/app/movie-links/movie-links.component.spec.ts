import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieLinksComponent } from './movie-links.component';

describe('MovieLinksComponent', () => {
  let component: MovieLinksComponent;
  let fixture: ComponentFixture<MovieLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
