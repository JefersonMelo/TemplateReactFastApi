export const validatorCPF = (value) => {
  if (!value) return;

  const cpf = value.replace(/[^\d]+/g, "");

  if (
    cpf.length !== 11 ||
    cpf === "00000000000" ||
    cpf === "11111111111" ||
    cpf === "22222222222" ||
    cpf === "33333333333" ||
    cpf === "44444444444" ||
    cpf === "55555555555" ||
    cpf === "66666666666" ||
    cpf === "77777777777" ||
    cpf === "88888888888" ||
    cpf === "99999999999"
  )
    return false;

  let sum = 0;
  let checker = 0;

  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i);
  }

  checker = 11 - (sum % 11);

  if (checker === 10 || checker === 11) checker = 0;

  if (checker !== parseInt(cpf.charAt(9))) return false;

  sum = 0;
  let checker_2 = 0;

  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i);
  }

  checker_2 = 11 - (sum % 11);

  if (checker_2 === 10 || checker_2 === 11) checker_2 = 0;

  return checker_2 === parseInt(cpf.charAt(10));
};

export const validatorCNPJ = (value) => {
  if (!value) return;

  const cnpj = value.replace(/[^\d]+/g, "");

  if (
    cnpj.length !== 14 ||
    cnpj === "00000000000000" ||
    cnpj === "11111111111111" ||
    cnpj === "22222222222222" ||
    cnpj === "33333333333333" ||
    cnpj === "44444444444444" ||
    cnpj === "55555555555555" ||
    cnpj === "66666666666666" ||
    cnpj === "77777777777777" ||
    cnpj === "88888888888888" ||
    cnpj === "99999999999999"
  )
    return false;

  let len = cnpj.length - 2;
  let num = cnpj.substring(0, len);
  let digit = cnpj.substring(len);
  let sum = 0;
  let pos = len - 7;

  for (let i = len; i >= 1; i--) {
    sum += num.charAt(len - i) * pos--;
    if (pos < 2) pos = 9;
  }

  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

  if (result !== digit.charAt(0)) return false;

  len = len + 1;
  num = cnpj.substring(0, len);
  sum = 0;
  pos = len - 7;

  for (let i = len; i >= 1; i--) {
    sum += num.charAt(len - i) * pos--;
    if (pos < 2) pos = 9;
  }

  result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

  return result !== digit.charAt(1);
};

export default function documentNumberValidator({ num }) {
  return validatorCNPJ(num) || validatorCPF(num);
}

export const validatorEmail = (value) => {
  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  return regex.test(value);
};
