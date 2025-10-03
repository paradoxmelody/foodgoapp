import React from 'react'
import './Vendors.css'

//Loads all vendors from API/backend (with categories, ratings, menus)
    //Backend team please complete this function for you
function fetchVendors() {

}

//Filters the vendor list when a sidebar category is clicked (Halal, Vegetarian, etc.).
function filterVendors(category){

}
//Filters vendors based on search bar input
function searchVendors(query){

}
//Marks/unmarks a vendor as favorite
function toggleFavorite(vendorID){

}
//Fetches vendor-specific deals (shown in “Hot Deals” inside the vendor page).
function getVendorDeals(vendorId){

}
//Handles clicking on a vendor card then Navigates to vendor’s  menu once clicked on
function handleSelectVendor(vendorId){

}
//Fetches the rating f the vendors
function getVendorRating(venderID){

}
const Vendors = () => {
  return (
    <div className="vendors-page">
      {/* Top Bar */}
      <div className="TopBar">
        <img
          src="../Assets/foodgo-logo.png"
          alt="FoodGo"
          style={{ width: "120px", margin: "0 auto", display: "block" }}
        />
        <button type="button">Menu</button>
        <button type="VendorButton">Vendors</button>
        <button type="HomeButton">Home</button>
        <button type="CartButton">Cart</button>
        <button type="ProfileButton">Profile</button>
      </div>

      {/* Deals Section */}
      <div className="Deals">
        <div className ="HeaderDeal">Hot Deals This Week!</div>
        <div>
            <img></img>
            <button></button>
        </div>
      </div>

      {/* Side Bar */}
      <div className="sidebar">
        <h2 className="sidebar-header">Categories and Filters</h2>
      </div>

      {/* Explore Campus Vendors --> Vendor Menu */}
      <div className="CampusVendor">
        <div classNmae ="HeaderExplore">Explore Campus Vendors</div>
      </div>
      
      {/*Backend team please help with API calls to fetch the data, there is still alot i need to do which is complete functions then 
      and fecth/map data . Also still need to make functions dynamically*/}
    </div>
  );
};
export default Vendors