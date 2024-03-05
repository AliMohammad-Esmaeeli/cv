export default function Notfound() {
  return (
    <div className="min-h-screen scroll-smooth overflow-x-hidden select-none appearance-none bg-black text-white py-28 grid place-items-center font-yekanBakh">
      <p className="text-stone-400 text-4xl">Ooops</p>
      <video className="h-full" src="/eyes.mp4" autoPlay loop muted></video>
      <p className="text-9xl mt-3">404</p>
      <p className="text-xl">Page Not Found</p>
    </div>
  );
}
