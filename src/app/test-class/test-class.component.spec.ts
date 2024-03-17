import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestClassComponent } from './test-class.component';

describe('TestClassComponent', () => {
  let component: TestClassComponent;
  let fixture: ComponentFixture<TestClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
