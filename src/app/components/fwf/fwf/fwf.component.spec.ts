import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FwfComponent } from './fwf.component';

describe('FwfComponent', () => {
  let component: FwfComponent;
  let fixture: ComponentFixture<FwfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FwfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FwfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
