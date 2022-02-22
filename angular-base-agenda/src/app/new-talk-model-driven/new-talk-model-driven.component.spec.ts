import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTalkModelDrivenComponent } from './new-talk-model-driven.component';

describe('NewTalkModelDrivenComponent', () => {
  let component: NewTalkModelDrivenComponent;
  let fixture: ComponentFixture<NewTalkModelDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTalkModelDrivenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTalkModelDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
