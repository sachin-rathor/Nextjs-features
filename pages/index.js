import React, { useEffect } from 'react';

function HomePage() {
	useEffect(() => {
    document.title = 'SWA Next.js';
  });
   return (
      <>
         <div>Welcome to Next.js!</div>
		 <a href="/feature/ssr">SSR Demo</a><br></br>
         <a href="/feature/isr">ISR Demo with revalidate time of 15s.</a>
      </>	    
   )
}

export default HomePage
