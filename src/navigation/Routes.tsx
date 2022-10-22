import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Navigation } from "../views/navigation/Navigation";

function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Navigation child={<React.Fragment />} title="Tableau de bord" />
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default Router;
