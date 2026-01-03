exports.handler = async (event) => {
  const cityId = event.queryStringParameters.city || "1301"; // Default: Jakarta
  const now = new Date();
  
  // Format date to YYYY/MM/DD for the API
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');

  try {
    const url = `https://api.myquran.com/v2/sholat/jadwal/${cityId}/${year}/${month}/${day}`;
    const response = await fetch(url);
    const result = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(result.data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch data" })
    };
  }
};
