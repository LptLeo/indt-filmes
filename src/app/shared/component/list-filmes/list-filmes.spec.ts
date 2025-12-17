import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFilmes } from './list-filmes';

describe('ListFilmes', () => {
  let component: ListFilmes;
  let fixture: ComponentFixture<ListFilmes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListFilmes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFilmes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
