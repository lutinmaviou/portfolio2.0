export const useEncodedUrl = (obj) => {
  const data = new URLSearchParams(obj).toString();
  return data;
};
