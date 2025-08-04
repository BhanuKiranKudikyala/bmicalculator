import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { 
  Download, 
  TrendingUp, 
  Heart, 
  Target, 
  Apple,
  Utensils,
  Clock,
  AlertCircle
} from "lucide-react";
import { getDietPlan, getHealthTips, getBMIColorAndProgress } from "../utils/bmiUtils";

const BMIResults = ({ results, onGeneratePDF }) => {
  const { bmi, category, userInfo } = results;
  const dietPlan = getDietPlan(category.name, userInfo.activityLevel);
  const healthTips = getHealthTips(category.name);
  const { color, progress } = getBMIColorAndProgress(bmi);

  return (
    <div className="space-y-6">
      {/* BMI Score Card */}
      <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold flex items-center justify-center gap-2">
            <TrendingUp className="w-6 h-6 text-blue-600" />
            Your BMI Results
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-5xl font-bold mb-2" style={{ color }}>
              {bmi.toFixed(1)}
            </div>
            <Badge 
              variant="secondary" 
              className="text-lg px-4 py-2"
              style={{ backgroundColor: `${color}20`, color, borderColor: color }}
            >
              {category.name}
            </Badge>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between text-sm text-gray-600">
              <span>BMI Scale</span>
              <span>{bmi.toFixed(1)}</span>
            </div>
            <Progress value={progress} className="h-3" />
            <div className="flex justify-between text-xs text-gray-500">
              <span>Underweight</span>
              <span>Normal</span>
              <span>Overweight</span>
              <span>Obese</span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-gray-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-900">Category Description</p>
                <p className="text-sm text-gray-600 mt-1">{category.description}</p>
              </div>
            </div>
          </div>

          <Button 
            onClick={onGeneratePDF}
            className="w-full bg-green-600 hover:bg-green-700 transition-all duration-200 hover:scale-105"
          >
            <Download className="w-4 h-4 mr-2" />
            Download PDF Report
          </Button>
        </CardContent>
      </Card>

      {/* Diet Plan Card */}
      <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl font-semibold flex items-center gap-2">
            <Utensils className="w-5 h-5 text-green-600" />
            Personalized Diet Plan
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-blue-50 rounded-lg p-3">
              <Apple className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-600">{dietPlan.calories}</div>
              <div className="text-sm text-gray-600">Daily Calories</div>
            </div>
            <div className="bg-green-50 rounded-lg p-3">
              <Target className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-600">{dietPlan.protein}g</div>
              <div className="text-sm text-gray-600">Protein</div>
            </div>
            <div className="bg-orange-50 rounded-lg p-3">
              <Clock className="w-6 h-6 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-orange-600">{dietPlan.meals}</div>
              <div className="text-sm text-gray-600">Meals/Day</div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900">Recommended Foods:</h4>
            <div className="flex flex-wrap gap-2">
              {dietPlan.foods.map((food, index) => (
                <Badge key={index} variant="outline" className="text-sm">
                  {food}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900">Foods to Avoid:</h4>
            <div className="flex flex-wrap gap-2">
              {dietPlan.avoid.map((food, index) => (
                <Badge key={index} variant="secondary" className="text-sm bg-red-100 text-red-700">
                  {food}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Health Tips Card */}
      <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl font-semibold flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-500" />
            Health Tips & Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {healthTips.map((tip, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-gray-700">{tip}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BMIResults;