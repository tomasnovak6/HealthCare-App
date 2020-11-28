import { IQuestion } from '../_interfaces/iquestion';

export const QUESTIONS: IQuestion[] = [
  {
    "id": 1,
    "name": "Aktuální bolest hlavy",
    "backgroundImage": "/assets/images/question-image-1.png",
    "answers": [
      {
        "answer": "Zlepšující se",
        "icon": "/assets/images/arrow-up.png",
        "points": 10
      },
      {
        "answer": "Stále stejná",
        "icon": "/assets/images/arrow-same.png",
        "points": 0
      },
      {
        "answer": "Zhoršující se",
        "icon": "/assets/images/arrow-down.png",
        "points": -10
      }
    ]
  },
  {
    "id": 2,
    "name": "Aktuální bolest kloubů",
    "backgroundImage": "",
    "answers": [
      {
        "answer": "Zlepšující se",
        "icon": "",
        "points": 5
      },
      {
        "answer": "Stále stejná",
        "icon": "",
        "points": 0
      },
      {
        "answer": "Zhoršující se",
        "icon": "",
        "points": -5
      }
    ]
  },
  {
    "id": 3,
    "name": "Zažívací problémy",
    "backgroundImage": "",
    "answers": [
      {
        "answer": "Zlepšující se",
        "icon": "",
        "points": 5
      },
      {
        "answer": "Stále stejná",
        "icon": "",
        "points": 0
      },
      {
        "answer": "Zhoršující se",
        "icon": "",
        "points": -5
      }
    ]
  }
];
