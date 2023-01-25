import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Navigation } from "../views/navigation/Navigation";
import { Models } from "../views/models/Models";

function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Navigation child={<React.Fragment />} title="Tableau de bord" />
        }
      />
      <Route
        path="/models"
        element={<Navigation child={<Models />} title="Modèles" />}
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default Router;
