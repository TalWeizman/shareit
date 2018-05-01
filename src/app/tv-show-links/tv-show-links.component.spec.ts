import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowLinksComponent } from './tv-show-links.component';

describe('TvShowLinksComponent', () => {
  let component: TvShowLinksComponent;
  let fixture: ComponentFixture<TvShowLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvShowLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
