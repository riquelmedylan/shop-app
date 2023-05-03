import style from "@/styles/modules/categories/filters.module.css";
import { IconAdjustmentsHorizontal } from "@tabler/icons-react";
import { useEffect } from "react";
import { lazy, useState } from "react";

const FilterSidebar = lazy(() => import("./FiltersSidebar"));
const FiltersNavbar = lazy(() => import("./FiltersNavbar"));

export default function Filters() {
  const [show, setShow] = useState(false);
  const handleShowFilter = () => {
    setShow(!show);
  };

  

  return (
    <>
      <div className={style.container}>
        <div className={style.containerFilters} onClick={handleShowFilter}>
          <p>Filters</p>
          <IconAdjustmentsHorizontal />
        </div>
        {window.screen.width >= 690 ? (
          <FiltersNavbar show={show} />
        ) : (
          <FilterSidebar show={show} setShow={setShow} />
        )}
      </div>
    </>
  );
}
