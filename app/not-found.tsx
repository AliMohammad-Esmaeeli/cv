export default function Notfound() {
  return (
    <div className="min-h-screen bg-black text-white py-28 grid place-items-center lalezar overflow-x-hidden">
      <p className="text-stone-400 text-4xl lalezar">Ooops</p>
      <video className="h-full" src="/eyes.mp4" autoPlay loop muted></video>
      <p className="text-9xl mt-3 lalezar">404</p>
      <p className="text-xl lalezar">Page Not Found</p>
    </div>
  );
}
