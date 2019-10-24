import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AboutComponent } from "./components/about/about.component";
import { RouterModule, Routes } from "@angular/router";
import { ContactComponent } from "./components/contact/contact.component";
import { HomeComponent } from "./components/home/home.component";
import { ProfileComponent } from "./components/profile/profile.component";

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "profile", component: ProfileComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
];

@NgModule({
  declarations: [AppComponent, ProfileComponent, AboutComponent, ContactComponent, HomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }, // <-- debugging purposes only
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
