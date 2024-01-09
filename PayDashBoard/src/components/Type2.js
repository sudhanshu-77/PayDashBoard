import { useMemo } from "react";

const Type2 = ({ type2FlexShrink }) => {
  const type2Style = useMemo(() => {
    return {
      flexShrink: type2FlexShrink,
    };
  }, [type2FlexShrink]);

  return (
    <div
      className="flex flex-row items-start justify-start gap-[12px]"
      style={type2Style}
    >
      <a href="">
      <img
        className="relative w-10 h-10 overflow-hidden shrink-0 object-cover"
        alt=""
        src="/Menu.png"
      />
      </a>
      <a href="">
      <img
        className="relative w-10 h-10 overflow-hidden shrink-0 object-cover"
        alt=""
        src="/icons--menu@2x.png"
      />
      </a>
    </div>
  );
};

export default Type2;
