import { Routes as RoutesContainer, Route } from "react-router-dom";

import Home from "../pages/Home";
import MyAccount from "../pages/MyAccount";

const Routes: React.FC = () => (
  <RoutesContainer>
    <Route path="/" element={<Home />} />
    <Route path="/minha-conta" element={<MyAccount />} />
  </RoutesContainer>
);

export default Routes;
