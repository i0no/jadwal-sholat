exports.handler = async (event) => {
  const cityId = event.queryStringParameters.city || "1301";
  const provId = cityId.substring(0, 2);

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = String(now.getDate()).padStart(2, '0');

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
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                                 'X-Requested-With': 'XMLHttpRequest', // Kemenag looks for this header
                                 'Origin': 'https://bimasislam.kemenag.go.id',
                                 'Referer': 'https://bimasislam.kemenag.go.id/jadwalshalat'
      }
    });

    const rawText = await response.text();

    // Debugging: If Kemenag sends HTML (error page) instead of JSON
    if (rawText.includes("<html>")) {
      return {
        statusCode: 403,
        body: JSON.stringify({ error: "Blocked by Kemenag Firewall", raw: rawText.substring(0, 100) })
      };
    }

    const result = JSON.parse(rawText);
    const todayKey = `${year}-${String(month).padStart(2, '0')}-${day}`;
    const todayData = result.data ? result.data[todayKey] : null;

    if (!todayData) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: "Data not found", availableKeys: Object.keys(result.data || {}) })
      };
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tanggal: todayKey, jadwal: todayData })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server Crash", message: error.message })
    };
  }
};
