import axios from "axios";

const api = axios.create({
  baseURL: "https://emaildeclutterai-backend.onrender.com",
  withCredentials: true,
});

export const fetchEmails = () => api.get("/gmail/list");
export const prioritizeEmails = (emails) =>
  api.post("/prioritizeEmails", { emails });
export const summarizeEmails = (emails) =>
  api.post("/bulkSummarize", { emails });
export const deleteEmails = (ids) => api.post("/bulkDelete", { ids });
export const unsubscribeLinks = (ids) => api.post("/bulkUnsubscribe", { ids });
