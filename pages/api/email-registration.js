import path from "path";
import fs from "fs";

/**
 * Build the path to the data.json file
 * @returns {string} path to the data.json file
 */
function buildPath() {
  return path.join(process.cwd(), "data", "data.json");
}

/**
 * Extract the data from the data.json file
 * @param {string} filePath path to the data.json file
 * @returns {object} data from the data.json file
 */
function extractData(filePath) {
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

export default function handler(req, res) {
  const { method } = req;

  const filePath = buildPath();
  console.log(filePath);
  const { events_categories, allEvents } = extractData(filePath);
  if (!allEvents) {
    return res.status(404).json({ status: 404, message: "No events found" });
  }
  if (method === "POST") {
    const { email, eventId } = JSON.parse(req.body);
    const newAllEvents = allEvents.map((event) => {
      if (event.id === eventId) {
        if (event.emails_registered.includes(email)) {
          res
            .status(409)
            .json({ message: "This email has already been registered" });
          return event;
        }
        return {
          ...event,
          emails_registered: [...event.emails_registered, email],
        };
      }
      return event;
    });
    fs.writeFileSync(
      filePath,
      JSON.stringify({ events_categories, allEvents: newAllEvents })
    );
    res.status(200).json({
      message: `You has been registered successfully with the email: ${email} ${eventId}`,
    });
  }
}
