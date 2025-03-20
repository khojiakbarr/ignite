const { default: axios } = require("axios");
const { default: toast } = require("react-hot-toast");

const CHAT_ID = "-1002533769057";
const TOKEN = "7834852848:AAHaYDvk56IjOK9tGpN-F1x3Vy_GeZVz0Io";
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

export const sendMessage = async (data) => {
  let message = `Contact\n`;
  message += `<b>Name: </b>${data.name}\n`;
  message += `<b>Phone: </b> ${data.phone}`;
  console.log(message);

  const res = await axios.post(URL_API, {
    chat_id: CHAT_ID,
    parse_mode: "html",
    text: message,
  });
  // console.log(res);
  
  // if (res.status === 200) {
  //   toast.success("Отправлено успешно");
  // }
};
