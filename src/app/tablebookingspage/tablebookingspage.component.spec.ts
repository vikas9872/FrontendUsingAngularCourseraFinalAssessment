import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablebookingspageComponent } from './tablebookingspage.component';

describe('TablebookingspageComponent', () => {
  let component: TablebookingspageComponent;
  let fixture: ComponentFixture<TablebookingspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablebookingspageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablebookingspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
