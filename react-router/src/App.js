import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./layouts/Layout";
import Help from "./layouts/Help";
import Faq from "./pages/help/Faq";
import Contact, { contactAction } from "./pages/help/Contact";
import NotFound from "./pages/Notfount";
import CareerLayout from "./layouts/CareerLayout";
import Careers, { careersLoader } from "./pages/careers/Careers";
import Careerdetails, {
  careerDetailsLoader,
} from "./pages/careers/Careerdetails";
import Careererror from "./pages/careers/Careererror";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      {/*  */}
      <Route path="help" element={<Help />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>
      {/*  */}
      <Route path="careers" element={<CareerLayout />}>
        <Route index element={<Careers />} loader={careersLoader} />
        <Route
          path=":id"
          element={<Careerdetails />}
          loader={careerDetailsLoader}
          errorElement={<Careererror />}
        />
      </Route>
      {/*  */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
