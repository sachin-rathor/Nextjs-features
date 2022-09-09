import React, { useEffect } from 'react';
import Clock from "./components/Clock";

function HomePage() {
	useEffect(() => {
    document.title = 'SWA Next.js';
  });
   return (
      <>
		<div>
			<Clock></Clock>
		</div>
         <div style={{ fontSize: "55px", margin: "20px", textAlign: "center" }}>Welcome to Next.js!</div>
		 <div style={{ padding: "10px 20px", fontSize: "25px", margin: "5%", textAlign: "center", color: "white"}}>
			<a href="/feature/ssr">SSR Demo</a><br></br><br></br>
			<a href="/feature/isr">ISR Demo with revalidate time of 15s.</a>
		 </div>
      </>	    
   )
}

export default HomePage
