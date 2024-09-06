/* eslint-disable react/prop-types */
// import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { Header } from "../Header/Header.jsx";
import { Footer } from "../Footer/Footer.jsx";
import { Loader } from "../Loader/Loader.jsx";

export default function Layout() {
  const navigation = useNavigation();
  // console.log(navigation);
  const isLoading = navigation.state === "loading";
  // console.log(isLoading);

  return (
    <div className="h-full w-full">
      <Header />
      {isLoading && <Loader />}
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
