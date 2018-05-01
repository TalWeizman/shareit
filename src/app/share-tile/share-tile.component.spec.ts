import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareTileComponent } from './share-tile.component';

describe('ShareTileComponent', () => {
  let component: ShareTileComponent;
  let fixture: ComponentFixture<ShareTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
