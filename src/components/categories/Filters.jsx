import style from "@/styles/modules/categories/filters.module.css";
import { IconAdjustmentsHorizontal } from "@tabler/icons-react";
import { lazy, useState } from "react";

const FilterSidebar = lazy(() => import("./FiltersSidebar"));

export default function Filters() {
  const [show, setShow] = useState(false);
  const handleShowSidebar = () => {
    setShow(!show);
  };

  return (
    <>
      <div className={style.containerFilters} onClick={handleShowSidebar}>
        <p>Filters</p>
        <IconAdjustmentsHorizontal />
      </div>
      <FilterSidebar show={show} setShow={setShow} />
    </>
  );
}
