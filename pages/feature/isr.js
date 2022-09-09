import Clock from "../components/Clock";

export default function ISRDemo(props) {
   return (
	   <>
	   <div>
			<Clock></Clock>
		</div>
		  <main>
			<h1 style={{ fontSize: "55px", margin: "20px", textAlign: "center" }}>Incremental Static Regeneration</h1>
			<h2 style={{ fontSize: "25px", margin: "20px", textAlign: "center" }}>
			  (Reload after 15 seconds)
			</h2>
			<h2 style={{ fontSize: "25px", margin: "20px", textAlign: "center" }}>
			  (revalidate interval: 15 seconds)
			</h2>
			<h2 style={{ fontSize: "25px", margin: "20px", textAlign: "center" }}>
			  <div>Next Date-Time: {props.dateTime}</div>
			</h2>
			<h2 style={{ fontSize: "25px", margin: "10%", textAlign: "center" }}>
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
		  dateTime: new Date().toISOString(),
		},
		revalidate: 15, // In seconds
	}
}
