import nlp from "compromise/three";

// Add custom categories to compromise
//@ts-ignore
nlp.extend((Doc, world) => {
  world.addTags({
    Technology: [
      "tech",
      "computer",
      "software",
      "hardware",
      "internet",
      "digital",
    ],
    Science: ["research", "study", "experiment", "scientific", "discovery"],
    Sports: ["game", "player", "team", "score", "championship", "athlete"],
    Entertainment: ["movie", "music", "celebrity", "film", "concert", "show"],
    Business: ["company", "market", "finance", "economy", "stock", "trade"],
  });
});

// Function to classify text
export async function classifyText(text) {
  console.log("classify called");
  const doc = nlp(text);
  const categories = [
    "Technology",
    "Science",
    "Sports",
    "Entertainment",
    "Business",
  ];
  let maxScore = 0;
  let maxCategory = "";

  categories.forEach((category) => {
    const score = doc.match("#" + category).length;
    if (score > maxScore) {
      maxScore = score;
      maxCategory = category;
    }
  });
  console.log(maxCategory);
  return maxCategory || "Uncategorized";
}
