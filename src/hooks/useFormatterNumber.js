import { useCallback, useState } from "react";

const useFormatPhoneNumber = () => {
  const [phone, setPhone] = useState("+998");
  const [isValid, setIsValid] = useState(false);

  const formatPhoneNumber = useCallback((value) => {
    if (!value) return "+998";
    const number = value.replace(/[^\d]/g, "");

    if (number.length <= 3) return `+998 `;
    if (number.length <= 5) return `+998 ${number.slice(3, 5)}`;
    if (number.length <= 8)
      return `+998 ${number.slice(3, 5)} ${number.slice(5, 8)}`;
    if (number.length <= 10) {
      return `+998 ${number.slice(3, 5)} ${number.slice(5, 8)} ${number.slice(
        8,
        10
      )}`;
    }
    return `+998 ${number.slice(3, 5)} ${number.slice(5, 8)} ${number.slice(
      8,
      10
    )} ${number.slice(10, 12)}`;
  }, []);

  const handleChange = useCallback(
    (event) => {
      const value = event.target?.value.replace(/[^\d]/g, "");
      const formattedValue = formatPhoneNumber(value);
      setPhone(formattedValue);
      setIsValid(value?.length === 12);
    },
    [formatPhoneNumber]
  );

  return [phone, isValid, handleChange];
};

export default useFormatPhoneNumber;

// e.x. => const typedText = useTypewriter("Welcome to my website!", 100);
