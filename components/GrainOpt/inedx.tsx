const _GIF_SRC = "/images/grain_alt.gif";

const GrainOpt = () => {
  const styles = {
    background: `url(${_GIF_SRC})`,
  };

  return (
    <div
      style={styles}
      className="w-screen h-screen fixed z-50 top-0 left-0 pointer-events-none opacity-[0.12]"
    ></div>
  );
};

export default GrainOpt;
