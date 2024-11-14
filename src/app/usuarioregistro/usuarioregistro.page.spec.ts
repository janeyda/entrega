import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuarioregistroPage } from './usuarioregistro.page';

describe('UsuarioregistroPage', () => {
  let component: UsuarioregistroPage;
  let fixture: ComponentFixture<UsuarioregistroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioregistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
