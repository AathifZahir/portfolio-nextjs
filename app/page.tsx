import { BlogPosts } from "app/components/posts";
import Image from "next/image";

export default function Page() {
  return (
    <section>
      <div className="flex gap-x-4 items-center flex-row mb-10">
        <Image
          src={"/profile.jpg"}
          alt="profile pic"
          width={100}
          height={100}
          className="rounded-full overflow-hidden border-[2px] border-yellow-500 -ml-2 hover:grayscale transition-all duration-300"
        />
        <div>
          <p className="text-xl font-semibold">Aathif Zahir</p>
          <p className="text-lg text-gray-400">Student at SLIIT</p>
        </div>
      </div>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Welcome! 👋
      </h1>
      <p className="mb-4">
      I’m Aathif Zahir, a dedicated JavaScript developer and full-time student at SLIIT with a strong passion for web development. 
      With a year of self-taught coding experience, I specialize in building dynamic web applications. 
      Alongside my studies, I write part-time about web development, sharing insights and best practices. 
      I'm a strong advocate for open-source contributions and have a keen interest in JAMstack technologies. 
      Always eager to collaborate, I continuously seek opportunities to enhance my skills and grow within the developer community.
      </p>
      <div className="my-8">
        <p className="text-green-400 text-lg mb-2">From my blog</p>
        <BlogPosts />
      </div>
    </section>
  );
}
