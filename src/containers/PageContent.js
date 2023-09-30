import Header from "./Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "../routes";
import { Suspense, lazy, useEffect, useRef } from "react";
import SuspenseContent from "./SuspenseContent";
import { useSelector } from "react-redux";

const Page404 = lazy(() => import("../pages/protected/404"));

function renderRoutes(routes) {
  return routes.map((route, key) => {
    if (route.children && route.children.length > 0) {
      // Handle child routes by recursively calling renderRoutes
      const childRoutes = renderRoutes(route.children);
      return (
        <Route key={key} path={route.path}>
          {childRoutes}
        </Route>
      );
    } else {
      return (
        <Route key={key} path={route.path} element={<route.component />} />
      );
    }
  });
}

function PageContent() {
  const mainContentRef = useRef(null);
  const { pageTitle } = useSelector((state) => state.header);

  // Scroll back to top on new page load
  useEffect(() => {
    mainContentRef.current.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [pageTitle]);

  return (
    <div className="drawer-content flex flex-col ">
      <Header />
      <main
        className="flex-1 overflow-y-auto pt-8 px-6  bg-base-200"
        ref={mainContentRef}
      >
        <Suspense fallback={<SuspenseContent />}>
          <Routes>
            {renderRoutes(routes)}

            {/* Redirecting unknown url to 404 page */}
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Suspense>
        <div className="h-16"></div>
      </main>
    </div>
  );
}

export default PageContent;
