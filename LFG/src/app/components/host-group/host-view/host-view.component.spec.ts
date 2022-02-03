import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostViewComponent } from './host-view.component';

describe('HostViewComponent', () => {
  let component: HostViewComponent;
  let fixture: ComponentFixture<HostViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check username when checkUsername is called', () => {
    expect(component.checkUsername('username')).toHaveBeenCalled();
  })
});
