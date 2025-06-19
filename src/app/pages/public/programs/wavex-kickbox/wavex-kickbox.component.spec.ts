import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WavexKickboxComponent } from './wavex-kickbox.component';

describe('WavexKickboxComponent', () => {
  let component: WavexKickboxComponent;
  let fixture: ComponentFixture<WavexKickboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WavexKickboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WavexKickboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
