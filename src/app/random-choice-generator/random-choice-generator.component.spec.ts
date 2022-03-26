import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomChoiceGeneratorComponent } from './random-choice-generator.component';

describe('RandomChoiceGeneratorComponent', () => {
  let component: RandomChoiceGeneratorComponent;
  let fixture: ComponentFixture<RandomChoiceGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomChoiceGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomChoiceGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
