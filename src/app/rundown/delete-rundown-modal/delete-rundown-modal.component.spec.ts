import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRundownModalComponent } from './delete-rundown-modal.component';

describe('DeleteRundownModalComponent', () => {
  let component: DeleteRundownModalComponent;
  let fixture: ComponentFixture<DeleteRundownModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRundownModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteRundownModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
