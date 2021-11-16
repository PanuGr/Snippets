const getData = async () => {
  try {
    const res = await fetch("https://api-to-call.com/endpoint");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};


//multiple requests at the same time
const getData = async () => {
  try {
    const url1 = "https://v1.nocodeapi.com/panugr/google_sheets/weAjdfuhKgnxoMqy?tabId=Projects&row_id=2";
        const url2 = "https://v1.nocodeapi.com/panugr/google_sheets/weAjdfuhKgnxoMqy?tabId=Projects&row_id=3";
        const url3 = "https://v1.nocodeapi.com/panugr/google_sheets/weAjdfuhKgnxoMqy?tabId=Projects&row_id=16";
        
      const results = await Promise.all([fetch(url1), fetch(url2), fetch(url3)]);
        const finalData = await Promise.all(results.map(result => result.json()));
    return finalData;
  } catch (error) {
    console.error(error);
  }
};
  

     
