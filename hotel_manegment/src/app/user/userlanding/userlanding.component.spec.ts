import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlandingComponent } from './userlanding.component';

describe('UserlandingComponent', () => {
  let component: UserlandingComponent;
  let fixture: ComponentFixture<UserlandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserlandingComponent]
    });
    fixture = TestBed.createComponent(UserlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
