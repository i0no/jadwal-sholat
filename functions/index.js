exports.handler = async (event) => {
  const cityId = event.queryStringParameters.city || "1301";
  const provId = cityId.substring(0, 2);

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = String(now.getDate()).padStart(2, '0');

  // Official public token
  const KEMENAG_TOKEN = "af7c667b9819378c0bddb3baede9525b";

  try {
    const params = new URLSearchParams();
    params.append('param_prov', provId);
    params.append('param_kabko', cityId);
    params.append('param_thn', year);
    params.append('param_bln', month);
    params.append('param_token', KEMENAG_TOKEN);

    const response = await fetch('https://bimasislam.kemenag.go.id/apiv1/getShalatJadwal', {
      method: 'POST',
      body: params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                                 'Accept': 'application/json, text/javascript, */*; q=0.01',
                                 'Origin': 'https://bimasislam.kemenag.go.id',
                                 'Referer': 'https://bimasislam.kemenag.go.id/jadwalshalat'
      }
    });

    if (!response.ok) {
      throw new Error(`Kemenag Server returned ${response.status}`);
    }

    const result = await response.json();
    const todayKey = `${year}-${String(month).padStart(2, '0')}-${day}`;
    const todayData = result.data ? result.data[todayKey] : null;

    if (!todayData) {
      return { statusCode: 404, body: JSON.stringify({ error: "Data not found for today" }) };
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        tanggal: todayKey,
        jadwal: todayData
      })
    };
  } catch (error) {
    console.error("Internal Error:", error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Connection Failed", message: error.message })
    };
  }
};
