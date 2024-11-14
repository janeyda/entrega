import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuariomodificarPage } from './usuariomodificar.page';

describe('UsuariomodificarPage', () => {
  let component: UsuariomodificarPage;
  let fixture: ComponentFixture<UsuariomodificarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariomodificarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
