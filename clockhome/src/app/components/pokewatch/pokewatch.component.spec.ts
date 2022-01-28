import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokewatchComponent } from './pokewatch.component';

describe('PokewatchComponent', () => {
  let component: PokewatchComponent;
  let fixture: ComponentFixture<PokewatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokewatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokewatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
