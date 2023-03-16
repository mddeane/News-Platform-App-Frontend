import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRundownComponent } from './add-rundown.component';

describe('AddRundownComponent', () => {
  let component: AddRundownComponent;
  let fixture: ComponentFixture<AddRundownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRundownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRundownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
