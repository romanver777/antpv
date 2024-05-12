import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Protected from "../components/protected/protected";
import SignUpPage from "./sign-up-page/sign-up-page";
import PartnersPage from "./partners-page/partners-page";
import PartnerPage from "./partner-page/partner-page";
import { useAppDispatch } from "../store/hooks";
import { init } from "../store/auth/auth";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(init());
  }, [dispatch]);

  return (
    <Routes>
      <Route
        path=""
        element={
          <Protected redirect="/signup">
            <PartnersPage />
          </Protected>
        }
      >
        <Route
          path="/user/:id"
          element={
            <Protected redirect="/signup">
              <PartnerPage />
            </Protected>
          }
        />
      </Route>
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
}

export default App;
