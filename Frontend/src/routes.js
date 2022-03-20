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
import AddLostItem from "views/Add_lostitem";
import HallEntryTable from "views/Security/ViewHallEntry";
import AddHallEntry from "views/AddHallEntry";
import AllHallEntryTable from "views/Security/AllhallEntries";
import SecProfile from "views/Security/securityProfile";


var routes = [
 
  
  {
    path: "/index",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/user",
  },
  {
    path: "/index",
    name: "Security Profile",
    icon: "ni ni-single-02 text-yellow",
    component: SecProfile,
    layout: "/security",
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
    path: "/addcampusMovement",
    name: "AddCampusMovement",
    icon: "ni ni-circle-08 text-pink",
    component: CampusExit,
    layout: "/security",
    invisible: true
  },
  {
    path: "/campusMovement",
    name: "CampusMovement",
    icon: "ni ni-istanbul text-blue",
    component: CampusExitTable,
    layout: "/security",
  },
  {
    path: "/hallMovement",
    name: "Hall Movement",
    icon: "ni ni-building text-pink",
    component: HallEntryTable,
    layout: "/security",
  },
  {
    path: "/all_hallEntries",
    name: "All Hall Movement",
    icon: "ni ni-circle-08 text-pink",
    component: AllHallEntryTable,
    layout: "/security",
    invisible: true
  },
  {
    path: "/addHallEntry",
    name: "Add Hall Entry",
    icon: "ni ni-circle-08 text-pink",
    component: AddHallEntry,
    layout: "/security",
    invisible:true
  },
  {
    path: "/lostItems",
    name: "Lost Items",
    icon: "ni ni-fat-remove text-red",
    component: LostItemList,
    layout: "/security",
  },
  {
    path: "/foundItems",
    name: "Found Items",
    icon: "ni ni-check-bold text-green",
    component: FoundItemList,
    layout: "/security",
  },
  {
    path: "/add_foundItem",
    name: "Add Found Item",
    icon: "ni ni-circle-08 text-pink",
    component:AddFoundItem,
    layout: "/security",
    invisible:true
  },
  {
    path: "/add_lostItem",
    name: "Add Lost Item",
    icon: "ni ni-circle-08 text-pink",
    component:AddLostItem,
    layout: "/security",
    invisible:true
  },
  {
    path: "/add_lostItem",
    name: "Add Lost Item",
    icon: "ni ni-circle-08 text-pink",
    component:AddLostItem,
    layout: "/user",
   
  },
  {
    path: "/all_CampusMovement",
    name: "All Campus Exits",
    icon: "ni ni-circle-08 text-pink",
    component: AllCampusExitTable,
    layout: "/security",
    invisible: true
  },
  {
    path: "/nonResidentcampusMovement",
    name: "NonResident CampusMovement",
    icon: "ni ni-world text-cyan",
    component: NonResidentCampusEntryTable,
    layout: "/security",
  },
  {
    path: "/allnonResidentcampusMovement",
    name: "All NonResident CampusMovement",
    icon: "ni ni-circle-08 text-pink",
    component: AllNonResidentCampusEntryTable,
    layout: "/security",
    invisible: true
  },
  {
    path: "/addNonResidentcampusEntry",
    name: "Add NonResident CampusMovement",
    icon: "ni ni-circle-08 text-pink",
    component: NonResidentCampusEntry,
    layout: "/security",
    invisible: true
  },
];
export default routes;
