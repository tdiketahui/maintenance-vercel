export default function handler(req, res) {
  res
    .status(503)
    .send("Situs sedang dalam pemeliharaan. Harap coba lagi nanti.");
}
