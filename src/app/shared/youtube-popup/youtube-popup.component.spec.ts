import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubePopupComponent } from './youtube-popup.component';

describe('YoutubePopupComponent', () => {
  let component: YoutubePopupComponent;
  let fixture: ComponentFixture<YoutubePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YoutubePopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YoutubePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
