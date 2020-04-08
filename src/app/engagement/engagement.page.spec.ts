import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EngagementPage } from './engagement.page';

describe('EngagementPage', () => {
  let component: EngagementPage;
  let fixture: ComponentFixture<EngagementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngagementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EngagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
