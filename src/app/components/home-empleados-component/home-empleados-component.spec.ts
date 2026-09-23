import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeEmpleadosComponent } from './home-empleados-component';

describe('HomeEmpleadosComponent', () => {
  let component: HomeEmpleadosComponent;
  let fixture: ComponentFixture<HomeEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeEmpleadosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeEmpleadosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
