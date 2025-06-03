import image1 from "../../assets/home/image1.jpg";
import image2 from "../../assets/home/image2.jpg";
import image3 from "../../assets/home/image3.jpg";
import image4 from "../../assets/home/image4.jpg";
import image5 from "../../assets/home/image5.jpg";
import image6 from "../../assets/home/image6.jpg";
import image7 from "../../assets/home/image7.jpg";
import image8 from "../../assets/home/image8.jpg";
import image9 from "../../assets/home/image9.jpg";
import image10 from "../../assets/home/image10.jpg";
import image11 from "../../assets/home/image11.jpg";
import image12 from "../../assets/home/image12.jpg";

export default function HomeHero() {
  return (
    <section className="w-full min-h-screen bg-white flex items-center justify-between py-12 px-0">
      {/* Left image group */}
      <div className="flex flex-1 justify-start pl-4 space-x-6">
        <div className="flex flex-col space-y-6">
          <img src={image1} alt="img1" className="w-44 h-44 object-cover rounded-md" />
          <img src={image2} alt="img2" className="w-44 h-44 object-cover rounded-md" />
          <img src={image3} alt="img3" className="w-44 h-44 object-cover rounded-md" />
        </div>
        <div className="flex flex-col space-y-4 pt-6">
          <img src={image4} alt="img4" className="w-36 h-36 object-cover rounded-md" />
          <img src={image5} alt="img5" className="w-36 h-36 object-cover rounded-md" />
          <img src={image6} alt="img6" className="w-36 h-36 object-cover rounded-md" />
        </div>
      </div>

      {/* Center content */}
      <div className="flex-shrink-0 max-w-2xl px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-8 leading-tight">
          Discover Architecture’s <br />
          Next Big Idea on <br />
          <span className="text-black">DezignBank</span>
        </h1>
        <p className="text-gray-600 text-lg mb-10">
          A vibrant marketplace where visionary architects showcase premium design
          assets, inspire projects, and connect with industry-leading vendors.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-black text-white px-6 py-2 rounded-md text-sm font-medium">
            Join as Architect
          </button>
          <button className="border border-black px-6 py-2 rounded-md text-sm font-medium">
            Join as Vendor
          </button>
        </div>
      </div>

      {/* Right image group */}
      <div className="flex flex-1 justify-end pr-4 space-x-6">
        <div className="flex flex-col space-y-4 pt-6">
          <img src={image7} alt="img7" className="w-36 h-36 object-cover rounded-md" />
          <img src={image8} alt="img8" className="w-36 h-36 object-cover rounded-md" />
          <img src={image9} alt="img9" className="w-36 h-36 object-cover rounded-md" />
        </div>
        <div className="flex flex-col space-y-6">
          <img src={image10} alt="img10" className="w-44 h-44 object-cover rounded-md" />
          <img src={image11} alt="img11" className="w-44 h-44 object-cover rounded-md" />
          <img src={image12} alt="img12" className="w-44 h-44 object-cover rounded-md" />
        </div>
      </div>
    </section>
  );
}
