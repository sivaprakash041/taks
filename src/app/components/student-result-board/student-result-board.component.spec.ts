import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentResultBoardComponent } from './student-result-board.component';

describe('StudentResultBoardComponent', () => {
  let component: StudentResultBoardComponent;
  let fixture: ComponentFixture<StudentResultBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentResultBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentResultBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
