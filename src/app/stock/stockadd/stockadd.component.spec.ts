import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockaddComponent } from './stockadd.component';

describe('StockaddComponent', () => {
  let component: StockaddComponent;
  let fixture: ComponentFixture<StockaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StockaddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StockaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
