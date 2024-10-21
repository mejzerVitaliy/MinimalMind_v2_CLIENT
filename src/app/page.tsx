import Footer from "@/components/molecules/Footer";
import Header from "@/components/molecules/Header";
import Navbar from "@/components/organisms/Navbar";
import HomeContent from "@/components/templates/HomeContent";

export default function GeneralPage() {
    return (
        <>
            <Header />
            <Navbar />
            
            <HomeContent />
            
            <Footer/>
        </>
    );
}
