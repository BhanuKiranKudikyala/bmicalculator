export const bmiCategories = [
  {
    name: "Underweight",
    min: 0,
    max: 18.5,
    color: "#3B82F6",
    description: "You may need to gain weight. Consider consulting a healthcare provider for a healthy weight gain plan."
  },
  {
    name: "Normal Weight",
    min: 18.5,
    max: 25,
    color: "#10B981",
    description: "You have a healthy weight! Maintain your current lifestyle with balanced diet and regular exercise."
  },
  {
    name: "Overweight",
    min: 25,
    max: 30,
    color: "#F59E0B",
    description: "You may benefit from weight loss. Consider a balanced diet and increased physical activity."
  },
  {
    name: "Obese",
    min: 30,
    max: null,
    color: "#EF4444",
    description: "Consider consulting a healthcare provider for a comprehensive weight management plan."
  }
];

export const dietPlans = {
  underweight: {
    calories: 2800,
    protein: 120,
    meals: 6,
    foods: [
      "Nuts and nut butters",
      "Avocados",
      "Whole grain bread",
      "Lean meats",
      "Fish",
      "Quinoa",
      "Sweet potatoes",
      "Greek yogurt",
      "Protein smoothies",
      "Olive oil",
      "Cheese",
      "Eggs"
    ],
    avoid: [
      "Processed junk foods",
      "Sugary drinks",
      "Trans fats",
      "Excessive caffeine",
      "Alcohol"
    ]
  },
  normal_weight: {
    calories: 2200,
    protein: 80,
    meals: 5,
    foods: [
      "Lean proteins",
      "Whole grains",
      "Fresh fruits",
      "Vegetables",
      "Fish",
      "Legumes",
      "Low-fat dairy",
      "Nuts in moderation",
      "Olive oil",
      "Quinoa",
      "Brown rice",
      "Berries"
    ],
    avoid: [
      "Processed foods",
      "Sugary snacks",
      "Fried foods",
      "Excessive alcohol",
      "Refined sugars"
    ]
  },
  overweight: {
    calories: 1800,
    protein: 100,
    meals: 5,
    foods: [
      "Lean proteins",
      "Vegetables",
      "Fruits",
      "Whole grains",
      "Fish",
      "Chicken breast",
      "Greek yogurt",
      "Legumes",
      "Green tea",
      "Leafy greens",
      "Berries",
      "Quinoa"
    ],
    avoid: [
      "High-calorie snacks",
      "Sugary drinks",
      "Fried foods",
      "Processed meats",
      "White bread",
      "Pastries",
      "Ice cream"
    ]
  },
  obese: {
    calories: 1500,
    protein: 120,
    meals: 6,
    foods: [
      "Lean proteins",
      "Non-starchy vegetables",
      "Berries",
      "Fish",
      "Chicken breast",
      "Egg whites",
      "Greek yogurt",
      "Quinoa",
      "Spinach",
      "Broccoli",
      "Cauliflower",
      "Green tea"
    ],
    avoid: [
      "High-calorie foods",
      "Sugary beverages",
      "Fried foods",
      "Fast food",
      "Processed snacks",
      "White rice",
      "Pasta",
      "Bread",
      "Alcohol"
    ]
  }
};

export const healthTips = {
  underweight: [
    "Eat nutrient-dense, calorie-rich foods to gain weight healthily",
    "Include strength training exercises to build muscle mass",
    "Eat frequent, smaller meals throughout the day",
    "Stay hydrated but avoid drinking large amounts before meals",
    "Consider consulting a nutritionist for a personalized meal plan",
    "Get adequate sleep (7-9 hours) to support healthy weight gain",
    "Track your progress and adjust your plan as needed"
  ],
  normal_weight: [
    "Maintain your current healthy lifestyle with balanced nutrition",
    "Continue regular physical activity (150 minutes moderate exercise weekly)",
    "Stay hydrated with 8-10 glasses of water daily",
    "Practice portion control to maintain your weight",
    "Include a variety of colorful fruits and vegetables in your diet",
    "Get regular health check-ups to monitor your overall health",
    "Manage stress through relaxation techniques or hobbies"
  ],
  overweight: [
    "Create a moderate calorie deficit through diet and exercise",
    "Increase physical activity gradually to 300 minutes per week",
    "Focus on whole, unprocessed foods",
    "Practice mindful eating and portion control",
    "Stay hydrated and replace sugary drinks with water",
    "Set realistic weight loss goals (1-2 pounds per week)",
    "Consider keeping a food diary to track your intake"
  ],
  obese: [
    "Consult with healthcare professionals for a comprehensive weight loss plan",
    "Start with low-impact exercises like walking or swimming",
    "Focus on creating sustainable lifestyle changes",
    "Consider working with a registered dietitian",
    "Join a weight loss support group for motivation",
    "Monitor your blood pressure and blood sugar regularly",
    "Be patient and celebrate small victories along the way",
    "Consider medical interventions if recommended by your doctor"
  ]
};

export const exerciseRecommendations = {
  underweight: [
    "Strength training 3-4 times per week",
    "Light cardio 2-3 times per week",
    "Focus on compound movements (squats, deadlifts, push-ups)",
    "Yoga or stretching for flexibility"
  ],
  normal_weight: [
    "Mix of cardio and strength training",
    "150 minutes moderate aerobic activity weekly",
    "Strength training 2-3 times per week",
    "Include flexibility and balance exercises"
  ],
  overweight: [
    "Start with 150 minutes moderate cardio weekly",
    "Gradually increase to 300 minutes weekly",
    "Add strength training 2-3 times per week",
    "Low-impact exercises like walking, swimming, cycling"
  ],
  obese: [
    "Begin with low-impact activities",
    "Walking, water aerobics, stationary cycling",
    "Gradually increase duration and intensity",
    "Consider working with a fitness professional"
  ]
};