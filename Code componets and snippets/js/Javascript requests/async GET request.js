const getData = async () => {
  try {
    const res = await fetch("https://api-to-call.com/endpoint");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
