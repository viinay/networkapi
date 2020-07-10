import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWithSkipLimitComponent } from './list-with-skip-limit.component';

describe('ListWithSkipLimitComponent', () => {
  let component: ListWithSkipLimitComponent;
  let fixture: ComponentFixture<ListWithSkipLimitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListWithSkipLimitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWithSkipLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
