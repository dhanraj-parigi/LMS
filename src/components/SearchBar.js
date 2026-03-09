import React from "react";

function SearchBar({search,setSearch}){

return(

<input
type="text"
placeholder="Search courses..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
style={{
padding:"10px",
width:"300px",
borderRadius:"6px",
border:"1px solid #ccc"
}}
/>

)

}

export default SearchBar