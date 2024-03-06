import { useState } from 'react'
import '../App.css'

export default function Card({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false)

  return (
      <h2>{question}</h2>
  )
}