import Navbar from "../Components/Navbar/navbar";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <h1 style={({ color: "white", textAlign: "center" })}>
        This is Home Page
      </h1>
    </div>
  );
}
