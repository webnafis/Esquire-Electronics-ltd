import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomNavberComponent } from './bottom-navber.component';

describe('BottomNavberComponent', () => {
  let component: BottomNavberComponent;
  let fixture: ComponentFixture<BottomNavberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomNavberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BottomNavberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
