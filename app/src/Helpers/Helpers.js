export const FromISOToString = (date) => {
  let timeZone = date.getTimeZoneOffset() * 60000;
  return new Date(date - timeZone).toISOString().split("T")[0];
};

export const FromStringToISO = (date) => {
  let newDt = new Date(date);
  newDt.setMinutes(newDt.setMinutes() + newDt.getTimeZoneOffset());
  return newDt;
};

export const CleanCPFCNPJ = (value) => {
  return value
    .replaceAll(" ", "")
    .replaceAll(".", "")
    .replaceAll("-", "")
    .replaceAll("/", "");
};

export const EscapedRegExp = (value) => {
  return value.replaceAll(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$g");
};



export const ShowErrorSnackBar = (err, appContext, setAppContext) => {
  console.log(err);
  return setAppContext({
    ...appContext,
    warning: {
      opened: true,
      type: "error",
      msg: `${err.response.data.detail} 😑`,
    },
  });
};

export const ShowSuccessSnackBar = (res, appContext, setAppContext) => {
  return setAppContext({
    ...appContext,
    warning: {
      opened: true,
      type: "success",
      msg: `${res.data.detail} 😊`,
    },
  });
};

export const formtCurrencyBR = (value) => {
  return value.toLocaleString("pt-BR");
};

export function getDescenProp(obj, desc) {
  let array = desc.split(".");
  while (array.length && (obj = obj[array.shift()]));
  return obj;
}

export const handleOptionsAPI = (options, id, label) => {
  return options.map((element) => ({
    value: getDescenProp(element, id),
    label:
      typeof label === "function"
        ? label(element)
        : getDescenProp(element, label),
  }));
};
