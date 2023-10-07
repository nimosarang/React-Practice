import { Route, Routes } from "react-router-dom";
import Items from "../pages/Items";
import ItemsDetail from "../pages/ItemDetail";
import ItemForm from "../pages/ItemForm";
import ItemsChild from "../pages/ItemsChild";
import AuthRouter from "./AuthRouter";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/items/*" element={<Items />}>
        <Route path="child" element={<ItemsChild />} />
      </Route>

      <Route path="/item" element={<AuthRouter />}>
        <Route path="" element={<ItemsDetail />} />
      </Route>
      <Route path="/form" element={<AuthRouter />}>
        <Route path="" element={<ItemForm />} />
      </Route>

      <Route path="/" element={<Items />}></Route>
    </Routes>
  );
}
