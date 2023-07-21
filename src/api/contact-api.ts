import axios from "axios";

export const sendMessage = async (responseBody: any) => {
    await axios.post('https://gmail-smtp-sigma.vercel.app/sendMessage', {
        name: responseBody.name,
        contact: responseBody.contact,
        message: responseBody.message
    })
}
