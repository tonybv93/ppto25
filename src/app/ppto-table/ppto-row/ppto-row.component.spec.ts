import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PptoRowComponent } from './ppto-row.component';

describe('PptoRowComponent', () => {
  let component: PptoRowComponent;
  let fixture: ComponentFixture<PptoRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PptoRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PptoRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
