import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddEditPolePage } from './add-edit-pole.page';

describe('AddEditPolePage', () => {
  let component: AddEditPolePage;
  let fixture: ComponentFixture<AddEditPolePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditPolePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddEditPolePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
