import Clock from "../components/Clock";

export default function SSRDemo(props) {
	return (
	   <>
	   <div>
			<Clock></Clock>
		</div>
		  <main>
			<h1 style={{ fontSize: "55px", margin: "20px", textAlign: "center" }}>Server Side Rendering</h1>
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

export async function getServerSideProps() {

   return {
    props: { dateTime: Date().toLocaleString() },
  }
}
