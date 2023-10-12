import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatFormComponent } from './features/chat-form/chat-form.component';

const routes: Routes = [
  { path: '', component: ChatFormComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
