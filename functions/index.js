const { format } = require('date-fns'); // CommonJS import for Netlify

exports.handler = async (event) => {
  try {
    const response = await fetch('https://api.myquran.com/v2/sholat/jadwal/1301/2026/01/03');
    const data = await response.json();
    
    // Using date-fns to format the current server time
    const fetchTime = format(new Date(), 'HH:mm:ss');

    return {
      statusCode: 200,
      body: JSON.stringify({
        ...data.data,
        fetchedAt: fetchTime
      })
    };
  } catch (error) {
    return { statusCode: 500, body: "Error" };
  }
};
