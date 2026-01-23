import { Router } from "express";
import dotenv from 'dotenv'
import {GoogleGenerativeAI} from '@google/generative-ai'

dotenv.config()

const route = Router()

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

const model = genAI.getGenerativeModel({
  "model":"gemini-2.5-flash"
})

route.get('/',(req,res)=>{
    res.send('Welcome to Sail-IN')
})

route.post('/getProfile',async(req,res)=>{
  try{

    const {name,age,level,interest} = req.body;
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
Return ONLY a numbered list (1–10) with questions and options.

`

const response = await model.generateContent(prompt)

const text = response.response.text();
console.log(text);

res.status(200).json(text)
  }
  
  catch{
    res.status(500).json({
      status: "error",
      message: "Failed to generate AI response",
      error: error.message
    });
  }

})

export default route