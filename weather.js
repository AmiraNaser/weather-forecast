const api_key = '?app_id=dd01c72e&app_key=14997914005e40285d9c6b1320b9731e';
const api_base = 'http://api.weatherunlocked.com/api/forecast/';
const geo_api = 'http://api.ipapi.com/api/check?access_key=6b0f9fc0290289ed058de32a7005f13c';
let days = [];
for(let i =0; i <= 6; i++) {
  days.push(moment().add(i, 'days').format('ddd'));
}

function load() {

fetch (geo_api)
.then((res) => {
  const geoData = res.json();
  return geoData;
}).then((geoData) => {
  const lat = geoData.latitude;
  const lng = geoData.longitude;
  document.querySelector('.country').innerHTML  = geoData.country_name;
  return fetch(api_base + lat + ',' + lng + api_key);
}).then((response) => {
  const weatherData = response.json();
  return weatherData;
}).then((weatherData) => {
   document.querySelector('.temp-one').innerHTML = weatherData.Days[0].Timeframes[0].temp_c;
   document.querySelector('.humd-one').innerHTML = weatherData.Days[0].Timeframes[0].humid_pct;
   document.querySelector('.low-one').innerHTML = weatherData.Days[0].temp_min_c;
   document.querySelector('.date-one').innerHTML= (weatherData.Days[0].date).split('/')[0];
   document.querySelector('.day-one').innerHTML = days[0];
   const descriptionOne = weatherData.Days[0].Timeframes[0].wx_code;
   if(descriptionOne == 0) {
     document.querySelector('.image-container').innerHTML = "<img class='sun' width='210vw' src=\"https://svgshare.com/i/cqQ.svg\"/>";
     document.querySelector('.weather-container').className = "wsun";
     document.querySelector('.temp').className = "sec";
   }else if (descriptionOne == 1) {
     document.querySelector('.image-container').innerHTML = "<img class='sun-clouds' width='250vw' src=\"https://svgshare.com/i/ctj.svg\"/>";
     document.querySelector('.weather-container').className = "wpart";
     document.querySelector('.temp').className = "fifth";
   }else if (descriptionOne == 2 ||descriptionOne == 3 ||descriptionOne == 10 ||descriptionOne == 45) {
     document.querySelector('.image-container').innerHTML = "<img class='clouds' width='270vw' src=\"https://svgshare.com/i/cse.svg\"/>";
     document.querySelector('.weather-container').className = "wcloud";
     document.querySelector('.temp').className = "first";
   }else if (descriptionOne == 21 ||descriptionOne ==  23|| descriptionOne == 50 ||descriptionOne == 51 ||descriptionOne == 60 ||descriptionOne == 61 ||descriptionOne == 62 ||descriptionOne == 63 ||descriptionOne == 64 ||descriptionOne == 65 ||descriptionOne == 66 ||descriptionOne == 67 ||descriptionOne == 68 ||descriptionOne == 80 ||descriptionOne == 81 ||descriptionOne == 82 ||descriptionOne == 83 ||descriptionOne == 84 ||descriptionOne == 89) {
     document.querySelector('.image-container').innerHTML = "<img class='rain' width='170vw' src=\"https://svgshare.com/i/cqm.svg\"/>";
     document.querySelector('.weather-container').className = "wrain";
     document.querySelector('.temp').className = "sexth";
   }else if (descriptionOne == 22 ||descriptionOne ==  24|| descriptionOne == 29 ||descriptionOne == 38 ||descriptionOne == 39 ||descriptionOne == 49 ||descriptionOne == 56 ||descriptionOne == 57 ||descriptionOne == 70 ||descriptionOne == 71 ||descriptionOne == 72 ||descriptionOne == 73 ||descriptionOne == 74 ||descriptionOne == 75 ||descriptionOne == 79 ||descriptionOne == 85 ||descriptionOne == 86 ||descriptionOne == 87 ||descriptionOne == 88) {
     document.querySelector('.image-container').innerHTML = "<img class='snow' width='270vw' src=\"https://svgshare.com/i/cr7.svg\"/>";
     document.querySelector('.weather-container').className = "wsnow";
     document.querySelector('.temp').className = "forth";
   }else if (descriptionOne == 29 ||descriptionOne == 91 ||descriptionOne == 92 ||descriptionOne == 93 ||descriptionOne == 94) {
     document.querySelector('.image-container').innerHTML = "<img class='storm' width='250vw' src=\"https://svgshare.com/i/csA.svg\"/>";
     document.querySelector('.weather-container').className = "wstorm";
     document.querySelector('.temp').className = "third";
   }

   document.querySelector('.temp-two').innerHTML = weatherData.Days[1].Timeframes[0].temp_c;
   document.querySelector('.humd-two').innerHTML = weatherData.Days[1].Timeframes[0].humid_pct;
   document.querySelector('.low-two').innerHTML = weatherData.Days[1].temp_min_c;
   document.querySelector('.date-two').innerHTML = (weatherData.Days[1].date).split('/')[0];
   document.querySelector('.day-two').innerHTML = days[1];
   const description_two = weatherData.Days[1].Timeframes[0].wx_code;
   if(description_two == 0) {
     document.querySelector('.two').innerHTML = "<img class='sun' width='210vw' src=\"https://svgshare.com/i/cqQ.svg\"/>";
     document.querySelector('.weather-container').className = "wsun";
     document.querySelector('.temp').className = "sec";
   }else if (description_two == 1) {
     document.querySelector('.two').innerHTML = "<img class='sun-clouds' width='250vw' src=\"https://svgshare.com/i/ctj.svg\"/>";
     document.querySelector('.weather-container').className = "wpart";
     document.querySelector('.temp').className = "fifth";
   }else if (description_two == 2 ||description_two == 3 ||description_two == 10 ||description_two == 45) {
     document.querySelector('.two').innerHTML = "<img class='clouds' width='270vw' src=\"https://svgshare.com/i/cse.svg\"/>";
     document.querySelector('.weather-container').className = "wcloud";
     document.querySelector('.temp').className = "first";
   }else if (description_two == 21 ||description_two ==  23|| description_two == 50 ||description_two == 51 ||description_two == 60 ||description_two == 61 ||description_two == 62 ||description_two == 63 ||description_two == 64 ||description_two == 65 ||description_two == 66 ||description_two == 67 ||description_two == 68 ||description_two == 80 ||description_two == 81 ||description_two == 82 ||description_two == 83 ||description_two == 84 ||description_two == 89) {
     document.querySelector('.two').innerHTML = "<img class='rain' width='170vw' src=\"https://svgshare.com/i/cqm.svg\"/>";
     document.querySelector('.weather-container').className = "wrain";
     document.querySelector('.temp').className = "sexth";
   }else if (description_two == 22 ||description_two ==  24|| description_two == 29 ||description_two == 38 ||description_two == 39 ||description_two == 49 ||description_two == 56 ||description_two == 57 ||description_two == 70 ||description_two == 71 ||description_two == 72 ||description_two == 73 ||description_two == 74 ||description_two == 75 ||description_two == 79 ||description_two == 85 ||description_two == 86 ||description_two == 87 ||description_two == 88) {
     document.querySelector('.two').innerHTML = "<img class='snow' width='270vw' src=\"https://svgshare.com/i/cr7.svg\"/>";
     document.querySelector('.weather-container').className = "wsnow";
     document.querySelector('.temp').className = "forth";
   }else if (description_two == 29 ||description_two == 91 ||description_two == 92 ||description_two == 93 ||description_two == 94) {
     document.querySelector('.two').innerHTML = "<img class='storm' width='250vw' src=\"https://svgshare.com/i/csA.svg\"/>";
     document.querySelector('.weather-container').className = "wstorm";
     document.querySelector('.temp').className = "third";
   }

   document.querySelector('.temp-three').innerHTML = weatherData.Days[2].Timeframes[0].temp_c;
   document.querySelector('.humd-three').innerHTML = weatherData.Days[2].Timeframes[0].humid_pct;
   document.querySelector('.low-three').innerHTML = weatherData.Days[2].temp_min_c;
   document.querySelector('.date-three').innerHTML = (weatherData.Days[2].date).split('/')[0];
   document.querySelector('.day-three').innerHTML = days[2];
   const description_thr = weatherData.Days[2].Timeframes[0].wx_code;
   if(description_thr == 0) {
     document.querySelector('.three').innerHTML = "<img class='sun' width='210vw' src=\"https://svgshare.com/i/cqQ.svg\"/>";
     document.querySelector('.weather-container').className = "wsun";
     document.querySelector('.temp').className = "sec";
   }else if (description_thr == 1) {
     document.querySelector('.three').innerHTML = "<img class='sun-clouds' width='250vw' src=\"https://svgshare.com/i/ctj.svg\"/>";
     document.querySelector('.weather-container').className = "wpart";
     document.querySelector('.temp').className = "fifth";
   }else if (description_thr == 2 ||description_thr == 3 ||description_thr == 10 ||description_thr == 45) {
     document.querySelector('.three').innerHTML = "<img class='clouds' width='270vw' src=\"https://svgshare.com/i/cse.svg\"/>";
     document.querySelector('.weather-container').className = "wcloud";
     document.querySelector('.temp').className = "first";
   }else if (description_thr == 21 ||description_thr ==  23|| description_thr == 50 ||description_thr == 51 ||description_thr == 60 ||description_thr == 61 ||description_thr == 62 ||description_thr == 63 ||description_thr == 64 ||description_thr == 65 ||description_thr == 66 ||description_thr == 67 ||description_thr == 68 ||description_thr == 80 ||description_thr == 81 ||description_thr == 82 ||description_thr == 83 ||description_thr == 84 ||description_thr == 89) {
     document.querySelector('.three').innerHTML = "<img class='rain' width='170vw' src=\"https://svgshare.com/i/cqm.svg\"/>";
     document.querySelector('.weather-container').className = "wrain";
     document.querySelector('.temp').className = "sexth";
   }else if (description_thr == 22 ||description_thr ==  24|| description_thr == 29 ||description_thr == 38 ||description_thr == 39 ||description_thr == 49 ||description_thr == 56 ||description_thr == 57 ||description_thr == 70 ||description_thr == 71 ||description_thr == 72 ||description_thr == 73 ||description_thr == 74 ||description_thr == 75 ||description_thr == 79 ||description_thr == 85 ||description_thr == 86 ||description_thr == 87 ||description_thr == 88) {
     document.querySelector('.three').innerHTML = "<img class='snow' width='270vw' src=\"https://svgshare.com/i/cr7.svg\"/>";
     document.querySelector('.weather-container').className = "wsnow";
     document.querySelector('.temp').className = "forth";
   }else if (description_thr == 29 ||description_thr == 91 ||description_thr == 92 ||description_thr == 93 ||description_thr == 94) {
     document.querySelector('.three').innerHTML = "<img class='storm' width='250vw' src=\"https://svgshare.com/i/csA.svg\"/>";
     document.querySelector('.weather-container').className = "wstorm";
     document.querySelector('.temp').className = "third";
   }

   document.querySelector('.temp-four').innerHTML = weatherData.Days[3].Timeframes[0].temp_c;
   document.querySelector('.humd-four').innerHTML = weatherData.Days[3].Timeframes[0].humid_pct;
   document.querySelector('.low-four').innerHTML = weatherData.Days[3].temp_min_c;
   document.querySelector('.date-four').innerHTML = (weatherData.Days[3].date).split('/')[0];
   document.querySelector('.day-four').innerHTML = days[3];
   const descriptionfr = weatherData.Days[3].Timeframes[0].wx_code;
   if(descriptionfr == 0) {
     document.querySelector('.four').innerHTML = "<img class='sun' width='210vw' src=\"https://svgshare.com/i/cqQ.svg\"/>";
     document.querySelector('.weather-container').className = "wsun";
     document.querySelector('.temp').className = "sec";
   }else if (descriptionfr == 1) {
     document.querySelector('.four').innerHTML = "<img class='sun-clouds' width='250vw' src=\"https://svgshare.com/i/ctj.svg\"/>";
     document.querySelector('.weather-container').className = "wpart";
     document.querySelector('.temp').className = "fifth";
   }else if (descriptionfr == 2 ||descriptionfr == 3 ||descriptionfr == 10 ||descriptionfr == 45) {
     document.querySelector('.four').innerHTML = "<img class='clouds' width='270vw' src=\"https://svgshare.com/i/cse.svg\"/>";
     document.querySelector('.weather-container').className = "wpart";
     document.querySelector('.temp').className = "fifth";
   }else if (descriptionfr == 21 ||descriptionfr ==  23|| descriptionfr == 50 ||descriptionfr == 51 ||descriptionfr == 60 ||descriptionfr == 61 ||descriptionfr == 62 ||descriptionfr == 63 ||descriptionfr == 64 ||descriptionfr == 65 ||descriptionfr == 66 ||descriptionfr == 67 ||descriptionfr == 68 ||descriptionfr == 80 ||descriptionfr == 81 ||descriptionfr == 82 ||descriptionfr == 83 ||descriptionfr == 84 ||descriptionfr == 89) {
     document.querySelector('.four').innerHTML = "<img class='rain' width='170vw' src=\"https://svgshare.com/i/cqm.svg\"/>";
     document.querySelector('.weather-container').className = "wrain";
     document.querySelector('.temp').className = "sexth";
   }else if (descriptionfr == 22 ||descriptionfr ==  24|| descriptionfr == 29 ||descriptionfr == 38 ||descriptionfr == 39 ||descriptionfr == 49 ||descriptionfr == 56 ||descriptionfr == 57 ||descriptionfr == 70 ||descriptionfr == 71 ||descriptionfr == 72 ||descriptionfr == 73 ||descriptionfr == 74 ||descriptionfr == 75 ||descriptionfr == 79 ||descriptionfr == 85 ||descriptionfr == 86 ||descriptionfr == 87 ||descriptionfr == 88) {
     document.querySelector('.four').innerHTML = "<img class='snow' width='270vw' src=\"https://svgshare.com/i/cr7.svg\"/>";
     document.querySelector('.weather-container').className = "wsnow";
     document.querySelector('.temp').className = "forth";
   }else if (descriptionfr == 29 ||descriptionfr == 91 ||descriptionfr == 92 ||descriptionfr == 93 ||descriptionfr == 94) {
     document.querySelector('.four').innerHTML = "<img class='storm' width='250vw' src=\"https://svgshare.com/i/csA.svg\"/>";
     document.querySelector('.weather-container').className = "wstorm";
     document.querySelector('.temp').className = "third";
   }

   document.querySelector('.temp-five').innerHTML = weatherData.Days[4].Timeframes[0].temp_c;
   document.querySelector('.humd-five').innerHTML = weatherData.Days[4].Timeframes[0].humid_pct;
   document.querySelector('.low-five').innerHTML = weatherData.Days[4].temp_min_c;
   document.querySelector('.date-five').innerHTML = (weatherData.Days[4].date).split('/')[0];
   document.querySelector('.day-five').innerHTML = days[4];
   const descriptionfv = weatherData.Days[4].Timeframes[0].wx_code;
   if(descriptionfv == 0) {
     document.querySelector('.five').innerHTML = "<img class='sun' width='210vw' src=\"https://svgshare.com/i/cqQ.svg\"/>";
     document.querySelector('.weather-container').className = "wsun";
     document.querySelector('.temp').className = "sec";
   }else if (descriptionfv == 1) {
     document.querySelector('.five').innerHTML = "<img class='sun-clouds' width='250vw' src=\"https://svgshare.com/i/ctj.svg\"/>";
     document.querySelector('.weather-container').className = "wpart";
     document.querySelector('.temp').className = "fifth";
   }else if (descriptionfv == 2 ||descriptionfv == 3 ||descriptionfv == 10 ||descriptionfv == 45) {
     document.querySelector('.five').innerHTML = "<img class='clouds' width='270vw' src=\"https://svgshare.com/i/cse.svg\"/>";
     document.querySelector('.weather-container').className = "wcloud";
     document.querySelector('.temp').className = "first";
   }else if (descriptionfv == 21 ||descriptionfv ==  23|| descriptionfv == 50 ||descriptionfv == 51 ||descriptionfv == 60 ||descriptionfv == 61 ||descriptionfv == 62 ||descriptionfv == 63 ||descriptionfv == 64 ||descriptionfv == 65 ||descriptionfv == 66 ||descriptionfv == 67 ||descriptionfv == 68 ||descriptionfv == 80 ||descriptionfv == 81 ||descriptionfv == 82 ||descriptionfv == 83 ||descriptionfv == 84 ||descriptionfv == 89) {
     document.querySelector('.five').innerHTML = "<img class='rain' width='170vw' src=\"https://svgshare.com/i/cqm.svg\"/>";
     document.querySelector('.weather-container').className = "wrain";
     document.querySelector('.temp').className = "sexth";
   }else if (descriptionfv == 22 ||descriptionfv ==  24|| descriptionfv == 29 ||descriptionfv == 38 ||descriptionfv == 39 ||descriptionfv == 49 ||descriptionfv == 56 ||descriptionfv == 57 ||descriptionfv == 70 ||descriptionfv == 71 ||descriptionfv == 72 ||descriptionfv == 73 ||descriptionfv == 74 ||descriptionfv == 75 ||descriptionfv == 79 ||descriptionfv == 85 ||descriptionfv == 86 ||descriptionfv == 87 ||descriptionfv == 88) {
     document.querySelector('.five').innerHTML = "<img class='snow' width='270vw' src=\"https://svgshare.com/i/cr7.svg\"/>";
     document.querySelector('.weather-container').className = "wsnow";
     document.querySelector('.temp').className = "forth";
   }else if (descriptionfv == 29 ||descriptionfv == 91 ||descriptionfv == 92 ||descriptionfv == 93 ||descriptionfv == 94) {
     document.querySelector('.five').innerHTML = "<img class='storm' width='250vw' src=\"https://svgshare.com/i/csA.svg\"/>";
     document.querySelector('.weather-container').className = "wstorm";
     document.querySelector('.temp').className = "third";
   }

   document.querySelector('.temp-sex').innerHTML = weatherData.Days[5].Timeframes[0].temp_c;
   document.querySelector('.humd-sex').innerHTML = weatherData.Days[5].Timeframes[0].humid_pct;
   document.querySelector('.low-sex').innerHTML = weatherData.Days[5].temp_min_c;
   document.querySelector('.date-sex').innerHTML = (weatherData.Days[5].date).split('/')[0];
   document.querySelector('.day-sex').innerHTML = days[5];
   const descriptionsx = weatherData.Days[5].Timeframes[0].wx_code;
   if(descriptionsx == 0) {
     document.querySelector('.sex').innerHTML = "<img class='sun' width='210vw' src=\"https://svgshare.com/i/cqQ.svg\"/>";
     document.querySelector('.weather-container').className = "wsun";
     document.querySelector('.temp').className = "sec";
   }else if (descriptionsx == 1) {
     document.querySelector('.sex').innerHTML = "<img class='sun-clouds' width='250vw' src=\"https://svgshare.com/i/ctj.svg\"/>";
     document.querySelector('.weather-container').className = "wpart";
     document.querySelector('.temp').className = "fifth";
   }else if (descriptionsx == 2 ||descriptionsx == 3 ||descriptionsx == 10 ||descriptionsx == 45) {
     document.querySelector('.sex').innerHTML = "<img class='clouds' width='270vw' src=\"https://svgshare.com/i/cse.svg\"/>";
     document.querySelector('.weather-container').className = "wcloud";
     document.querySelector('.temp').className = "first";
   }else if (descriptionsx == 21 ||descriptionsx ==  23|| descriptionsx == 50 ||descriptionsx == 51 ||descriptionsx == 60 ||descriptionsx == 61 ||descriptionsx == 62 ||descriptionsx == 63 ||descriptionsx == 64 ||descriptionsx == 65 ||descriptionsx == 66 ||descriptionsx == 67 ||descriptionsx == 68 ||descriptionsx == 80 ||descriptionsx == 81 ||descriptionsx == 82 ||descriptionsx == 83 ||descriptionsx == 84 ||descriptionsx == 89) {
     document.querySelector('.sex').innerHTML = "<img class='rain' width='170vw' src=\"https://svgshare.com/i/cqm.svg\"/>";
     document.querySelector('.weather-container').className = "wrain";
     document.querySelector('.temp').className = "sexth";
   }else if (descriptionsx == 22 ||descriptionsx ==  24|| descriptionsx == 29 ||descriptionsx == 38 ||descriptionsx == 39 ||descriptionsx == 49 ||descriptionsx == 56 ||descriptionsx == 57 ||descriptionsx == 70 ||descriptionsx == 71 ||descriptionsx == 72 ||descriptionsx == 73 ||descriptionsx == 74 ||descriptionsx == 75 ||descriptionsx == 79 ||descriptionsx == 85 ||descriptionsx == 86 ||descriptionsx == 87 ||descriptionsx == 88) {
     document.querySelector('.sex').innerHTML = "<img class='snow' width='270vw' src=\"https://svgshare.com/i/cr7.svg\"/>";
     document.querySelector('.weather-container').className = "wsnow";
     document.querySelector('.temp').className = "forth";
   }else if (descriptionsx == 29 ||descriptionsx == 91 ||descriptionsx == 92 ||descriptionsx == 93 ||descriptionsx == 94) {
     document.querySelector('.sex').innerHTML = "<img class='storm' width='250vw' src=\"https://svgshare.com/i/csA.svg\"/>";
     document.querySelector('.weather-container').className = "wstorm";
     document.querySelector('.temp').className = "third";
   }

   document.querySelector('.temp-seven').innerHTML = weatherData.Days[6].Timeframes[0].temp_c;
   document.querySelector('.humd-seven').innerHTML = weatherData.Days[6].Timeframes[0].humid_pct;
   document.querySelector('.low-seven').innerHTML = weatherData.Days[6].temp_min_c;
   document.querySelector('.date-seven').innerHTML = (weatherData.Days[2].date).split('/')[0];
   document.querySelector('.day-seven').innerHTML = days[6];
   const descriptionsev = weatherData.Days[6].Timeframes[0].wx_code;
   if(descriptionsev == 0) {
     document.querySelector('.seven').innerHTML = "<img class='sun' width='210vw' src=\"https://svgshare.com/i/cqQ.svg\"/>";
     document.querySelector('.weather-container').className = "wsun";
     document.querySelector('.temp').className = "sec";
   }else if (descriptionsev == 1) {
     document.querySelector('.seven').innerHTML = "<img class='sun-clouds' width='250vw' src=\"https://svgshare.com/i/ctj.svg\"/>";
     document.querySelector('.weather-container').className = "wpart";
     document.querySelector('.temp').className = "fifth";
   }else if (descriptionsev == 2 ||descriptionsev == 3 ||descriptionsev == 10 ||descriptionsev == 45) {
     document.querySelector('.seven').innerHTML = "<img class='clouds' width='270vw' src=\"https://svgshare.com/i/cse.svg\"/>";
     document.querySelector('.weather-container').className = "wcloud";
     document.querySelector('.temp').className = "first";
   }else if (descriptionsev == 21 ||descriptionsev ==  23|| descriptionsev == 50 ||descriptionsev == 51 ||descriptionsev == 60 ||descriptionsev == 61 ||descriptionsev == 62 ||descriptionsev == 63 ||descriptionsev == 64 ||descriptionsev == 65 ||descriptionsev == 66 ||descriptionsev == 67 ||descriptionsev == 68 ||descriptionsev == 80 ||descriptionsev == 81 ||descriptionsev == 82 ||descriptionsev == 83 ||descriptionsev == 84 ||descriptionsev == 89) {
     document.querySelector('.seven').innerHTML = "<img class='rain' width='170vw' src=\"https://svgshare.com/i/cqm.svg\"/>";
     document.querySelector('.weather-container').className = "wrain";
     document.querySelector('.temp').className = "sexth";
   }else if (descriptionsev == 22 ||descriptionsev ==  24|| descriptionsev == 29 ||descriptionsev == 38 ||descriptionsev == 39 ||descriptionsev == 49 ||descriptionsev == 56 ||descriptionsev == 57 ||descriptionsev == 70 ||descriptionsev == 71 ||descriptionsev == 72 ||descriptionsev == 73 ||descriptionsev == 74 ||descriptionsev == 75 ||descriptionsev == 79 ||descriptionsev == 85 ||descriptionsev == 86 ||descriptionsev == 87 ||descriptionsev == 88) {
     document.querySelector('.seven').innerHTML = "<img class='snow' width='270vw' src=\"https://svgshare.com/i/cr7.svg\"/>";
     document.querySelector('.weather-container').className = "wsnow";
     document.querySelector('.temp').className = "forth";
   }else if (descriptionsev == 29 ||descriptionsev == 91 ||descriptionsev == 92 ||descriptionsev == 93 ||descriptionsev == 94) {
     document.querySelector('.seven').innerHTML = "<img class='storm' width='250vw' src=\"https://svgshare.com/i/csA.svg\"/>";
     document.querySelector('.weather-container').className = "wstorm";
     document.querySelector('.temp').className = "third";
   }


}).catch((e) => {
  console.log(`Caught Failure: ${e}`);
});
}
window.onload = load;
