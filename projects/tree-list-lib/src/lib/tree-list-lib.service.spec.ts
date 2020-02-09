import { TestBed } from '@angular/core/testing';

import { TreeListLibService } from './tree-list-lib.service';

describe('TreeListLibService', () => {
  let service: TreeListLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreeListLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
