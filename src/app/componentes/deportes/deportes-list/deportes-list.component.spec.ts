import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeportesListComponent } from './deportes-list.component';

describe('DeportesListComponent', () => {
  let component: DeportesListComponent;
  let fixture: ComponentFixture<DeportesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeportesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeportesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
