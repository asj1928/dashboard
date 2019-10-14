import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';


const routes: Routes = [
  { path: 'content', component: ContentComponent },
  {
      path: "",
      redirectTo: "content",
      pathMatch: "full"
    }
];
// const routes: Routes = [{ path: 'heroes', component: HeroesComponent } ];
// {
//   path: "",
//   redirectTo: "employees",
//   pathMatch: "full"
// }

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
