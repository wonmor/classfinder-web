import Container from "./container";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <div className="flex flex-col gap-4 text-center lg:text-left">
            <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
              Developed by fulfill.school
            </h3>

            <p className="text-xl mb-10">Based in Seoul, South Korea</p>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <Link
              href="/posts/privacy"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Privacy Policy
            </Link>
            <Link
              href={`/posts/eula`}
              className="mx-3 font-bold hover:underline"
            >
              EULA
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
