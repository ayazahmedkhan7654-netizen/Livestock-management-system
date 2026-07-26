# Livestock Management System

A complete web app for cattle, dairy & beef farm owners in Pakistan to track animals, health, milk production and finances.

## Live Demo
https://your-vercel-link-here  <-- deploy ke baad yahan dalenge

## Features
- Dashboard with total animals, milk, profit
- Animal Register with search & filters
- Health Checker with AI Advisor
- Milk Production Log
- Financial Ledger in PKR
- Sales & Purchases

## AI Feature Used
**AI Health Advisor**: Farmers describe symptoms in Urdu/English and AI gives possible conditions, urgency level, and 3 immediate steps.

**System Prompt:**
"You are a veterinary assistant for livestock farmers in Pakistan. User will describe animal symptoms in Urdu or English. 1. List 2-3 most likely conditions 2. Give Urgency: Low, Medium, Emergency 3. Give 3 immediate steps farmer can do at farm 4. End with: 'Ye mashwara hai, final treatment ke liye vet se rabta karein' Keep language simple, mix Urdu + English. Never give exact medicine dose."

## Tech Stack
React + Vite + Tailwind CSS + Gemini AI + Vercel

## How to Run
1. `npm install`
2. Add `.env` with `VITE_GEMINI_API_KEY`
3. `npm run dev`
