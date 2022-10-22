import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFiliereComponent } from './view-filiere.component';

describe('ViewFiliereComponent', () => {
  let component: ViewFiliereComponent;
  let fixture: ComponentFixture<ViewFiliereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFiliereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewFiliereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
