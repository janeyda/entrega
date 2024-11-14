import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilmodificarPage } from './perfilmodificar.page';

describe('PerfilmodificarPage', () => {
  let component: PerfilmodificarPage;
  let fixture: ComponentFixture<PerfilmodificarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilmodificarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
