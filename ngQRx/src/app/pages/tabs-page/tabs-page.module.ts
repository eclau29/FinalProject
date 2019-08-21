import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';

import { NoteListModule } from '../note-list/note-list.module';
import { AllergyListModule } from '../allergy-list/allergy-list.module';
import { ScheduleModule } from '../schedule/schedule.module';
import { SessionDetailModule } from '../session-detail/session-detail.module';
import { MedicationDetailModule } from '../medication-detail/medication-detail.module';
import { MedicationListModule } from '../medication-list/medication-list.module';
import { ContactsListModule } from './../contacts-list/contacts-list.module';
import { NoteDetailPage } from '../note-detail/note-detail.page';
import { NoteDetailPageModule } from '../note-detail/note-detail.module';

@NgModule({
  imports: [
    NoteListModule,
    CommonModule,
    IonicModule,
    AllergyListModule,
    ScheduleModule,
    SessionDetailModule,
    MedicationDetailModule,
    MedicationListModule,
    TabsPageRoutingModule,
    ContactsListModule,
    NoteDetailPageModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsModule { }
