import React from "react";
import { Routes, Route } from "react-router";
import PopUp from "../../components/common/PopUp/PopUp";
import HeaderContainer from "../../components/Header/containers/HeaderContainer";
import ScrollViewContainer from "../../components/ScrollView/containers/ScrollViewContainer";
import SideBoardContainer from "../../components/SideBoard/containers/SideBoardContainer";
import SideNavigationContainer from "../../components/SideNavigation/containers/SideNavigationContainer";
import { getBlockType, PopUpTypes } from "../../typedef/common/common.types";

type Props = {
  popUp: PopUpTypes;
  getBlocks: () => Promise<getBlockType[]>;
  scrollLoading: boolean;
  setScrollLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const MainNavigation = ({
  popUp,
  getBlocks,
  scrollLoading,
  setScrollLoading,
}: Props) => {
  return (
    <>
      <HeaderContainer />
      <div
        style={{ display: "flex", gap: "12px", padding: "12px 12px 0 12px" }}
      >
        <SideNavigationContainer
          getBlocks={getBlocks}
          setScrollLoading={setScrollLoading}
        />
        <div style={{ flex: "3", display: "flex", gap: "12px" }}>
          <Routes>
            <Route
              path="/home"
              element={
                <ScrollViewContainer
                  getBlocks={getBlocks}
                  scrollLoading={scrollLoading}
                  setScrollLoading={setScrollLoading}
                />
              }
            />
          </Routes>
          <SideBoardContainer />
        </div>
      </div>
      {popUp.isShown && <PopUp child={popUp.popUp} />}
    </>
  );
};

export default MainNavigation;
