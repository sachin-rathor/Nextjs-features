export default function SSRDemo(props) {
   return (
	   <>
		  <main>
			<h1>Server Side Rendering</h1>
			<h2>
			  <div>Next Date-Time: {props.dateTime}</div>
			</h2>
			<h2>
            <a href="/">
               Home
            </a>
         </h2>
		  </main>
	   </>
	);
}

export async function getServerSideProps() {

   return {
    props: { dateTime: Date().toLocaleString() },
  }
}
