import React, { Suspense } from "react";

const SubMenu1Lazy = React.lazy(() => import("./SubMenu1Lazy"));

function SubMenu1() {
    return (
      <Suspense fallback={<div>Loading</div>}>
        <SubMenu1Lazy />
      </Suspense>
    );
  }
  
export default SubMenu1;
  