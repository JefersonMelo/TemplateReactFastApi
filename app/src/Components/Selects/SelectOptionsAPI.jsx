import React, { useState, useEffect } from "react";
import { SelectOptions } from "./SelectOptions";
import { SelectOptionsMultiple } from "./SelectOptionsMultiple";
import api from "../../Services/Api";
import { useAppContext } from "../../Contexts/AppContext";
import { handleOptionsAPI } from "../../Helpers/Helpers";

export default function SelectOptionsAPI({
  route,
  identifier_field,
  label_field,
  multiple,
  ...remainingProps
}) {
  const [options, setOptions] = useState([]);
  const [appContext, setAppContext] = useAppContext();
  const { setDataExternal, setOptionsExternal } = remainingProps;

  const SelectComponent = multiple ? SelectOptionsMultiple : SelectOptions;

  useEffect(() => {
    const abort = new AbortController();
    api
      .get(route, { signal: abort.signal })
      .then((res) => {
        let opt = handleOptionsAPI(res.data, identifier_field, label_field);
        setOptions(opt);
        if (setDataExternal) {
          setDataExternal(res.data);
        }

        if (setOptionsExternal) {
          setOptionsExternal(options);
        }
      })
      .catch((err) => {
        if (err.message === "canceled" && appContext.warning.opened) {
          console.log("error, the end Component");
        }

        if (err.message === "canceled") {
          console.log(err);
        }
      });

    return () => abort.abort();
  }, [route, identifier_field, label_field]);

  return <SelectComponent options={options} {...remainingProps} />;
}
