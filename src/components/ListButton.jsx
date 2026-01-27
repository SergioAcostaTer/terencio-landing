import React from "react";

const ListButton = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [animationClass, setAnimationClass] = React.useState("");
  const [navAnimationClass, setNavAnimationClass] = React.useState("");

  const handleClick = () => {
    if (menuOpen) {
      setAnimationClass("fade-out");
      setNavAnimationClass("slide-out");
      setTimeout(() => {
        setMenuOpen(false);
      }, 200);
    } else {
      setMenuOpen(true);
      setAnimationClass("fade-in");
      setNavAnimationClass("slide-in");
    }
  };



  const pages = [
    { title: "Inicio", link: "/" },
    // { title: "Supermercados", link: "/supermercados" },
    { title: "Profesionales", link: "/profesionales" },
    { title: "Trabaja con nosotros", link: "/trabaja-con-nosotros" },
    { title: "Sostenibilidad", link: "/sostenibilidad" },
    { title: "Atención al cliente", link: "/atencion-al-cliente" },
    { title: "Transparencia", link: "/transparencia" },
    { title: "Blog", link: "/blog" },
  ]


  return (
    <>
      <div
        className={`w-screen h-[calc(100vh-6rem)] top-[6rem] bg-black/40 fixed left-0 z-[110] ${animationClass}`}
        style={{ display: menuOpen ? "block" : "none" }}
        onClick={handleClick}
      ></div>

      <div
        className={`w-screen fixed top-[6rem] left-0 bg-white z-[110] ${animationClass} bg-[var(--header)]`}
        style={{ display: menuOpen ? "block" : "none", margin: "0" }}
      >
        <nav
          className={`flex flex-col justify-center ${navAnimationClass} transition-colors hover:text-foreground text-foreground/80 text-2xl font-bold`}
        >

          {pages.map((page, index) => (
            <a
              key={index}
              className={`py-4 border-b border-foreground/20 px-4`}
              href={page.link}
            >
              <p className="transition-colors hover:text-foreground text-foreground/80 text-2xl font-bold">
                {page.title}
              </p>
            </a>
          ))}

        </nav>
      </div>

      <div className="flex items-center space-x-2 md:hidden">
        <button onClick={handleClick}>
          <img src={"/list.svg"} alt="list" className="w-8 h-8" />
        </button>
      </div>
    </>
  );
};

export default ListButton;
