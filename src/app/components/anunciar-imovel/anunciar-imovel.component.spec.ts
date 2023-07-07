import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnunciarImovelComponent } from './anunciar-imovel.component';

describe('AnunciarImovelComponent', () => {
  let component: AnunciarImovelComponent;
  let fixture: ComponentFixture<AnunciarImovelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnunciarImovelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnunciarImovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
