import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastarProdutoComponent } from './cadastar-produto.component';

describe('CadastarProdutoComponent', () => {
  let component: CadastarProdutoComponent;
  let fixture: ComponentFixture<CadastarProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastarProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastarProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
