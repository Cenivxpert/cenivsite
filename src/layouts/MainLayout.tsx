import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className="w-full">
        <Outlet /> {/* Ici s’affichent les pages enfants */}
      </main>
      <Footer />
    </>
  );
}
