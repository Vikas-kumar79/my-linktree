import Image from "next/image";

export default function Home() {
  return (
    <main>
     <section className="bg-[#254f1a] min-h-[100vh] grid grid-cols-2">
  <div className="flex items-center justify-center flex-col ml-[10vw] gap-4">
    <p className="text-yellow-300 font-bold text-7xl">
      Everything you
    </p>

    <p className="text-yellow-300 font-bold text-7xl">
      need in one
    </p>

    <p className="text-yellow-300 font-bold text-7xl">
      simple link in bio.
    </p>

    <p className="text-yellow-300 text-xl">
      Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.
    </p>

    <div className="flex gap-2">
      <input
        className="px-2 py-2 focus:outline-none focus:ring-800 rounded-md"
        type="text"
        placeholder="bittree/your-url"
      />

      <button className="bg-pink-300 rounded-full px-4 py-4 font-semibold">
        Claim your Bittree
      </button>
    </div>
  </div>

  <div className="flex items-center justify-center flex-col mr-[10vw]">
    <img src="/home.png" alt="homepage image" />
  </div>
</section>

<section className="bg-red-700 min-h-[100vh]">
</section>
</main>
  );
}