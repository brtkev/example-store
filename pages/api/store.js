// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require('fs');
function getData(){
  return JSON.parse(fs.readFileSync('./pages/api/data.json', 'utf8'));
}

export default function handler(req, res) {
  res.status(200).json(getData());
}
