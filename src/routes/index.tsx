import { Routes as RoutesContainer, Route } from "react-router-dom";

import Home from "../pages/Home";

const Routes: React.FC = () => (
  <RoutesContainer>
    <Route path="/" element={<Home />} />
    <Route path="/minha-conta" element={<></>} />
  </RoutesContainer>
);

export default Routes;
