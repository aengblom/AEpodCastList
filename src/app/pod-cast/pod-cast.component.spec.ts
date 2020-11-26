import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodCastComponent } from './pod-cast.component';

describe('PodCastComponent', () => {
  let component: PodCastComponent;
  let fixture: ComponentFixture<PodCastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodCastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
