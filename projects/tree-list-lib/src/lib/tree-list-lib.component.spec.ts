import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeListLibComponent } from './tree-list-lib.component';

describe('TreeListLibComponent', () => {
  let component: TreeListLibComponent;
  let fixture: ComponentFixture<TreeListLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeListLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeListLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
