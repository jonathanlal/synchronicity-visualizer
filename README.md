# Synchronicity Visualizer

A data visualization tool for exploring patterns in synchronicity observations. This application analyzes and visualizes data from users who record moments when they notice repeating time patterns (like 11:11, 20:20, etc.) - a phenomenon often referred to as synchronicity.

## What is Synchronicity?

Synchronicity refers to meaningful coincidences that seem to be connected but have no causal relationship. In this context, it specifically tracks when people notice repeating or matching time patterns on clocks, such as:
- 11:11
- 12:12
- 20:20
- 23:23

This app helps visualize and understand patterns in when and how people notice these moments.

## Features

### Interactive Visualizations

The app provides 5 different interactive graph types to explore synchronicity data:

1. **Sync Time Frequency**
   - Bar chart showing which synchronicity patterns (11:11, 20:20, etc.) are noticed most frequently
   - Helps identify the most common sync times across all users

2. **Monthly Trends**
   - Line chart displaying how synchronicity recordings vary across different months
   - Reveals seasonal patterns in observations

3. **User Activity**
   - Bar chart comparing engagement levels by user
   - Shows which users have recorded the most synchronicity events

4. **Accuracy Distribution**
   - Bar chart analyzing reaction times in 6 buckets (0-5s, 6-10s, 11-20s, 21-30s, 31-45s, 46-60s)
   - Shows how quickly users notice and record synchronicities after the sync moment

5. **Hour of Day Distribution**
   - Bar chart showing synchronicity frequency across all 24 hours
   - Reveals daily patterns (morning, afternoon, evening trends)

### Modern UI

- **Dark Mode Theme**: Easy on the eyes with a sleek, modern dark interface
- **Interactive Cards**: Click to switch between different visualizations
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Smooth Transitions**: Beautiful animations and hover effects

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Chart.js with react-chartjs-2
- **Deployment**: Vercel
