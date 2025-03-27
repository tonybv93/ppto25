import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PptoTableComponent } from './ppto-table.component';

describe('PptoTableComponent', () => {
  let component: PptoTableComponent;
  let fixture: ComponentFixture<PptoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PptoTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PptoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
