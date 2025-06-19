import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WavexCircuitComponent } from './wavex-circuit.component';

describe('WavexCircuitComponent', () => {
  let component: WavexCircuitComponent;
  let fixture: ComponentFixture<WavexCircuitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WavexCircuitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WavexCircuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
