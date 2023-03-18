import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DryComponentComponent } from './dry-component.component';

describe('DryComponentComponent', () => {
  let component: DryComponentComponent;
  let fixture: ComponentFixture<DryComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DryComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
