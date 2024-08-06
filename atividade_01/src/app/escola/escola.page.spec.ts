import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscolaPage } from './escola.page';

describe('EscolaPage', () => {
  let component: EscolaPage;
  let fixture: ComponentFixture<EscolaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
