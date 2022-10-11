import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "../AppLayout";
import { navigationList } from "./navigation";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          {navigationList.map((item) => (
            <Route
              key={item.name}
              path={item.path}
              element={<item.component />}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
