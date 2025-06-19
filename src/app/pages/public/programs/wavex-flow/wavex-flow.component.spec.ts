import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WavexFlowComponent } from './wavex-flow.component';

describe('WavexFlowComponent', () => {
  let component: WavexFlowComponent;
  let fixture: ComponentFixture<WavexFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WavexFlowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WavexFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
