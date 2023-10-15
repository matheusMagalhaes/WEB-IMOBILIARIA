import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardImovelComponent } from './card-imovel.component';

describe('CardImovelComponent', () => {
  let component: CardImovelComponent;
  let fixture: ComponentFixture<CardImovelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardImovelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardImovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
