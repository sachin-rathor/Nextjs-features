export default function ISRDemo(props) {
   return (
	   <>
		  <main>
			<h1>Incremental Static Regeneration</h1>
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

export async function getStaticProps() {
	return {
		props: {
		  dateTime: Date().toLocaleString(),
		},
		revalidate: 15, // In seconds
	}
}