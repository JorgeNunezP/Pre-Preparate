import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSubComponent } from './new-sub.component';

describe('NewSubComponent', () => {
  let component: NewSubComponent;
  let fixture: ComponentFixture<NewSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
