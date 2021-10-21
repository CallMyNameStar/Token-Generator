const axios = require("axios");
const fs = require("fs");

const joiner = async (token) => {
  let headers = {
    "content-type": "application/json",
    authorization: token,
    accept: "*/*",
    "accept-language": "it",
    "content-length": "2494",
    "content-type": "application/json",
    cookie:
      "__dcfduid=b869a603173111ec93fb42010a0a08eb; __sdcfduid=b869a603173111ec93fb42010a0a08eb3357755a7de89e44770dd66a95570c3c027fec30b341002eb04881e3aaebfacb; locale=it",
    origin: "https://discord.com",
    referer: "https://discord.com/verify",
    "sec-ch-ua":
      'Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "Windows",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36",
    "x-debug-options": "bugReporterEnabled",
    "x-super-properties":
      "eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiQ2hyb21lIiwiZGV2aWNlIjoiIiwic3lzdGVtX2xvY2FsZSI6ImVuLVVTIiwiYnJvd3Nlcl91c2VyX2FnZW50IjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzkzLjAuNDU3Ny44MiBTYWZhcmkvNTM3LjM2IiwiYnJvd3Nlcl92ZXJzaW9uIjoiOTMuMC40NTc3LjgyIiwib3NfdmVyc2lvbiI6IjEwIiwicmVmZXJyZXIiOiJodHRwczovL2Rpc2NvcmQuY29tL2xvZ2luIiwicmVmZXJyaW5nX2RvbWFpbiI6ImRpc2NvcmQuY29tIiwicmVmZXJyZXJfY3VycmVudCI6IiIsInJlZmVycmluZ19kb21haW5fY3VycmVudCI6IiIsInJlbGVhc2VfY2hhbm5lbCI6InN0YWJsZSIsImNsaWVudF9idWlsZF9udW1iZXIiOjk3NjYyLCJjbGllbnRfZXZlbnRfc291cmNlIjpudWxsfQ==",
  };
  let res = "";

  res = await axios.post(
    "https://discord.com/api/v9/invites/AwAkRu3Z",
    {},
    { headers }
  );
  res = await axios.post(
    "https://discord.com/api/v9/invites/AwAkRu3Z",
    {},
    { headers }
  );
  console.log(res.data);
  console.log("hello");
};

let tokens = fs
  .readFileSync("phoneverifiedtokens.txt")
  .toString()
  .replace(/\r\n/g, "\n")
  .split("\n");

for (token of tokens) {
  joiner(token);
}
