import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WavexCoreComponent } from './wavex-core.component';

describe('WavexCoreComponent', () => {
  let component: WavexCoreComponent;
  let fixture: ComponentFixture<WavexCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WavexCoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WavexCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
