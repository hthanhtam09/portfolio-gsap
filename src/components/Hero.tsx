import Slider from "./Slider";

export default function Hero() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 bg-[#cdc6be] p-8">
      <div className="mt-16 w-full h-[85vh] border-2 border-[#141412]">
        <Slider />
      </div>
    </div>
  );
}
