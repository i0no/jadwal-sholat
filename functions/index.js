exports.handler = async (event) => {
  // Use Jakarta (1301) if no city ID is provided
  const cityId = event.queryStringParameters.city || "1301";

  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');

  try {
    const response = await fetch(`https://api.myquran.com/v2/sholat/jadwal/${cityId}/${y}/${m}/${d}`);
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
      body: JSON.stringify({ error: "API Down", message: error.message })
    };
  }
};
