import { Router } from "express";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const route = Router();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

route.get("/", (req, res) => {
  res.send("Welcome to Sail-IN");
});



function parseAIJson(rawText) {
  // 1. Remove markdown fences
  let cleaned = rawText.replace(/```json|```/g, "");

  // 2. Extract JSON block
  const start = cleaned.indexOf("{");
  const end = cleaned.lastIndexOf("}");

  if (start === -1 || end === -1) {
    throw new Error("No JSON object found");
  }

  cleaned = cleaned.substring(start, end + 1);

  // 3. Normalize quotes
  cleaned = cleaned
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'");

  // 4. Remove trailing commas
  cleaned = cleaned
    .replace(/,\s*}/g, "}")
    .replace(/,\s*]/g, "]");

  // 5. Remove newlines inside strings (safe)
  cleaned = cleaned.replace(/\n/g, " ").trim();

  // 6. Parse
  return JSON.parse(cleaned);
}




route.post("/getProfile", async (req, res) => {
  try {
    const { name, age, level, interest } = req.body;
    const prompt = `
You are a friendly and patient career counselling session conductor.

IMPORTANT:
- Do NOT search the web
- Do NOT reference existing articles
- Generate original content only

Your role is to gently understand a student’s personality, interests,
strengths, and preferences so that suitable career options can be suggested later.

Student details:
- Age: ${age}
- Academic level: ${level}
- Main interests: ${interest}

Task:
Create exactly 10 multiple-choice self-assessment questions for this student.

Guidelines:
- Friendly, encouraging language
- Counselling tone, not an exam
- Each question must have 3–4 options
- No yes/no questions
- No explanations

Output format:
Return ONLY valid JSON.
Do NOT include any extra text, headings, or explanations outside JSON.

The JSON format must be exactly:

{
"description":"",
  "questions":[

  {
  "question":"",
  "options":[]
  }
  ]
  }

`;

    const response = await model.generateContent(prompt);

    const text = response.response.text();
    console.log(text);

    const aiOutput = parseAIJson(text);
    console.log(aiOutput);

    res.status(200).json(aiOutput);
  } catch {
    res.status(500).json({
      status: "error",
      message: "Failed to generate AI response",
      error: error.message,
    });
  }
});

route.post("/getCareers", async (req, res) => {
  try {
    const { answers, profile } = req.body;
    console.log(answers);
    
    const prompt = `
You are a friendly and patient career counselling session conductor.

IMPORTANT:
- Do NOT search the web
- Do NOT reference existing articles
- Generate original content only

You will be given the student's self-assessment responses and profile information in JSON format.

The JSON contains:
- Student profile:
  - age
  - academic  level
  - main interests
- An array of questions
- Each question includes:
  - question text
  - selected_option
  - selected_text (the student's chosen answer)

Your task is to carefully analyze the student's choices and infer their:
- Interests
- Strengths
- Learning style
- Work preferences

Student Profile (JSON):
${profile}
Self-assessment responses (JSON):
${answers}

Task:
Based on the above student profile and self-assessment responses, suggest exactly 5 suitable career options for the student.

Guidelines:
- Use friendly and encouraging language
- Maintain a counselling tone
- Align careers with the student's demonstrated interests and strengths
- Provide a brief explanation (1–2 sentences) for each career option

Output format:
Return ONLY valid JSON.
Do NOT include any extra text, headings, or explanations outside JSON.

The JSON format must be exactly:

{
"careers":[
  {
  "career_name":"",
  "explanation":""
  }
  ]
}
`;

    const response = await model.generateContent(prompt);

    const text = response.response.text();
    console.log(text);


        // const jsonString = extractJSON(text);
        // console.log(jsonString);

        // const parsedJson = safeJSONParse(jsonString);
        // console.log(parsedJson);

      const parsedJson = parseAIJson(text);
      console.log(parsedJson);

    res.status(200).json(parsedJson);
  } catch {
    res.status(500).json({
      status: "error",
      message: "Failed to generate AI response",
      error: error.message,
    });
  }
});

export default route;
