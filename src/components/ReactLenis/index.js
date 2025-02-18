import Lenis from "lenis";

const ReactLenis = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return <div>{children}</div>;
};

export default ReactLenis;
