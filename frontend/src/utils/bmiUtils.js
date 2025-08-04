import { dietPlans, healthTips, bmiCategories } from '../data/mock';

export const calculateBMI = (weight, height) => {
  const heightInMeters = height / 100;
  return weight / (heightInMeters * heightInMeters);
};

export const getBMICategory = (bmi) => {
  return bmiCategories.find(category => 
    bmi >= category.min && (category.max === null || bmi < category.max)
  ) || bmiCategories[bmiCategories.length - 1];
};

export const getBMIColorAndProgress = (bmi) => {
  const category = getBMICategory(bmi);
  let progress = 0;
  
  if (bmi < 18.5) {
    progress = (bmi / 18.5) * 25;
  } else if (bmi < 25) {
    progress = 25 + ((bmi - 18.5) / (25 - 18.5)) * 25;
  } else if (bmi < 30) {
    progress = 50 + ((bmi - 25) / (30 - 25)) * 25;
  } else {
    progress = 75 + Math.min(((bmi - 30) / 10) * 25, 25);
  }
  
  return {
    color: category.color,
    progress: Math.min(progress, 100)
  };
};

export const getDietPlan = (category, activityLevel = 'moderate') => {
  const basePlan = dietPlans[category.toLowerCase().replace(' ', '_')] || dietPlans.normal_weight;
  
  // Adjust calories based on activity level
  let calorieMultiplier = 1;
  switch (activityLevel) {
    case 'sedentary':
      calorieMultiplier = 0.9;
      break;
    case 'light':
      calorieMultiplier = 1;
      break;
    case 'moderate':
      calorieMultiplier = 1.1;
      break;
    case 'active':
      calorieMultiplier = 1.2;
      break;
    case 'very-active':
      calorieMultiplier = 1.3;
      break;
    default:
      calorieMultiplier = 1;
  }
  
  return {
    ...basePlan,
    calories: Math.round(basePlan.calories * calorieMultiplier)
  };
};

export const getHealthTips = (category) => {
  return healthTips[category.toLowerCase().replace(' ', '_')] || healthTips.normal_weight;
};

export const generatePDFReport = (results) => {
  const { bmi, category, userInfo } = results;
  const dietPlan = getDietPlan(category.name, userInfo.activityLevel);
  const tips = getHealthTips(category.name);
  
  // Create PDF content
  const pdfContent = `
BMI HEALTH REPORT
================

Personal Information:
- Age: ${userInfo.age} years
- Gender: ${userInfo.gender}
- Height: ${userInfo.height} cm
- Weight: ${userInfo.weight} kg
- Activity Level: ${userInfo.activityLevel || 'Not specified'}

BMI Results:
- BMI Score: ${bmi.toFixed(1)}
- Category: ${category.name}
- Status: ${category.description}

Diet Plan Recommendations:
- Daily Calories: ${dietPlan.calories}
- Protein Intake: ${dietPlan.protein}g
- Recommended Meals: ${dietPlan.meals} per day

Recommended Foods:
${dietPlan.foods.map(food => `- ${food}`).join('\n')}

Foods to Avoid:
${dietPlan.avoid.map(food => `- ${food}`).join('\n')}

Health Tips:
${tips.map((tip, index) => `${index + 1}. ${tip}`).join('\n')}

Generated on: ${new Date().toLocaleDateString()}

Note: This report is for informational purposes only. 
Please consult with a healthcare professional for personalized medical advice.
`;

  // Create and download the PDF as text file for now (will be actual PDF in backend)
  const blob = new Blob([pdfContent], { type: 'text/plain' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `BMI_Report_${new Date().toISOString().split('T')[0]}.txt`;
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
};