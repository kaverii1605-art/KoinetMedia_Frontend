import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Homecomponent } from './components/homecomponent/homecomponent';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { FocusSectors } from './components/focus-sectors/focus-sectors';
import { Overview } from './components/overview/overview';
import { Ourstory } from './components/ourstory/ourstory';
import { Experties } from './components/whatwedo/experties/experties';
import { Accountbasedmarketing } from './components/whatwedo/accountbasedmarketing/accountbasedmarketing';
import { Multichannelleads } from './components/whatwedo/multichannelleads/multichannelleads';
import { Contentsyndication } from './components/whatwedo/contentsyndication/contentsyndication';
import { Emailmarketing } from './components/whatwedo/emailmarketing/emailmarketing';
import { Addblog } from './components/addblog/addblog';
import { DataAppendAndCleansing } from './components/whatwedo/data-append-and-cleansing/data-append-and-cleansing';
import { Demandgeneration } from './components/whatwedo/demandgeneration/demandgeneration';
import { Appointmentgeneration } from './components/whatwedo/appointmentgeneration/appointmentgeneration';
import { Accountprofiling } from './components/whatwedo/accountprofiling/accountprofiling';
import { Addarticle } from './components/addarticle/addarticle';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Contact } from './components/contact/contact';
import { Infographic } from './components/infographic/infographic';
import { BlogComponent } from './components/blog/blog';
import { Addinfographics } from './components/addinfographics/addinfographics';
import { Article } from './components/article/article';
import { PrivacyPolicy } from './components/privacy-policy/privacy-policy';
import { Casestudies } from './components/casestudies/casestudies';
import { BlogDetails } from './components/blog-details/blog-details';

const routes: Routes = [

   { path: '', redirectTo: 'homecomponent', pathMatch: 'full' },
  { path: 'homecomponent', component: Homecomponent },
  { path: 'navbar', component: Navbar },
  {path:'footer',component:Footer},
  {path:'focus-sectors',component:FocusSectors},
  {path:'overview',component:Overview},
  {path:'ourstory',component:Ourstory},
  {path:'whatwedo/experties',component:Experties},
  {path:'whatwedo/accountbasedmarketing',component:Accountbasedmarketing},
  {path:'whatwedo/multichannelleads',component:Multichannelleads},
  {path:'whatwedo/contentsyndication',component:Contentsyndication},
  {path:'whatwedo/emailmarketing',component:Emailmarketing},
  {path:'whatwedo/dataAppendAndCleansing',component:DataAppendAndCleansing},
  {path:'whatwedo/demandgeneration',component:Demandgeneration},
  {path:'whatwedo/appointmentgeneration',component:Appointmentgeneration},
  {path:'whatwedo/accountprofiling',component:Accountprofiling},
  {path:'addblog',component:Addblog},
  {path:'addarticle',component:Addarticle},
  {path:'blog',component:BlogComponent},
  {path:'login',component:Login},
  {path:'register',component:Register},
  {path:'contact',component:Contact},
  {path:'infographic',component:Infographic},
  {path:'addinfographics',component:Addinfographics},
  {path:'articles', component:Article},
  {path:'privacy-policy', component:PrivacyPolicy},
  {path:'casestudies',component:Casestudies},
  {path:'blog-details',component:BlogDetails},
  {path:'casestudies',component:Casestudies}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
