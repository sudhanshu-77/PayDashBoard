import { useMemo } from "react";
import TypeParentStateInactiveB from "./TypeParentStateInactiveB";
import Property1WalletCredits from "./Property1WalletCredits";

const BaseNavigationBar = ({
  navbarIcon,
  navbarIcon1,
  navbarIcon2,
  showBaseNavButton,
  baseNavButtonVisible,
  baseNavButtonVisible1,
  navbarIconOpacity,
  baseNavButtonBackgroundColor,
  navbarIconOpacity1,
  homeFontFamily,
  homeOpacity,
}) => {
  const navbarIconStyle = useMemo(() => {
    return {
      opacity: navbarIconOpacity,
    };
  }, [navbarIconOpacity]);

  const typeParentStateInactiveBStyle = useMemo(() => {
    return {
      backgroundColor: baseNavButtonBackgroundColor,
    };
  }, [baseNavButtonBackgroundColor]);

  const navbarIconStyle1 = useMemo(() => {
    return {
      opacity: navbarIconOpacity1,
    };
  }, [navbarIconOpacity1]);

  const homeStyle = useMemo(() => {
    return {
      fontFamily: homeFontFamily,
      opacity: homeOpacity,
    };
  }, [homeFontFamily, homeOpacity]);

  return (
    <div className="bg-secondary-navbar w-56 flex flex-col items-center justify-start py-4 px-2.5 box-border gap-[16px] text-left text-mini text-black-100 font-sub-title-medium flex-1">
      <div className="flex-1 flex flex-col items-center justify-start gap-[24px]">
        <a href="">
        <div className="w-48 shrink-0 flex flex-row items-center justify-start relative gap-[12px]">

          <div className="relative rounded bg-black-100 w-10 h-10 z-[0]" />
          <div className="flex-1 flex flex-col items-start justify-center gap-[4px] z-[1]">
            <div className="text-white no-underline self-stretch relative leading-[22px] font-medium">
              Nishyan
            </div>
            <div className="text-white self-stretch relative text-smi [text-decoration:underline] leading-[16px] font-body-2-medium opacity-[0.8]">
              Visit store
            </div>
          </div>
          <img
            className="absolute my-0 mx-[!important] top-[0.5px] left-[0.5px] rounded w-[39px] h-[39px] object-cover z-[2]"
            alt=""
            src="/image@2x.png"
          />
          <img
            className="relative w-5 h-5 overflow-hidden shrink-0 object-cover z-[3]"
            alt=""
            src="/bold--chevron-down@2x.png"
          />
        </div>
        </a>
        <div className="flex-1 shrink-0 flex flex-col items-start justify-start gap-[4px]">
          <a href="">
          <TypeParentStateInactiveB
            navbarIcon="/navbar-icon@2x.png"
            home="Home"
            typeParentStateInactiveBFlexShrink="0"
            navbarIconOpacity="unset"
          />
          </a>
          <a href="">
          <TypeParentStateInactiveB
            navbarIcon="/Navbar-Icon.png"
            home="Orders"
            typeParentStateInactiveBFlexShrink="0"
            navbarIconOpacity="0.8"
          />
          </a>
          <a href="">
          <TypeParentStateInactiveB
            navbarIcon="/Vector.png"
            home="Products"
            typeParentStateInactiveBFlexShrink="0"
            navbarIconOpacity="0.8"
          />
          </a>
          <a href="">
          <TypeParentStateInactiveB
            navbarIcon="/bus.png"
            home="Delivery"
            typeParentStateInactiveBFlexShrink="0"
            navbarIconOpacity="0.8"
          />
          </a>
          <TypeParentStateInactiveB
            navbarIcon="/speaker.png"
            home="Marketing"
            typeParentStateInactiveBFlexShrink="0"
            navbarIconOpacity="0.8"
          />
          <a href="">
          <TypeParentStateInactiveB
            navbarIcon="/analysis.png"
            home="Analytics"
            typeParentStateInactiveBFlexShrink="0"
            navbarIconOpacity="0.8"
          />
          </a>
          <a href="" className="bg-rgba-white-10">
          <TypeParentStateInactiveB
            navbarIcon="/Payouts.png"
            home="Payouts"
            typeParentStateInactiveBFlexShrink="0"
            navbarIconOpacity="0.8"
          />
          </a>
          <a href="">
          <TypeParentStateInactiveB
            navbarIcon="/arrow.png"
            home="Tools"
            typeParentStateInactiveBFlexShrink="0"
            navbarIconOpacity="0.8"
          />
          </a>
          <a href="">
          <TypeParentStateInactiveB
            navbarIcon="/Discount.png"
            home="Discounts"
            typeParentStateInactiveBFlexShrink="0"
            navbarIconOpacity="0.8"
          />
          </a>
          <a href="">
          <TypeParentStateInactiveB
            navbarIcon="/audience.png"
            home="Audience"
            typeParentStateInactiveBFlexShrink="0"
            navbarIconOpacity="0.8"
          />
          </a>
          <a href="">
          <TypeParentStateInactiveB
            navbarIcon="/Affilaters.png"
            home="Affiliates"
            typeParentStateInactiveBFlexShrink="0"
            navbarIconOpacity="0.8"
          />
          </a>
          <a href="">
          <TypeParentStateInactiveB
            navbarIcon="/Vendor.png"
            home="Vendors"
            typeParentStateInactiveBFlexShrink="0"
            navbarIconOpacity="0.8"
          />
          </a>
          <a href="">
          <TypeParentStateInactiveB
            navbarIcon="app.png"
            home="Appearance"
            typeParentStateInactiveBFlexShrink="0"
            navbarIconOpacity="0.8"
          />
          </a>
          <a href="">
          <TypeParentStateInactiveB
            navbarIcon="/Plug.png"
            home="Plugins"
            typeParentStateInactiveBFlexShrink="0"
            navbarIconOpacity="0.8"
          />
          </a>
        </div>
      </div>
      <Property1WalletCredits />
    </div>
  );
};

export default BaseNavigationBar;
