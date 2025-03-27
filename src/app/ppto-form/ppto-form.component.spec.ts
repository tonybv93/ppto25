import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PptoFormComponent } from './ppto-form.component';

describe('PptoFormComponent', () => {
  let component: PptoFormComponent;
  let fixture: ComponentFixture<PptoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PptoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PptoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
