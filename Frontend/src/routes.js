/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Profile from "views/examples/Profile.js";

import Register from "views/examples/Register.js";
import SignUp from "views/examples/SignUp.js";
import Login from "views/examples/Login.js";
import CampusExit from "views/AddCampusExit";
import CampusExitTable from "views/Security/Campus_movement";
import NonResidentCampusEntryTable from "views/Security/NonResidentCampusEntry";
import NonResidentCampusEntry from "views/AddNonResidentEntry";
import AllCampusExitTable from "views/Security/AllCampusExits";
import AllNonResidentCampusEntryTable from "views/Security/allNonResidentEntry";
import LostItemList from "views/Security/Lost";
import FoundItemList from "views/Security/Found";
import AddFoundItem from "views/Add_foundItem";
import HallEntryTable from "views/Security/ViewHallEntry";
import AddHallEntry from "views/AddHallEntry";
import AllHallEntryTable from "views/Security/AllhallEntries";



var routes = [
 
  
  {
    path: "/index",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },
  {
    path: "/signup",
    name: "SignUp",
    icon: "ni ni-circle-08 text-pink",
    component: SignUp,
    layout: "/auth",
  },
  {
    path: "/addcampusMovement",
    name: "AddCampusMovement",
    icon: "ni ni-circle-08 text-pink",
    component: CampusExit,
    layout: "/admin",
    invisible: true
  },
  {
    path: "/campusMovement",
    name: "CampusMovement",
    icon: "ni ni-circle-08 text-pink",
    component: CampusExitTable,
    layout: "/admin",
  },
  {
    path: "/hallMovement",
    name: "Hall Movement",
    icon: "ni ni-circle-08 text-pink",
    component: HallEntryTable,
    layout: "/admin",
  },
  {
    path: "/all_hallEntries",
    name: "All Hall Movement",
    icon: "ni ni-circle-08 text-pink",
    component: AllHallEntryTable,
    layout: "/admin",
    invisible: true
  },
  {
    path: "/addHallEntry",
    name: "Add Hall Entry",
    icon: "ni ni-circle-08 text-pink",
    component: AddHallEntry,
    layout: "/admin",
    invisible:true
  },
  {
    path: "/lostItems",
    name: "Lost Items",
    icon: "ni ni-circle-08 text-pink",
    component: LostItemList,
    layout: "/admin",
  },
  {
    path: "/foundItems",
    name: "Found Items",
    icon: "ni ni-circle-08 text-pink",
    component: FoundItemList,
    layout: "/admin",
  },
  {
    path: "/add_foundItem",
    name: "Add Found Item",
    icon: "ni ni-circle-08 text-pink",
    component:AddFoundItem,
    layout: "/admin",
    invisible:true
  },
  {
    path: "/all_CampusMovement",
    name: "All Campus Exits",
    icon: "ni ni-circle-08 text-pink",
    component: AllCampusExitTable,
    layout: "/admin",
    invisible: true
  },
  {
    path: "/nonResidentcampusMovement",
    name: "NonResident CampusMovement",
    icon: "ni ni-circle-08 text-pink",
    component: NonResidentCampusEntryTable,
    layout: "/admin",
  },
  {
    path: "/allnonResidentcampusMovement",
    name: "All NonResident CampusMovement",
    icon: "ni ni-circle-08 text-pink",
    component: AllNonResidentCampusEntryTable,
    layout: "/admin",
    invisible: true
  },
  {
    path: "/addNonResidentcampusEntry",
    name: "Add NonResident CampusMovement",
    icon: "ni ni-circle-08 text-pink",
    component: NonResidentCampusEntry,
    layout: "/admin",
    invisible: true
  },
];
export default routes;
