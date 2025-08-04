import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Calculator, Download, User, Weight, Ruler, Calendar } from "lucide-react";
import BMIResults from "./BMIResults";
import { calculateBMI, getBMICategory, generatePDFReport } from "../utils/bmiUtils";
import { toast } from "../hooks/use-toast";

const BMICalculator = () => {
  const [formData, setFormData] = useState({
    height: "",
    weight: "",
    age: "",
    gender: "",
    activityLevel: ""
  });
  
  const [results, setResults] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCalculate = async () => {
    if (!formData.height || !formData.weight || !formData.age) {
      toast({
        title: "Missing Information",
        description: "Please fill in height, weight, and age.",
        variant: "destructive"
      });
      return;
    }

    setIsCalculating(true);
    
    // Simulate calculation delay for better UX
    setTimeout(() => {
      const bmi = calculateBMI(parseFloat(formData.weight), parseFloat(formData.height));
      const category = getBMICategory(bmi);
      
      const calculationResults = {
        bmi: bmi,
        category: category,
        userInfo: formData,
        timestamp: new Date().toISOString()
      };
      
      setResults(calculationResults);
      setIsCalculating(false);
      
      toast({
        title: "BMI Calculated Successfully",
        description: `Your BMI is ${bmi.toFixed(1)} (${category.name})`
      });
    }, 1000);
  };

  const handleGeneratePDF = () => {
    if (!results) return;
    
    generatePDFReport(results);
    toast({
      title: "PDF Generated",
      description: "Your personalized BMI report has been downloaded."
    });
  };

  const resetForm = () => {
    setFormData({
      height: "",
      weight: "",
      age: "",
      gender: "",
      activityLevel: ""
    });
    setResults(null);
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            BMI Diet Planner
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Calculate your Body Mass Index and get personalized diet recommendations 
            based on your health goals and lifestyle.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* BMI Calculator Form */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-semibold flex items-center gap-2">
                <Calculator className="w-6 h-6 text-blue-600" />
                BMI Calculator
              </CardTitle>
              <p className="text-gray-500">Enter your details to calculate BMI</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="height" className="flex items-center gap-2">
                    <Ruler className="w-4 h-4" />
                    Height (cm)
                  </Label>
                  <Input
                    id="height"
                    type="number"
                    placeholder="170"
                    value={formData.height}
                    onChange={(e) => handleInputChange("height", e.target.value)}
                    className="transition-all duration-200 focus:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="weight" className="flex items-center gap-2">
                    <Weight className="w-4 h-4" />
                    Weight (kg)
                  </Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="70"
                    value={formData.weight}
                    onChange={(e) => handleInputChange("weight", e.target.value)}
                    className="transition-all duration-200 focus:scale-105"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="age" className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Age
                  </Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="25"
                    value={formData.age}
                    onChange={(e) => handleInputChange("age", e.target.value)}
                    className="transition-all duration-200 focus:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Gender
                  </Label>
                  <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                    <SelectTrigger className="transition-all duration-200 focus:scale-105">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Activity Level (Optional)</Label>
                <Select value={formData.activityLevel} onValueChange={(value) => handleInputChange("activityLevel", value)}>
                  <SelectTrigger className="transition-all duration-200 focus:scale-105">
                    <SelectValue placeholder="Select activity level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sedentary">Sedentary (little/no exercise)</SelectItem>
                    <SelectItem value="light">Light (light exercise 1-3 days/week)</SelectItem>
                    <SelectItem value="moderate">Moderate (moderate exercise 3-5 days/week)</SelectItem>
                    <SelectItem value="active">Active (hard exercise 6-7 days/week)</SelectItem>
                    <SelectItem value="very-active">Very Active (very hard exercise/physical job)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-4">
                <Button 
                  onClick={handleCalculate} 
                  disabled={isCalculating}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 transition-all duration-200 hover:scale-105"
                >
                  {isCalculating ? "Calculating..." : "Calculate BMI"}
                </Button>
                <Button 
                  onClick={resetForm} 
                  variant="outline"
                  className="transition-all duration-200 hover:scale-105"
                >
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results Display */}
          {results && (
            <BMIResults 
              results={results} 
              onGeneratePDF={handleGeneratePDF}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;